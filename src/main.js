import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import ReviewTabs from './components/ReviewTabs.vue'
import CreateReviews from './components/CreateReviews.vue'
import ProductDetails from './components/ProductDetails.vue'

const app = createApp(App)
app.mount('#app')
app.component('review-tabs', ReviewTabs)
app.component('create-reviews', CreateReviews)
app.component('product-details', ProductDetails)
