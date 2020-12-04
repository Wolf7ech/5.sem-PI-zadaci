<template>
  <div class="signup">
    <h1>Signup page</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleUsername">Username</label>
              <input
                type="username"
                class="form-control"
                id="exampleUsername"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <label for="exampleName">Name</label>
              <input
                type="name"
                class="form-control"
                id="exampleName"
                placeholder="Enter name"
              />
            </div>
            <div class="form-group">
              <label for="exampleSurename">Surename</label>
              <input
                type="surename"
                class="form-control"
                id="exampleSurename"
                placeholder="Enter surename"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>