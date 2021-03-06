<template>
  <div class="planet">
      <div class="planet-img-and-info">
          <ul class="information-selector">
            <li class="tab active" @click="switchTab('overview')">OVERVIEW</li>
            <li class="tab" @click="switchTab('structure')">STRUCTURE</li>
            <li class="tab" @click="switchTab('surface')">SURFACE</li>
            </ul>
            <div class="surface-images" v-if="showOverview">
                <img class="planet-img" :src="currentPlanet.images.planet" :alt="planet" :style="{ maxHeight: imageHeight + 'px'}" loading="lazy" />
            </div>
            <div class="surface-images" v-if="showStructure">
                <img class="planet-img" :src="currentPlanet.images.internal" :alt="planet" :style="{ maxHeight: imageHeight + 'px'}" loading="lazy" />
            </div>
            <div class="surface-images" v-if="showSurface">
                <img class="planet-img" :src="currentPlanet.images.planet" :alt="planet" :style="{ maxHeight: imageHeight + 'px'}" loading="lazy" />
                <img class="planet-img-overlay" :src="currentPlanet.images.geology" :alt="planet" loading="lazy" />
            </div>
            
            <div class="information">
                <div class="information-text">
                    <h2>{{ planet }}</h2>
                    <div v-if="showOverview">
                        <p class="content">{{ currentPlanet.overview.content }}</p>
                        <p class="source">
                            Source: <a :href="currentPlanet.overview.source" class="bold">Wikipedia</a>
                            <img class="source-link" src="../assets/icon-source.svg" alt="link to Wikipedia" />
                        </p>
                    </div>
                    <div v-if="showStructure">
                        <p class="content">{{ currentPlanet.structure.content }}</p>
                        <p class="source">
                            Source: <a :href="currentPlanet.structure.source" class="bold">Wikipedia</a>
                            <img class="source-link" src="../assets/icon-source.svg" alt="link to Wikipedia" />
                        </p>
                    </div>
                    <div v-if="showSurface">
                        <p class="content">{{ currentPlanet.geology.content }}</p>
                        <p class="source">
                            Source: 
                            <a rel="noreferrer" target="_blank" :href="currentPlanet.geology.source" class="bold">
                                Wikipedia
                            </a>
                            <img class="source-link" src="../assets/icon-source.svg" alt="link to Wikipedia" />
                        </p>
                    </div>
                </div>
                <ul class="information-selector-large">
                    <li class="tab active" @click="switchTab('overview')"><span class="decimal">01</span>OVERVIEW</li>
                    <li class="tab" @click="switchTab('structure')"><span class="decimal">02</span>INTERNAL STRUCTURE</li>
                    <li class="tab" @click="switchTab('surface')"><span class="decimal">03</span>SURFACE GEOLOGY</li>
                </ul>
            </div>
      </div>
    

    <div class="info">
        <Infobox :content="currentPlanet.rotation" title="ROTATION TIME" />
        <Infobox :content="currentPlanet.revolution" title="REVOLUTION TIME" />
        <Infobox :content="currentPlanet.radius" title="RADIUS" />
        <Infobox :content="currentPlanet.temperature" title="AVERAGE TEMP." />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Infobox from './Infobox.vue';

