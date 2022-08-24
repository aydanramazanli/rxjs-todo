import React from 'react';



const Card= () => {
  return (
   
<div class="flex justify-center items-center h-screen">
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">username</div>
          <p class="text-gray-700 text-base">
          location, twitter_username
          </p>
        </div>
        <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
           meedia  link
           </div>
        <div class="px-6 py-4">
         
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">repos, </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"> gists</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"> followers</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">following</span>
        </div>
      </div>
</div>
  );
};

export default Card;