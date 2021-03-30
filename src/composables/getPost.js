import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    //const showPosts = ref(true)

    const load = async () => {
      try {
        // simulate delay
        /*await new Promise(resolve => {
            setTimeout(resolve, 2000)
        })*/

        /*let data = await fetch("http://localhost:3000/posts/" + id)
        if (!data.ok) {
          throw Error("that post does not exist")
        }

        post.value = await data.json()*/

        let res = await projectFirestore.collection("posts").doc(id).get()
        if (!res.exists) {
          throw Error("That post does not exist")
        }
        post.value = { ...res.data(), id: res.id }
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return {
        post, error, load
    }
}

export default getPost