@Options({
  components: {
      Infobox
  },
  props: {
    planet: String
  },
  data() {
    return {
      colour: "",
      currentPlanet: {},
      imageSize: 0,
      planets: [
        {
            "name": "Mercury",
            "overview": {
            "content": "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)"
            },
            "structure": {
            "content": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
            },
            "geology": {
            "content": "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
            "source": "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"
            },
            "rotation": "58.6 Days",
            "revolution": "87.97 Days",
            "radius": "2,439.7 KM",
            "temperature": "430°c",
            "images": {
            "planet": require("../assets/planet-mercury.svg"),
            "internal": require("../assets/planet-mercury-internal.svg"),
            "geology": require("../assets/geology-mercury.png"),
            },
            "size": 111
        },
        {
            "name": "Venus",
            "overview": {
            "content": "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
            "source": "https://en.wikipedia.org/wiki/Venus"
            },
            "structure": {
            "content": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.",
            "source": "https://en.wikipedia.org/wiki/Venus#Internal_structure"
            },
            "geology": {
            "content": "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.",
            "source": "https://en.wikipedia.org/wiki/Venus#Surface_geology"
            },
            "rotation": "243 Days",
            "revolution": "224.7 Days",
            "radius": "6,051.8 KM",
            "temperature": "471°c",
            "images": {
            "planet": require("../assets/planet-venus.svg"),
            "internal": require("../assets/planet-venus-internal.svg"),
            "geology": require("../assets/geology-venus.png")
            },
            "size": 154
        },
        {
            "name": "Earth",
            "overview": {
            "content": "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
            "source": "https://en.wikipedia.org/wiki/Earth"
            },
            "structure": {
            "content": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
            "source": "https://en.wikipedia.org/wiki/Earth#Internal_structure"
            },
            "geology": {
            "content": "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.",
            "source": "https://en.wikipedia.org/wiki/Earth#Surface"
            },
            "rotation": "0.99 Days",
            "revolution": "365.26 Days",
            "radius": "6,371 KM",
            "temperature": "16°c",
            "images": {
            "planet": require("../assets/planet-earth.svg"),
            "internal": require("../assets/planet-earth-internal.svg"),
            "geology": require("../assets/geology-earth.png")
            },
            "size": 173
        },
        {
            "name": "Mars",
            "overview": {
            "content": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the \"Red Planet\".",
            "source": "https://en.wikipedia.org/wiki/Mars"
            },
            "structure": {
            "content": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.",
            "source": "https://en.wikipedia.org/wiki/Mars#Internal_structure"
            },
            "geology": {
            "content": "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.",
            "source": "https://en.wikipedia.org/wiki/Mars#Surface_geology"
            },
            "rotation": "1.03 Days",
            "revolution": "1.88 Years",
            "radius": "3,389.5 KM",
            "temperature": "-28°c",
            "images": {
            "planet": require("../assets/planet-mars.svg"),
            "internal": require("../assets/planet-mars-internal.svg"),
            "geology": require("../assets/geology-mars.png")
            },
            "size": 129
        },
        {
            "name": "Jupiter",
            "overview": {
            "content": "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.",
            "source": "https://en.wikipedia.org/wiki/Jupiter"
            },
            "structure": {
            "content": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
            "source": "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
            },
            "geology": {
            "content": "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.",
            "source": "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"
            },
            "rotation": "9.93 Hours",
            "revolution": "11.86 Years",
            "radius": "69,911 KM",
            "temperature": "-108°c",
            "images": {
            "planet": require("../assets/planet-jupiter.svg"),
            "internal": require("../assets/planet-jupiter-internal.svg"),
            "geology": require("../assets/geology-jupiter.png")
            },
            "size": 224
        },
        {
            "name": "Saturn",
            "overview": {
            "content": "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.",
            "source": "https://en.wikipedia.org/wiki/Saturn"
            },
            "structure": {
            "content": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
            "source": "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
            },
            "geology": {
            "content": "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
            "source": "https://en.wikipedia.org/wiki/Saturn#Atmosphere"
            },
            "rotation": "10.8 Hours",
            "revolution": "29.46 Years",
            "radius": "58,232 KM",
            "temperature": "-138°c",
            "images": {
            "planet": require("../assets/planet-saturn.svg"),
            "internal": require("../assets/planet-saturn-internal.svg"),
            "geology": require("../assets/geology-saturn.png")
            },
            "size": 256
        },
        {
            "name": "Uranus",
            "overview": {
            "content": "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
            "source": "https://en.wikipedia.org/wiki/Uranus"
            },
            "structure": {
            "content": "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
            "source": "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
            },
            "geology": {
            "content": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
            "source": "https://en.wikipedia.org/wiki/Uranus#Atmosphere"
            },
            "rotation": "17.2 Hours",
            "revolution": "84 Years",
            "radius": "25,362 KM",
            "temperature": "-195°c",
            "images": {
            "planet": require("../assets/planet-uranus.svg"),
            "internal": require("../assets/planet-uranus-internal.svg"),
            "geology": require("../assets/geology-uranus.png")
            },
            "size": 176
        },
        {
            "name": "Neptune",
            "overview": {
            "content": "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.",
            "source": "https://en.wikipedia.org/wiki/Neptune"
            },
            "structure": {
            "content": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
            "source": "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
            },
            "geology": {
            "content": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
            "source": "https://en.wikipedia.org/wiki/Neptune#Atmosphere"
            },
            "rotation": "16.08 Hours",
            "revolution": "164.79 Years",
            "radius": "24,622 KM",
            "temperature": "-201°c",
            "images": {
            "planet": require("../assets/planet-neptune.svg"),
            "internal": require("../assets/planet-neptune-internal.svg"),
            "geology": require("../assets/geology-neptune.png")
            },
            "size": 173
        }
      ],
      showOverview: true,
      showStructure: false,
      showSurface: false
    }
  },
  methods: {
    getCurrentPlanetData() {
      this.currentPlanet = this.planets.find((p: any) => p.name === this.planet)
      this.setImageHeight()
    },
    setImageHeight() {
        if (window.innerWidth < 768){
            this.imageHeight = this.currentPlanet.size
        }
        else if (window.innerWidth < 900) {
            this.imageHeight = this.currentPlanet.size * 1.65
        }
        else {
            this.imageHeight = this.currentPlanet.size * 2.604
        }
    },
    switchTab(switchTo: String) {
      const tabs = document.getElementsByClassName('tab')
      for(var i = 0; i < tabs.length; i++)
      {
          tabs[i].classList.remove('active')
      }

      if (switchTo === 'overview')
      {
          this.showOverview = true
          this.showStructure = false
          this.showSurface = false
          tabs[0].classList.add('active')
          tabs[3].classList.add('active')
      }
      else if (switchTo === 'structure')
      {
          this.showOverview = false
          this.showStructure = true
          this.showSurface = false
          tabs[1].classList.add('active')
          tabs[4].classList.add('active')
      }
      else if (switchTo === 'surface')
      {
          this.showOverview = false
          this.showStructure = false
          this.showSurface = true
          tabs[2].classList.add('active')
          tabs[5].classList.add('active')
      }
    }
  },
  created() {
      this.getCurrentPlanetData()
  },
  mounted() {
    const tabs = document.getElementsByClassName('tab')
    for(var i = 0; i < tabs.length; i++){
        tabs[i].classList.add('border-'+ this.planet.toLowerCase())
    }
  }
})
export default class Planet extends Vue {
  planet!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../scss/variables/colours.scss';

.planet {
    margin: 0 auto;
    max-width: 1440px;
    padding: 0 24px 24px;
}

.information-selector {
    border-bottom: 1px solid rgba($color: $white, $alpha: 0.5);
    border-top: 1px solid rgba($color: $white, $alpha: 0.5);
    display: flex;
    justify-content: space-between;
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
}

.information-selector-large {
    display: none;
}

.tab {
    align-self: stretch;
    font-family: spartan;
    font-size: 9px;
    font-weight: bold;
    letter-spacing: 1.92px;
    line-height: 10px;
    list-style-type: none;
    opacity: 0.5;
    padding: 20px 0;

    &.active {
        border-bottom: 4px solid;
    }
}

.planet-img {
    margin-bottom: 75px;
    margin-top: 75px;
}

h2 {
    font-size: 40px;
    font-weight: 400 ;
    line-height: 52px;
    margin-bottom: 16px;
    text-transform: uppercase;
}

.content {
    font-family: Spartan;
    font-size: 11px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 32px;
    text-align: center;
}

.surface-images {
    position: relative;
}

.planet-img-overlay {
    bottom: 10px;
    height: 100px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
}

.source {
    font-family: Spartan;
    font-size: 12px;
    font-weight: 400;
    line-height: 25px;
    margin-bottom: 28px;
    opacity: 0.5;

    a {
        color: $white;
        font-weight: 700;
    }
}

.source-link {
    margin-left: 3px;
}

.border-mercury {
    border-color: $light-blue !important;
}
.border-venus {
    border-color: $yellow !important;
}
.border-earth {
    border-color: $purple !important;
}
.border-mars {
    border-color: $light-red !important;
}
.border-jupiter {
    border-color: $red !important;
}
.border-saturn {
    border-color: $orange !important;
}
.border-uranus {
    border-color: $green !important;
}
.border-neptune {
    border-color: $blue !important;
}

@media only screen and (min-width: 768px) {
    .information-selector {
        display: none;
    }

    .information-selector-large {
        display: block;
        flex: 1;
    }

    .tab {
        align-self: stretch;
        border-color: rgba($color: $white, $alpha: 0.5) !important;
        border: 1px solid rgba($color: $white, $alpha: 0.5);
        margin-bottom: 10px;
        margin-left: 12%;
        opacity: 1;
        padding: 15px 0;
        text-align: left;
    }

    .decimal {
        margin-left: 10px;
        margin-right: 10px;
        opacity: 0.5;
    }

    .information {
        align-items: center;
        display: flex;
    }

    .information-text {
        text-align: left;
        width: 48%;
    }

    .content {
        text-align: left;
    }

    .info {
        display: flex;
        justify-content: space-between;
    }

    .border-mercury {
        &.active {
            background-color: $light-blue !important;
            border-color: $light-blue !important;
        }
    }
    .border-venus {
        &.active {
            background-color: $yellow !important;
            border-color: $yellow !important;
        }
    }
    .border-earth {
        &.active {
            background-color: $purple !important;
            border-color: $purple !important;
        }
    }
    .border-mars {
        &.active{
            background-color: $light-red !important;
            border-color: $light-red !important;
        }   
    }
    .border-jupiter {
        &.active {
            background-color: $red !important;
            border-color: $red !important;
        }
    }
    .border-saturn {
        &.active {
            background-color: $orange !important;
            border-color: $orange !important;
        }
    }
    .border-uranus {
        &.active {
            background-color: $green !important;
            border-color: $green !important;
        }
    }
    .border-neptune {
        &.active {
            background-color: $blue !important;
            border-color: $blue !important;
        }
    }

    @media only screen and (min-width: 980px) {
        .planet-img-and-info {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
            margin-top: 80px;
        }

        .information {
            flex-direction: column;
            width: 30%;
        }

        .information-text {
            width: 80%;
        }

        .surface-images {
            flex: 1;
        }

        .information-selector-large {
            width: 80%;
        }

        .tab {
            margin-left: 0;
        }

        .info {
            justify-content: space-around;
        }
    }
}
</style>
