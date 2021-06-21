import Login from './routes/auth/login'

export class RouteModule {
   app: any

   constructor (private data: any) {
      this.app = this.data.app

      this.app.use("/auth", Login)
   }
}