<template>
  <section class="o-section  t-section  ">

    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">

        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              Skills
            </h2>
            <div class="o-content__body  o-section__description">
              Progress bars, anyone?
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  ">
            
          <div class="o-grid">

            <div
              v-for="(skill, index) in skills"
              :key="index"
              class="o-grid__col-sm-6"
            >
              <div class="o-content">
                <div class="o-media o-media--block">
                  <div class="o-media__figure">
                    <div class="c-number t-primary-color">
                      {{ skill.perc }}<small>%</small>
                    </div>
                  </div>
                  <div class="o-media__body">
                    <h3>{{ skill.name }}</h3>
                  </div>
                </div>
                <div class="c-progress-bar o-content__body  t-border-color-bg  u-mt-text">
                  <div
                    :data-percent="skill.perc"
                    :style="`width: ${skill.perc}%`"
                    class="a-progress-bar c-progress-bar__filler  t-primary-bg"
                  />
                </div>
              </div>
            </div><!-- /o-grid__col -->

          </div><!-- /o-grid -->

        </div><!-- /o-section__content -->

      </div><!-- /o-section__container -->
    </div><!-- /o-container -->

  </section><!-- /o-section -->
</template>


<script>
export default {
  data () {
    return {
      skills: [
        { 
          perc: '77',
          name: this.$t('JavaScript'),
        },
        { 
          perc: '32',
          name: this.$t('CSS'),
        },
        { 
          perc: '44',
          name: this.$t('Vue.js'),
        },
        { 
          perc: '44',
          name: this.$t('Node.js'),
        },
        { 
          perc: '55',
          name: this.$t('Webpack'),
        },
        { 
          perc: '55',
          name: this.$t('Typescript'),
        },
        { 
          perc: '55',
          name: this.$t('NPM'),
        },
        { 
          perc: '55',
          name: this.$t('AngularJs'),
        },
      ],
    }
  },
}
</script>
