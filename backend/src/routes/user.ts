import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from "@me-cyno/medium-common";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.get("/me", async (c) => {
  const authHeader = c.req.header("authorization") || "";
  const decodedValue =  await verify(authHeader, c.env.JWT_SECRET);

  if(!decodedValue){
    return c.json({
      msg: "user is not authenticated"
    })
  }
  const name = decodedValue.name
  const username = decodedValue.username

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  // const user = await prisma.user.findFirst({
  //   where: { 
  //     id: decodedValue.payload.id
  //   }
  // })

  return c.json({
    name,
    username,
    msg: "User verified"
  })
})

userRouter.post('/signup', async(c) => {
    const body  = await c.req.json()
    const {success} = signupInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({
            msg: "Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          name: body.name
        }
      })
  
      const jwt = await sign({
        name: user.name,
        id: user.id,
        username: user.username
      }, c.env.JWT_SECRET)
  
      return c.json({
        jwt
      })
      
    } catch (error) {
      c.status(411);
      console.log(error);
      
      return c.text("invalid")
    }
  })
  
  
  userRouter.post('/signin', async(c) => {
    const body  = await c.req.json()
    const {success} = signinInput.safeParse(body)
    if(!success){
        c.status(411);
        return c.json({
            msg: "Invalid inputs"
        })
    }
    const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
  
    try {
      const user = await prisma.user.findFirst({
        where: {
          username: body.username,
          password: body.password
        }
      })
  
      if(!user){
        c.status(403);
        return c.json({msg: "Wrong Credentials"})
      }
  
      const jwt = await sign({
        name: user.name,
        id: user.id,
        username: user.username
      }, c.env.JWT_SECRET)
  
      return c.json({
        
        jwt
      })
      
    } catch (error) {
      c.status(411);
      return c.text("invalid")
    }
  })

  userRouter.get("/allusers", async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const users = await prisma.user.findMany({})

  return c.json({
    users
  })
  })