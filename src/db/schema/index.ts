import * as appSchema from "@/db/schema/app-schema";
import * as authSchema from "@/db/schema/auth-schema";

export const schema = {
  ...appSchema,
  ...authSchema,
};
