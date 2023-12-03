import { ICatalog } from "../types/catalog";
import { fetcher } from "../utils/fetcher";
import { logger } from "../utils/logger";

const imagesUrl = '/api/images'

export const CatalogService = {
  getCatalog: async () => {
    const response = await fetcher<Array<ICatalog>>(
        imagesUrl,
      {
        method: "GET",
      }
    );

    if (!response.success) {
      logger.warn("no data recieved from service");
      return [];
    }
    return response.result;
  },
  saveCatalog: async (catalogData) => {
    try {
      const response = await fetcher(
        imagesUrl,
        {
          method: "POST",
          body: JSON.stringify(catalogData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (!response.success) {
        logger.warn("Failed to save catalog data");
        return null;
      }
  
      return response.result;
    } catch (error) {
      console.error("An error occurred while saving catalog:", error);
      return null;
    }
  },
};
