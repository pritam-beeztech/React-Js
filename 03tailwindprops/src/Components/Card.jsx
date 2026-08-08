import React from 'react'

function Card({username,btntext}) {
    console.log(username);



  return (
    <div class="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/38817626/pexels-photo-38817626.jpeg" />
  </div>
  <div class="flex items-center md:items-start">
    <span class="text-2xl font-medium">{username}</span>
    <span class="font-medium text-sky-500">{btntext}</span>
    <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card