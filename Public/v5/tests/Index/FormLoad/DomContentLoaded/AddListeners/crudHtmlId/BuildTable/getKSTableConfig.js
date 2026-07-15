import configJson from "./configs/crud.json" with { type: "json" };

export const getKSTableConfig = async () => {
    return structuredClone(configJson);
};