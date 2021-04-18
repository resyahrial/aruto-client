import React from "react";

import { MyArtCard } from "../components";

export default function UserProfile() {
  return (
    <>
      <section id="user-profile">
        <div className="container pt-3">
          <div className="row">
            <div className="col-lg-4 pr-3">
              <div className="col-lg-12 border user-info-height">
                <div className="row pt-3">
                  <div className="col-lg-6 justify-content-center d-flex">
                    <img
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2d1c346d-2c8d-4505-ad98-4efbedf28cdf/degzwpn-15bdd83d-c812-4a85-ac23-3ab788c7a713.jpg/v1/fill/w_1024,h_1319,q_75,strp/hiroyuki_sanada_by_ninjason57_degzwpn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmQxYzM0NmQtMmM4ZC00NTA1LWFkOTgtNGVmYmVkZjI4Y2RmXC9kZWd6d3BuLTE1YmRkODNkLWM4MTItNGE4NS1hYzIzLTNhYjc4OGM3YTcxMy5qcGciLCJoZWlnaHQiOiI8PTEzMTkiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC8yZDFjMzQ2ZC0yYzhkLTQ1MDUtYWQ5OC00ZWZiZWRmMjhjZGZcL25pbmphc29uNTctNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.kwl48dDHkimWhbLZznTz4H8p3C50tvIRSVgxHgeb4gY"
                      alt="user-pic"
                      className="user-pic"
                    />
                  </div>
                  <div className="col-lg-6 flex-column pt-4">
                    <div>
                      <h6 className="username d-flex align-items-center">
                        Username
                      </h6>
                    </div>
                    <div>
                      <p className="job-text d-flex align-items-center">
                        Photography Artist
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Name</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">Yooa</p>
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Email</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">Yooa@mail</p>
                    </div>
                  </div>
                </div>
                <div className="col pt-3">
                  <div className="row">
                    <div className="col-6">
                      <p>Location</p>
                    </div>
                    <div className="col-6">
                      <p className="text-right info-text">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-baseline">
                <button type="button" className="btn btn-warning btn-add">
                  Add Art
                </button>
              </div>
            </div>

            <div className="col-lg-8 border p-0">
              <div className="col-lg py-3 border-bottom mb-3">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="true">
                        My Works <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">
                        My Purchase
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="true">
                        My Favorite
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg">
                <div className="row">
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                  <MyArtCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
