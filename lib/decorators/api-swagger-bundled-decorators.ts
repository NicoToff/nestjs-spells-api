import { applyDecorators } from "@nestjs/common";
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiResponseMetadata,
  ApiHeader,
} from "@nestjs/swagger";

export function ApiPostOperationResponse(
  entity: string,
  type: ApiResponseMetadata["type"]
) {
  return applyDecorators(
    ApiOperation({
      summary: `Create or update a ${entity}`,
      description: `This endpoint creates or updates a ${entity}. The ${entity} is created with the given name, and a slug is automatically generated from it. For an identical slug, the ${entity} is updated.`,
    }),
    ApiResponse({
      status: 201,
      description: `The newly created (or updated) ${entity}`,
      type,
    }),
    ApiHeader({
      name: "api-key",
      description: `The API key to use to create or update the ${entity}`,
      required: true,
    }),
    ApiResponse({
      status: 401,
      description: `The API key is missing or invalid`,
    })
  );
}

export function ApiGetAllOperationBundle({
  entity,
  type,
}: {
  entity: string;
  type: ApiResponseMetadata["type"];
}) {
  return applyDecorators(
    ApiOperation({
      summary: `Get all ${entity}s`,
      description: `This endpoint returns all ${entity}s in the database.`,
    }),
    ApiResponse({
      status: 200,
      description: `The list of all ${entity}s`,
      type,
      isArray: true,
    })
  );
}

export type ApiGetBySlugOperationBundleArgs = {
  entity: string;
  type: ApiResponseMetadata["type"];
  paramExample: string;
  enum?: string[];
};
export function ApiGetBySlugOperationBundle({
  entity,
  type,
  paramExample: example,
  enum: enumValues,
}: ApiGetBySlugOperationBundleArgs) {
  return applyDecorators(
    ApiOperation({
      summary: `Get a single ${entity}}`,
      description: `This endpont returns a single ${entity}, referenced by its slug (slugs are used as ID in the database). If the source is not found, null is returned.`,
    }),
    ApiParam({
      name: "slug",
      description: `The slug of the ${entity} to return`,
      example,
      enum: enumValues,
    }),
    ApiResponse({
      status: 200,
      description: `The ${entity} with the given slug`,
      type,
    }),
    ApiResponse({
      status: 404,
      description: `No ${entity} was found for the given slug`,
    })
  );
}
