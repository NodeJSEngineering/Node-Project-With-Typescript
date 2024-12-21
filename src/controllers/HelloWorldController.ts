import {
  Controller,
  JsonController,
  Get,
  QueryParam,
  Post,
  Body,
  Param,
  HttpCode,
  Req,
  Res,
  Redirect,
  HeaderParam,
  CookieParam,
} from "routing-controllers";
import "reflect-metadata";
import { Tag } from "../models/Tag";

class HelloWorldPost {
  message: string;
}

@JsonController('/hello-world')
// @Controller("/hello-world") // << the base url for everything in this controller, e.g. localhost:4000/hello-world
export class HelloWorldController {
  /* << sub path, so this will be `localhost:4000/hello-world, but you could have
  @Get('/page2') for a endpoint on localhost:4000/hello-world/page2 */
  // this will look for /hello-world?goodbye=true
  @Get("/")
  index(@QueryParam("goodbye") goodbye: string) {
    if (goodbye === "true") return "goodbye";
    // whatever you return here will be sent as the response. In this case
    // we can even include html..
    return "hello world!";
  }

  // this will look for /123 (and set '123' as postId)
  @Get("/post/:id")
  show(@Param("id") postId: string) {
    return `Showing post ${postId}`;
    // (real app would return a blog post data)
  }

  // if you specify a class type to parameter that is decorated with @Body(), routing-controllers will use class-transformer to create instance of the given class type from the data received in request body. To disable this behaviour you need to specify a { classTransformer: false } in RoutingControllerOptions when creating a server.
  @HttpCode(201)
  @Post("/add")
  // store(@Body() newPostObj: HelloWorldPost) {
  store(@Body() newPostObj: Tag) {
    // console.log(newPostObj)
    return {
      type: typeof newPostObj,
      isHelloWorldPost: newPostObj.constructor.name,
      body: newPostObj,
    };
  }

  // @Get("/")
  // helloWorld(@Req() request: any, @Res() response: any) {
  //   return response.send("some response...");
  // }

  // @Get("/")
  // helloWorld1(@Res() response: any) {
  //   return response.redirect("/hello-world-redirect");
  // }

  // @Get("/")
  // @Redirect("/hello-world-redirect")
  // helloWorld2() {
  //   // ...
  // }

  // @Get("/")
  // @Redirect("/hello-world-redirect")
  // helloWorld3() {
  //   return "/actually-redirect-to-this";
  // }

  @Get("/hello-world")
  index1(@HeaderParam("authorization") token: string) {
    return `Your HTTP header's auth token: ${token}`;
  }

  @Get("/hello-world")
  index2(@CookieParam("some-cookie-param") cookieParam: string) {
    return `Your cookie param was ${cookieParam}`;
  }
}
