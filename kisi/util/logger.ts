export const logger = {
    warn: (error: Error | string, path?: string) => {
      console.warn(
        `${path || "Unknown path"} - ${
          typeof error === "string" ? error : error.message
        }`
      );
    },
    info: (error: Error | string, path?: string) => {
      console.info(
        `${path || "Unknown path"} - ${
          typeof error === "string" ? error : error.message
        }`
      );
    },
    error: (error: Error | string, path?: string) => {
      console.error(
        `${path || "Unknown path"} - ${
          typeof error === "string" ? error : error.message
        }`
      );
    },
    debug: (error: Error | string, path?: string) => {
      console.debug(
        `${path || "Unknown path"} - ${
          typeof error === "string" ? error : error.message
        }`
      );
    },
};
  