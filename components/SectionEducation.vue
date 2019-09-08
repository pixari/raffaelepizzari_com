<template>
  <section class="o-section  t-section  ">
    <div class="o-section__header-bg  t-section__header" />
    <div class="o-section__content-bg  t-section__content" />

    <div class="o-container">
      <div class="o-section__container">
        <header class="o-section__header  t-section__header">
          <div class="o-content">
            <h2 class="o-section__heading">
              {{ $t('Education') }}
            </h2>
            <div class="o-content__body  o-section__description">
              {{ $t('Yes, I have been around.') }}
            </div>
          </div>
        </header><!-- /o-section__header -->

        <div class="o-section__content  t-section__content  u-pb-0">
          <div class="a-experience-timeline  c-timeline  t-border-color">
            <div
              v-for="(edu, index) in educations"
              :key="index"
              class="c-timeline__item"
            >
              <div class="c-timeline__point  t-timeline__point  t-primary-bg" />
              <div class="o-content">
                <div class="o-grid">
                  <div class="o-grid__col-md-5">
                    <div class="c-work__timeframe">
                      {{ edu.from }} &ndash; {{ edu.to }}
                    </div>
                    <h3 class="c-work__heading">
                      {{ edu.company }}
                    </h3>
                    <h4 class="c-work__title">
                      {{ edu.role }}
                    </h4>
                    <div class="c-work__location">
                      {{ edu.location }}
                    </div>
                  </div>
                  <div class="o-grid__col-md-7">
                    <p>
                      {{ edu.description }}  
                    </p>
                  </div>
                </div><!-- /o-grid -->
              </div><!-- /o-content -->
            </div><!-- /c-timeline__item -->
          </div><!-- /c-timeline -->
        </div><!-- /o-section__content -->
      </div><!-- /o-section__container -->
    </div><!-- /o-container -->
  </section><!-- /o-section -->
</template>


<script>
export default {
  data () {
    return {
      educations: [
        { 
          from: '06.2018',
          to: this.$t('Present'),
          company: this.$t('Microsoft'),
          role: this.$t('Microsoft Certified Specialist'),
          description: this.$t('microsoft_description'),
          location: this.$t('Munich, DE'),
        },
        { 
          from: '10.2015',
          to: '06.2018',
          company: this.$t('Lumsa University'),
          role: this.$t('Master | 87 / 100'),
          description: this.$t('lumsa_master_description'),
          location: this.$t('Rome, IT'),
        },
        { 
          from: '10.2013',
          to: '10.2015',
          company: this.$t('Lumsa University'),
          role: this.$t('1st level degree | 104/110'),
          description: this.$t('lumsa_tri_description'),
          location: this.$t('Rome, IT'),
        },
        { 
          from: '06.2007',
          to: '02.2014',
          company: this.$t('Talete High-School'),
          role: this.$t('Second Level College of Science | 87 / 100'),
          description: this.$t('talete_description'),
          location: this.$t('Rome, IT'),
        },
      ],
    }
  },
}
</script>
