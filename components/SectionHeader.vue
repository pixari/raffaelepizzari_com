<template>
  <section class="o-section o-section--header t-section t-section--header">
    <div class="c-header">
      <div class="o-section__header-bg  t-section__header" />
      <div class="o-section__content-bg  t-section__content" />

      <div class="o-container">
        <div class="o-section__container">
          <header class="o-section__header  c-header__header  t-section__header">
            <div class="c-header__inner-header">
              <div class="c-header__avatar">
                <div class="a-header  c-avatar">
                  <img
                    class="c-avatar__img"
                    src="~/assets/images/header/raffaele_pizzari_frontend_developer.jpg"
                    alt=""
                  >
                </div><!-- /c-avatar -->
              </div><!-- /c-header-avatar -->
            </div><!-- /c-header__inner-header -->
          </header><!-- /o-section__header -->

          <div class="o-section__content  c-header__content  t-section__content">
            <div class="c-header__inner-content">
              <div class="c-header__top">
                <div class="c-header__brand">
                  <div class="c-brand">
                    <h1 class="c-brand__title  t-title">
                      <span class="c-brand__sizer">
                        <span class="a-header  c-brand__first-word  t-title__first-word">
                          {{ me.firstname }}
                        </span>
                        <span class="a-header  c-brand__second-word  t-title__second-word">
                          {{ me.lastname }}
                        </span>
                      </span>
                    </h1>
                    <h2 class="a-header  c-brand__sub-title  t-sub-title">
                      <span class="c-brand__sizer">
                        {{ $t('Front-End Developer based in Munich, Germany') }} 
                      </span>
                    </h2>
                  </div><!-- /c-brand -->
                </div><!-- /c-header__brand -->

                <ul class="c-header__social-buttons c-social-buttons">
                  <li class="a-header">
                    <a 
                      href="https://www.facebook.com/pixari"
                      target="_blank"
                      class="c-social-button t-social-button"
                      aria-label="Facebook profile"
                      rel="noreferrer"
                    >
                      <i class="fa fa-lg fa-facebook" />
                    </a>
                  </li>
                  <li class="a-header">
                    <a
                      href="https://twitter.com/pixari"
                      target="_blank"
                      class="c-social-button t-social-button"
                      aria-label="Twitter profile"
                      rel="noreferrer"
                    >
                      
                      <i class="fa  fa-lg  fa-twitter" />
                    </a>
                  </li>
                  <li class="a-header">
                    <a
                      href="https://github.com/pixari"
                      target="_blank"
                      class="c-social-button t-social-button"
                      aria-label="GitHub profile"
                      rel="noreferrer"
                    >
                      <i class="fa fa-lg fa-github" />
                    </a>
                  </li>
                  <li class="a-header">
                    <a
                      href="mailto:raffaele.pizzari@gmail.com"
                      target="_blank"
                      class="c-social-button t-social-button"
                      aria-label="Personal E-Mail"
                      rel="noreferrer"
                    >
                      <i class="fa fa-lg fa-envelope" />
                    </a>
                  </li>
                </ul><!-- /c-header__social-buttons -->
              </div><!-- /c-header__top -->

              <div class="c-header__contact">
                <hr
                  class="a-header c-header__contact-divider" 
                >

                <div class="o-grid">
                  <div class="o-grid__col-md-3  o-grid__col-sm-6">
                    <div class="a-header  o-content">
                      <div class="o-content__body">
                        <h4>{{ $t('Location') }}</h4>
                        <address>
                          {{ $t(me.location) }}
                        </address>
                      </div>
                    </div><!-- /o-content -->
                  </div><!-- /o-grid__col -->

                  <div class="o-grid__col-md-3  o-grid__col-sm-6">
                    <div class="a-header  o-content">
                      <div class="o-content__body">
                        <h4>{{ $t('Phone') }}</h4>
                        <p>
                          {{ me.mobile }}
                        </p>
                      </div>
                    </div><!-- /o-content -->
                  </div><!-- /o-grid__col -->

                  <div class="o-grid__col-md-3  o-grid__col-sm-6">
                    <div class="a-header  o-content">
                      <div class="o-content__body">
                        <a
                          href="#"
                          target="_blank"
                          class="t-link-container"
                        >
                          <h4>{{ $t('Web') }}</h4>
                          <p>
                            <span class="t-link-container__item--blended">
                              {{ me.web }}
                            </span>
                          </p>
                        </a><!-- /o-link-container -->
                      </div>
                    </div><!-- /o-content -->
                  </div><!-- /o-grid__col -->

                  <div class="o-grid__col-md-3  o-grid__col-sm-6">
                    <div class="a-header  o-content">
                      <div class="o-content__body">
                        <a
                          href="#"
                          target="_blank"
                          class="t-link-container"
                        >
                          <h4>{{ $t('Email') }}</h4>
                          <p>
                            <span class="t-link-container__item--blended">
                              {{ me.email }}
                            </span>
                          </p>
                        </a><!-- /o-link-container -->
                      </div>
                    </div><!-- /o-content -->
                  </div><!-- /o-grid__col -->
                </div><!-- /o-grid -->
              </div><!-- /c-header__contact -->
            </div><!-- /c-header__inner-content -->
          </div><!-- /o-section__content -->
        </div><!-- /o-section__container -->
      </div><!-- /o-container -->
    </div><!-- /c-header -->
  </section><!-- /o-section -->
</template>

<script>
export default {
  data () {
    return {
      me: {
        firstname: 'Raffaele',
        lastname: 'Pizzari',
        mobile: '+49 174 9605816',
        email: 'raffaele.pizzari@gmail.com',
        location: this.$t('Munich, DE'),
        web: 'raffaelepizzari.com',
      },
    }
  },
}
</script>
