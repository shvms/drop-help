<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm h-100">
          <blockquote class="blockquote">
            <h4 class="mb-0" style="font-family: 'Poppins', sans-serif;">DropHelp</h4>
            <small class="text-muted">Trying to make the voices go far.</small>
          </blockquote>
        </div>
        <div class="col-sm h-100 footer-actions">
          <a href="https://github.com/shvms/drop-help" class="button github">
            <font-awesome-icon class="mt-1 mr-2" :icon="['fab', 'github']" />Contribute On GitHub
          </a>
          <a href="#" class="button database">
            <font-awesome-icon class="mt-1 mr-2" :icon="['fas', 'database']" />Database
          </a>

          <a href="#" class="button twitter">
            <font-awesome-icon class="mt-1 mr-2" :icon="['fab', 'twitter']" />Follow to get updates
          </a>
        </div>
        <div class="col-sm h-100">
          <div class="row" style="flex-direction: column">
            <div class="col">
              <p class="lead">Want to add to the list?</p>
            </div>
          </div>
          <div class="row" style="flex-direction: column">
            <div class="col">
              <button class="btn btn-link">Pull request on GitHub</button>
            </div>
          </div>
          <div class="row">
            <div class="col my-1">
              <button class="btn btn-link">Mail us!</button>
            </div>
          </div>
        </div>
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
  background-color: #eff8f5;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 55px 50px;
  margin-top: 80px;
}

.footer-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>
