<template>
  <section class="o-section  t-section  o-section--footer">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Contact') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('Call me, maybe') }}
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">
          <div class="c-footer__contact">
            <div class="o-grid">
              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <h4>{{ $t('Location') }}</h4>
                    <address>
                      {{ me.location }}
                    </address>
                  </div>
                </div><!-- /o-content -->
              </div><!-- /o-grid__col -->

              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <h4>{{ $t('Phone') }}</h4>
                    <p>
                      {{ me.mobile }}
                    </p>
                  </div>
                </div><!-- /o-content -->
              </div><!-- /o-grid__col -->

              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <a
                      :href="`http://${me.web}`"
                      target="_blank"
                      class="t-link-container"
                    >
                      <h4>{{ $t('Web') }}</h4>
                      <p>
                        <span class="t-link-container__item--blended">
                          {{ me.web }}
                        </span>
                      </p>
                    </a><!-- /o-link-container -->
                  </div>
                </div><!-- /o-content -->
              </div><!-- /o-grid__col -->

              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <a
                      :href="`${me.email}`"
                      target="_blank"
                      class="t-link-container"
                    >
                      <h4>{{ $t('Email') }}</h4>
                      <p>
                        <span class="t-link-container__item--blended">
                          {{ me.email }}
                        </span>
                      </p>
                    </a><!-- /o-link-container -->
                  </div>
                </div><!-- /o-content -->
              </div><!-- /o-grid__col -->
            </div><!-- /o-grid -->
          </div><!-- /c-footer__contact -->

          <hr class="c-footer__contact-divider">

          <div class="o-content">
            <div class="c-footer__bottom">
              <div class="c-footer__brand">
                <div class="c-brand">
                  <div class="o-content__body">
                    <h1 class="c-brand__title  t-title">
                      <span class="c-brand__sizer  c-brand__sizer--sm">
                        <span class="a-footer  c-brand__first-word  t-title__first-word">
                          {{ me.firstname }}
                        </span>
                        <span class="a-footer  c-brand__second-word  t-title__second-word">
                          {{ me.lastname }}
                        </span>
                      </span>
                    </h1>
                  </div><!-- /o-content__body -->
                </div><!-- /c-brand -->
              </div><!-- /c-footer__brand -->

              <ul class="c-footer__social-buttons  c-social-buttons  o-content__body">
                <li class="a-footer">
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
                <li class="a-footer">
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
                <li class="a-footer">
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
                <li class="a-footer">
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
              </ul><!-- /c-footer__social-buttons -->
            </div><!-- /c-footer__bottom -->
          </div><!-- /o-content -->
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
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
