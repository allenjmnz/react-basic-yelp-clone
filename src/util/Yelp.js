const apiKey = 'ZcpRd09XRstbLywUqL4vWGGaogfmvEuNUwnM_J1Iyk5LcmitxQ8VH3HdP5PmKZRDzQlOCovpevLXbSgVeZX3F96QtfIIIWo3C3xzOM-uIJ2BfZ9wraCfi-H_Wm1wXnYx';

export const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if ('businesses' in jsonResponse) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      })
  }
};