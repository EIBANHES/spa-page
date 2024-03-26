export class Router {

  router = {}

  add(routerName, page) {
    this.router[routerName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
  }


}



