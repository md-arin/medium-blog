import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, verify } from "hono/jwt";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string ;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*",async (c, next)=>{
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader , c.env.JWT_SECRET)
        if(user){
            c.set("userId", user.id);
           await next();
        } 
    } catch (error) {
        console.log(error);
        return c.json({
            msg: "you are not logged in"
        })
    }
})

blogRouter.post('/', async (c) => {
    const body  = await c.req.json()
    const authorId = c.get("userId")
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      try {
        
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(authorId)
            }
        })
        
        return c.json({
            id: blog.id
        })

      } catch (error) {
        c.status(411);
        console.log(error);
        
        return c.json({
            msg: "Error while posting blog"
        })
      }
  })
  
blogRouter.put('/', async (c) => {
    const body  = await c.req.json()
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      try {
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })

        return c.json({
            blog
        })
        
      } catch (error) {
        c.status(411);
        console.log(error);
        
        return c.json({
            msg: "Error while Updating blog"
        })
      }
  })


blogRouter.get('/bulk', async (c) => {
   
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    const blog = await prisma.blog.findMany({})
    
      // Add Pagination  

    return c.json({
        blog
    })

  })
  
blogRouter.get('/:id', async (c) => {
    const id  =  c.req.param("id")
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            }
        })

        return c.json({
            blog
        })
        
    } catch (error) {
        c.status(411);
        console.log(error);
        
        return c.json({
            msg: "Error while fetching blog"
        })
    }  
  })
  