// Vai ser importado a classe
import { Router } from "./Router.js";

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/about', '/pages/about.html')
router.add('/contact', '/pages/contact.html')

window.router() = () => router.route()

