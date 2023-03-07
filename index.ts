import Koa from "koa";
//import Router, { RouterContext } from "koa-router";
import logger from "koa-logger";
import json from "koa-json";
import {router as articles} from "./routes/articles";

import passport from "koa-passport";
import {router as user} from "./routes/special";

const app: Koa = new Koa();
//const router: Router = new Router();

/*
router.get( '/api/v1', async (ctx: RouterContext, next: any) => {
    ctx.body = {
      message: "Welcome to the blog API!"};
    await next();
   });


const welcomeAPI = async (ctx: RouterContext, next: any) => {
  ctx.body = {
    message: "Welcome to the blog API!"
  };
  await next();
}
*/

//router.get('/api/v1', welcomeAPI);


app.use(logger());
app.use(json());
//app.use(router.routes());

app.use(passport.initialize());
app.use(articles.routes());
app.use(user.routes());
/*
app.use(async (ctx: RouterContext, next: any) => {
  try{
    await next();
    if(ctx.status === 404 ){
      ctx.body = { err: "Resourse not found"};
     }
    } catch(err: any){
       ctx.body = { err:err}
    }
  });
*/

app.listen(10888);
