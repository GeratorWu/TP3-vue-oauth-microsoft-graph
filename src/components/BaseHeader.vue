<template>
    <header>
        <nav>
            <a href="#">Accueil</a>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'BaseHeader'
}
</script>


<style>
header {
  background-color: #13a139;
  padding: 1rem 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #000000;
}

</style>
