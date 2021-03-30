import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)
    //const showPosts = ref(true)

    const load = async () => {
      try {
        // simulate delay
        /*await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })*/

        /*let data = await fetch("http://localhost:3000/posts")
        if (!data.ok) {
          throw Error("no data available")
        }

        posts.value = await data.json()*/
        const res = await projectFirestore.collection("posts")
          .orderBy("createdAt", 'desc')
          .get()
        
        posts.value = res.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return {
        posts, error, load
    }
}

export default getPosts