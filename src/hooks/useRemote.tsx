import { loadRemote, registerRemotes,  } from "@module-federation/runtime";
import { lazy } from "react";

const useRemote = (scope: string, moduleName: string) => {
  const LazyComponent = lazy(() => {
    return new Promise<unknown>((resolve, reject) => {
      registerRemotes([
        {
          name: scope,
          alias: scope,
          type: "module",
          entry: "http://localhost:2001/remoteEntry.js",
        },
      ]);
      loadRemote(`${scope}/${moduleName}`, {
        from: "runtime",
      })
        .then((module) => {
          resolve({ default: module[moduleName] } as unknown);
          console.log("Module loaded:", module);
        })
        .catch((error) => {
          reject(error);
          console.error("Error loading module:", error);
        });
      // return loadRemote(`${scope}/${module}`, {
      //   from: "runtime",
      // }) as Promise<unknown>;
    });
  });

  return (props: unknown) => {
    return <LazyComponent {...props} />;
  };
};

export default useRemote;
