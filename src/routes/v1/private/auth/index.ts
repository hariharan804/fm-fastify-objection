import { FastifyPluginAsync } from "fastify";
import { knexInit } from "../../../../plugins/database";
 
const auth: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get(
    "/",
    {
      schema: {
        tags: ["EXAMPLE"],
      },
    },
    async function (request: any, reply) {
       // Resolves to any
      const data  = await knexInit('User');
      
      console.log("🚀 ~ file: index.ts:14 ~ data:", data)
      
      return reply.send({users: data});
    }
  );
};

export default auth;
