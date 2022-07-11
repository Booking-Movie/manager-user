/* eslint-disable react/prop-types */
import React from 'react'
import { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Layout/footer'
import Header from './Layout/header'

export const UserTempalete = props => {
  const { Component, ...restRoute } = props
  return (
    <Route
      {...restRoute}
      render={propRouter => {
        return (
          <Fragment>
            <Header />
            <Component {...propRouter} />
            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
