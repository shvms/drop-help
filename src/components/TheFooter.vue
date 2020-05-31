<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm h-100">
          <blockquote class="blockquote">
            <p class="mb-0">DropHelp</p>
            <small class="text-muted">Trying to make the voices go far.</small>
          </blockquote>
        </div>
        <div class="col-sm h-100 footer-actions">
          <div class="row" style="flex-direction: column">
            <div class="col my-1">
              <button class="btn btn-light">
                <font-awesome-icon :icon="['fab', 'github']" />GitHub
              </button>
            </div>
            <div class="col my-1">
              <button class="btn btn-light">Contributors</button>
            </div>
            <div class="col my-1">
              <button class="btn btn-light">Database</button>
            </div>
          </div>
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
  name: "TheFooter",
};
</script>

<style scoped>
.footer {
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 55px 50px;
  margin-top: 80px;
  color: #fff;
}

.footer-actions .btn {
  width: 10rem;
}
</style>
