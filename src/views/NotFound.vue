<template>
  <div class="flex h-screen w-screen">
    <div class="m-auto text-center">
      <span class="text-4xl">:(</span>
      <h1>Not Found</h1>
      <p>That link is broken and cannot be found on this website.</p>

      <div class="flex justify-center mt-4 gap-4">
        <RouterLink :to="{ name: 'home' }" class="button justify-center">
          Home
        </RouterLink>
        <RouterLink :to="{ name: 'projects' }" class="button justify-center">
          See my Projects
        </RouterLink>
      </div>
    </div>
  </div>
</template>
