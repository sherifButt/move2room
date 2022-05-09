export default class APIFeatures {
   constructor(query, queryString) {
      this.query = query
      this.queryString = queryString
   }
// search by location query in an address
   search() {
      const location = this.queryString.location
         ? {
              address: {
                 $regex: this.queryString.location,
                 $options: 'i',
              },
           }
         : {}

      this.query = this.query.find({ ...location })
      return this
   }

   filter() {
      // create copy of the query string
      const queryStringCopy = this.queryString
      // delete location from queryString
      const removeFields = ['location']
      removeFields.map(el => delete queryStringCopy[el])
      

      this.query = this.query.find(queryStringCopy)

      return this
   }
    
    pagination ( resPerPage ) {
        const currentPage = Number( this.queryString.page ) || 1
        
        return this
    }
}
