"use client";

import React, { createContext, useContext, useRef, ReactNode } from 'react';

type QueryFn = () => Promise<any>;

interface DataRequestRef {
  queryFn: QueryFn | null;
  promise: Promise<any> | null;
  state: { data: any };
  observers: Set<() => void>;
  subscribe: (cb: () => void) => () => void;
  notify: () => void;
  get: () => { data: any };
  defineQuery: (params: { queryFn: QueryFn; deps: any[] }) => Promise<void>;
}

interface DataRequestProviderProps {
  children: ReactNode;
}

const DataRequestContext = createContext<React.MutableRefObject<DataRequestRef> | null>(null);

export const DataRequestProvider: React.FC<DataRequestProviderProps> = ({ children }) => {
  const dataRequestRef = useRef<DataRequestRef>({
    queryFn: null,
    promise: null,
    state: { data: undefined },
    observers: new Set(),
    subscribe(cb) {
      this.observers.add(cb);
      return () => this.observers.delete(cb);
    },
    notify() {
      this.observers.forEach(cb => cb());
    },
    get() {
      return this.state;
    },
    async defineQuery({ queryFn, deps }) {
      if (!!this.promise) return;
      this.queryFn = queryFn;
      this.promise = queryFn();
      const data = await this.promise;
      this.state = { data };
      this.notify();
    },
  });

  return (
    <DataRequestContext.Provider value={dataRequestRef}>
      {children}
    </DataRequestContext.Provider>
  );
};

export const useDataRequest = (): React.MutableRefObject<DataRequestRef> => {
  const context = useContext(DataRequestContext);
  if (!context) {
    throw new Error('useDataRequest must be used within a DataRequestProvider');
  }
  return context;
};
