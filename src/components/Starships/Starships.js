export default {
  name: 'Starships',
  data () {
    return {
      distance: 0,
      starships: [],
      results: [],
      pilots: [],
      starship_selected: null,
      pilot_selected: null,
      homeworld: null
    }
  },
  methods: {
    getStarships (url = 'https://swapi.co/api/starships/?page=1') {
      this.$http.get(url).then((response) => {
        response.data.results.forEach((item) => {
          this.starships.push(item)
        })
        if (response.data.next) {
          this.getStarships(response.data.next)
        }
      }).catch(e => {
        console.log(JSON.stringify(e.message))
      })
    },
    calculateStops () {
      this.results = []
      for (var i = 0; i < this.starships.length; i++) {
        this.starships[i].stops = this.returnStops(this.distance, this.starships[i].MGLT, this.starships[i].consumables)
        this.starships[i].img = require('../../assets/img/' + this.starships[i].name + '.png')
        this.results.push(this.starships[i])
      }
    },
    selectStarship (starship) {
      this.pilots = []

      this.starship_selected = starship

      for (var i = 0; i < starship.pilots.length; i++) {
        this.$http.get(starship.pilots[i]).then((response) => {
          var obj = response.data
          obj.img = require('../../assets/img/' + response.data.name + '.png')
          this.pilots.push(obj)
        }).catch(e => {
          console.log(JSON.stringify(e.message))
        })
      }
    },
    selectHomeWorld (pilot) {
      this.$http.get(pilot.homeworld).then((response) => {
        this.homeworld = response.data
        this.homeworld.img = require('../../assets/img/' + response.data.name + '.png')
        console.log(response.data.name)
      }).catch(e => {
        console.log(JSON.stringify(e.message))
      })
    },
    returnStops (distance, mglt, time) {
      if (mglt == 'unknown' || time == 'unknown') {
        return 'Unknown'
      }
      return Math.round(distance / (mglt * this.returnHours(time)))
    },
    returnHours (string) {
      var unit = string.split(' ')[1]
      var number = parseInt(string.split(' ')[0])
      if (unit == 'year' || unit == 'years') {
        return (number * 365) * 24
      }
      if (unit == 'month' || unit == 'months') {
        return (number * 30) * 24
      }
      if (unit == 'week' || unit == 'weeks') {
        return (number * 7) * 24
      }
      if (unit == 'day' || unit == 'days') {
        return number * 24
      }
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getStarships()
  }
}
