<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Profiles') }}
            </h2>
          </div>
        </header>

        <div class="o-section__content  t-section__content  ">
          <div class="o-grid">
            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="http://twitter.com/pixari"
                  target="_blank"
                  class="t-link-container"
                  :aria-label="$t('Twitter Profile')"
                  rel="noreferrer"
                >
                  <div class="o-media  o-media--block">
                    <div class="o-media__figure">
                      <div class="c-profile__icon">
                        <i class="fa fa-lg fa-twitter" />
                      </div>
                    </div>
                    <div class="o-media__body  o-content__body">
                      <h3 class="t-link-container__item">
                        Twitter
                      </h3>
                      <p>
                        Where I share some thoughts.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="https://github.com/pixari/"
                  target="_blank"
                  class="t-link-container"
                  :aria-label="$t('Github Profile')"
                  rel="noreferrer"
                >
                  <div class="o-media  o-media--block">
                    <div class="o-media__figure">
                      <div class="c-profile__icon">
                        <i class="fa  fa-lg fa-github" />
                      </div>
                    </div>
                    <div class="o-media__body  o-content__body">
                      <h3 class="t-link-container__item">
                        GitHub
                      </h3>
                      <p>
                        Where I share some code.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            
            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="https://www.linkedin.com/in/raffaelepizzari/"
                  target="_blank"
                  class="t-link-container"
                  :aria-label="$t('LinkedIn Profile')"
                  rel="noreferrer"
                >
                  <div class="o-media  o-media--block">
                    <div class="o-media__figure">
                      <div class="c-profile__icon">
                        <i class="fa fa-lg fa-github" />
                      </div>
                    </div>
                    <div class="o-media__body  o-content__body">
                      <h3 class="t-link-container__item">
                        LinkedIn
                      </h3>
                      <p>
                        Where I share some posts.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
}
</script>
