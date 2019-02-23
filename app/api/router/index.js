const express = require('express');
const router=express.Router();
const axios = require('axios');

const baseUrl = 'https://springrole.com/api/v1/user/c4f4c607-e9c8-4acb-9893-93c541bddf35';

router.get('/skills',(req,res) => {
  return (
    axios.get(baseUrl + '/profile/skills')
      .then(response => {
        return res.json(response.data)
      })
      .catch(err => console.log('Error in request'))
  )
});

router.get('/work',(req,res) => {
  return (
    axios.get(baseUrl + '/work-experience')
      .then(response => {
        return res.json(response.data)
      })
      .catch(err => console.log('Error in request'))
  )
});

router.get('/education',(req,res) => {
  return (
    axios.get(baseUrl + '/education')
      .then(response => {
        return res.json(response.data)
      })
      .catch(err => console.log('Error in request'))
  )
});

module.exports = router;
