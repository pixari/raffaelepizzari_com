<template>
  <section class="o-section  t-section  o-section--footer">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Contact') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('Call me, maybe') }}
            </div>
          </div>
        </header>

        <div class="o-section__content  t-section__content  ">
          <div class="c-footer__contact">
            <div class="o-grid">
              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <h4>{{ $t('Location') }}</h4>
                    <address>
                      {{ me.location }}
                    </address>
                  </div>
                </div>
              </div>

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
                    </a>
                  </div>
                </div>
              </div>

              <div class="o-grid__col-md-3  o-grid__col-sm-6">
                <div class="o-content">
                  <div class="o-content__body">
                    <a
                      :href="`${me.email}`"
                      target="_blank"
                      class="t-link-container"
                    >
                      <h4>{{ $t('Email') }}</h4>
                      <p>
                        <span class="t-link-container__item--blended">
                          {{ me.email }}
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="c-footer__contact-divider">

          <div class="o-content">
            <div class="c-footer__bottom">
              <div class="c-footer__brand">
                <div class="c-brand">
                  <div class="o-content__body">
                    <h1 class="c-brand__title  t-title">
                      <span class="c-brand__sizer  c-brand__sizer--sm">
                        <span class="a-footer  c-brand__first-word  t-title__first-word">
                          {{ me.firstname }}
                        </span>
                        <span class="a-footer  c-brand__second-word  t-title__second-word">
                          {{ me.lastname }}
                        </span>
                      </span>
                    </h1>
                  </div>
                </div>
              </div>

              <ul class="c-footer__social-buttons  c-social-buttons  o-content__body">
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
                    href="mailto=info@raffaelepizzari.com"
                    target="_blank"
                    class="c-social-button t-social-button"
                    aria-label="Personal E-Mail"
                    rel="noreferrer"
                  >
                    <i class="fa fa-lg fa-envelope" />
                  </a>
                </li>
              </ul>
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
      me: {
        firstname: 'Raffaele',
        lastname: 'Pizzari',
        email: 'info@raffaelepizzari.com',
        location: this.$t('Munich, DE'),
        web: 'raffaelepizzari.com',
      },
    }
  },
}
</script>
