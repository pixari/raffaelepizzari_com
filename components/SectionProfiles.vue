<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Profiles') }}
            </h2>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">
          <div class="o-grid">
            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="http://twitter.com/pixari"
                  target="_blank"
                  class="t-link-container"
                  aria-label="Twitter profile"
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
                  </div><!-- /o-media -->
                </a><!-- /t-link-container -->
              </div><!-- /o-content -->
            </div><!-- /o-grid__col -->

            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="https://github.com/pixari/"
                  target="_blank"
                  class="t-link-container"
                  aria-label="GitHub profile"
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
                  </div><!-- /o-media -->
                </a><!-- /t-link-container -->
              </div><!-- /o-content -->
            </div><!-- /o-grid__col -->

            <div class="o-grid__col-xl-4  o-grid__col-sm-6">
              <div class="o-content">
                <a
                  href="https://facebook.com/pixari/"
                  target="_blank"
                  class="t-link-container"
                  aria-label="Facebook profile"
                  rel="noreferrer"
                >
                  <div class="o-media  o-media--block">
                    <div class="o-media__figure">
                      <div class="c-profile__icon">
                        <i class="fa  fa-lg  fa-facebook" />
                      </div>
                    </div>
                    <div class="o-media__body  o-content__body">
                      <h3 class="t-link-container__item">
                        Facebook
                      </h3>
                      <p>
                        Where I share some privacy.
                      </p>
                    </div>
                  </div><!-- /o-media -->
                </a><!-- /t-link-container -->
              </div><!-- /o-content -->
            </div><!-- /o-grid__col -->
          </div><!-- /o-grid -->
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
  </section><!-- /o-section -->
</template>