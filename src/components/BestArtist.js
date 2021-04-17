import React from 'react'
import '../assets/style/style.css'

export default function BestArtist(){
    return(
        <div class="mt-content">
          <h3 class="font-weight-bold">The Best Artist</h3>
          <div class="row mt-5 justify-content-between">
            <div class="col-3 px-0">
              <div class="mx-auto d-flex justify-content-center">
                <img
                  src="https://images.pexels.com/photos/1441151/pexels-photo-1441151.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  class="rounded-circle img-artist "
                  alt=""
                />
              </div>
              <h5 class="text-center mt-4">Alex</h5>
            </div>
            <div class="col-3 px-0">
              <div class="mx-auto d-flex justify-content-center">
              <img
                  src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="rounded-circle img-artist "
                  alt=""
                />
              </div>
              <h5 class="text-center mt-4">Alex</h5>
            </div>
            <div class="col-3 px-0">
              <div class="mx-auto d-flex justify-content-center">
              <img
                  src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="rounded-circle img-artist "
                  alt=""
                />
              </div>
              <h5 class="text-center mt-4">Alex</h5>
            </div>
            <div class="col-3 px-0">
              <div class="mx-auto d-flex justify-content-center">
              <img
                  src="https://images.pexels.com/photos/4906334/pexels-photo-4906334.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  class="rounded-circle img-artist "
                  alt=""
                />
              </div>
              <h5 class="text-center mt-4">Alex</h5>
            </div>
          </div>
        </div>
    )
}