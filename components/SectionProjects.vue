<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Projects') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('opensource_quote') }}
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">
          <div class="o-grid">
            <div
              v-for="(expertise, index) in exps"
              :key="index"
              class="o-grid__col-sm-6"
            >
              <div class="o-media  o-media--block  o-content">
                <div class="o-media__figure">
                  <div class="c-number  t-primary-color">
                    {{ expertise.num }}
                  </div>
                </div>
                <div class="o-media__body  o-content__body">
                  <h3>{{ expertise.title }}</h3>
                  <p>
                    {{ expertise.desc }}
                  </p>
                  <p>
                    <a
                      :href="expertise.link"
                      target="_blank"
                    >
                      > GitHub Repository
                    </a>
                  </p>
                </div>
              </div><!-- /o-media o-content -->
            </div><!-- /o-grid__col -->
          </div><!-- /o-grid -->
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
  </section><!-- /o-section -->
</template>


<script>
export default {
  name: 'SectionProjects',
  data () {
    return {
      exps: [
        { 
          num: '01',
          title: 'pixari/vue-i18n-extract',
          desc: 'Manage vue-i18n localization with static analysis',
          link: 'https://github.com/pixari/vue-i18n-extract',
        },
        { 
          num: '02',
          title: 'pixari/periodic-promise',
          desc: 'Asynchronous periodic polling with promise',
          link: 'https://github.com/pixari/periodic-promise',
        },
        { 
          num: '03',
          title: 'pixari/vue-i18n-extract',
          desc: `Don't make fun of JavaScript`,
          link: 'https://github.com/pixari/dmfojs',
        },
        { 
          num: '04',
          title: 'pixari/raffaelepizzari_com',
          desc: `My personal website`,
          link: 'https://github.com/pixari/raffaelepizzari_com',
        },
        { 
          num: '05',
          title: 'pixari/component-library-monorepo',
          desc: `Monorepo solution for multiple VueJs Apps and a shared component library.`,
          link: 'https://github.com/pixari/component-library-monorepo',
        },
        { 
          num: '06',
          title: 'pixari/LokiJSAdmin',
          desc: `A web interface for LokiJS`,
          link: 'https://github.com/pixari/LokiJSAdmin',
        },
      ],
    }
  },
}
</script>
