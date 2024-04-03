import React from 'react';
import { useCreatePostMutation, useDeletePostMutation, useGetApiByNameQuery, useUpdatePostMutation } from './services/api';


const App = () => {
  const {data, error, isLoading,isSuccess,isFetching} = useGetApiByNameQuery();

  return (
    <div>
      <h1>React RTK Query</h1>
      {/* this is JSX codintional rendering Statement is condition is true will execute h1 */}
      {isLoading && <h1>Loading..</h1>}
      {isFetching && <h1>Fetching..</h1>}
      {error && <h2>Error</h2>}

      {/* is data fethces succesfully */}
      {isSuccess && (
        <div>
          {data?.map(posts=>{
            return(
            <div key={posts.id}>
              <span>Title: {posts.title}</span>              
            </div> 
            ) 
          })}   
        </div>
      )}   

    <div>
      <AddPost/>
    </div>

    </div>
  )
}

export const AddPost=()=>{
    // we can add new post by
    const[addPost]=useCreatePostMutation();
    const[updatePost]=useUpdatePostMutation();
    const[deletePost]=useDeletePostMutation();
    

    const posts={
        "id":102,
        "title":"AryanFitTech",
        "views":"400",
    };
    const postsUpdate={
      "id":102,
      "title":"title updated",
      "views":"view update",
  };

    const handler=async()=>{
      await addPost(posts);
    }
    const handleDelete=async()=>{
      await deletePost(posts.id);
    }
    const handleUpdate=async()=>{
      await updatePost(postsUpdate);
    }

    return(
      <>
      <button onClick={handler}>Add Post</button>
      <button onClick={handleDelete}>Delete Post</button>
      <button onClick={handleUpdate}>Update Post</button>

      </>
    )
}


export default App
