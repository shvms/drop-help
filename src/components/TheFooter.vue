<template>
  <footer class="footer">
    <div class="container-fluid mx-auto">
      <div class="text my-3">
        <router-link :to="{'name': 'Index'}">
          <h4 class="mb-0 header">DropHelp</h4>
        </router-link>
        <small class="text-muted subtitle">Trying to make the voices go far.</small>
      </div>

      <a href="https://github.com/shvms/drop-help" class="button github">
        <font-awesome-icon class="mt-1 mr-2" :icon="['fab', 'github']" />Contribute On GitHub
      </a>

      <a href="#" class="button database">
        <font-awesome-icon class="mt-1 mr-2" :icon="['fas', 'database']" />Open Database
      </a>

      <a href="#" class="button mail">
        <font-awesome-icon class="mt-1 mr-2" :icon="['fas', 'envelope']" />add to the list
      </a>

      <a href="#" class="button twitter">
        <font-awesome-icon class="mt-1 mr-2" :icon="['fab', 'twitter']" />Follow to get updates
      </a>

      <div class="bottom-link">
        <router-link :to="{'name': 'About'}">about</router-link>
        <span class="text-muted mx-2">&bull;</span>
        <router-link :to="{'name': 'Faq'}">faq</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
.footer {
  margin-top: 80px;
  padding-bottom: 20px;
  background: #eff8f5;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  text-align: center;
}

.header {
  font-family: "Roboto Mono", sans-serif;
}

.subtitle {
  font-family: "Noto Sans JP", sans-serif;
}

.button {
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
  outline: none;
  padding: 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
  text-align: center;
  width: 15rem;
  font-size: 0.9rem;

  padding-left: 0.65rem;
  transform: 0.2s ease-in-out;
}

.github {
  background: #000;
  color: #fff;
}

.github:hover {
  background: #343a40;
}

.database {
  background: #167d54;
  color: #fff;
}

.database:hover {
  background: #499e7c;
}

.twitter {
  background: #00acee;
  color: #fff;
}

.twitter:hover {
  background: #4fceff;
}

.mail {
  background: #c7362c;
  color: #fff;
}

.mail:hover {
  background: #e65c53;
}

.bottom-link a {
  font-family: "Roboto Mono", sans-serif;
}
</style>
