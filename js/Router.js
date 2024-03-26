export class Router {
  router = {}
  add(routeName, page) {
    this.router[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.router[pathname] || this.router[404]
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.getElementById('app').innerHTML = html
      })
  }
}