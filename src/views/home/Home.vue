<script>
import Media from "../../components/Media.vue";
import Text from "../../components/Text.vue";
import Button from "../../components/Button.vue";
import Card from "../../components/Card.vue";
</script>

<template>
  <div class="HomeView">
    <section>
      <Button
        tag="a"
        url="/hello"
        scale="15"
      >
        <template #before>
          <Media>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="8.042%"
                  y1="0%"
                  x2="65.682%"
                  y2="23.865%"
                >
                  <stop
                    stop-color="var(--skin-color-default-fg)"
                    stop-opacity="0"
                    offset="0%"
                  />
                  <stop
                    stop-color="var(--skin-color-default-fg)"
                    stop-opacity=".631"
                    offset="63.146%"
                  />
                  <stop
                    stop-color="var(--skin-color-default-fg)"
                    offset="100%"
                  />
                </linearGradient>
              </defs>
              <g
                fill="none"
                fill-rule="evenodd"
              >
                <g transform="translate(1 1)">
                  <path
                    id="Oval-2"
                    d="M36 18c0-9.94-8.06-18-18-18"
                    stroke="url(#a)"
                    stroke-width="2"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle
                    fill="var(--skin-color-default-fg)"
                    cx="36"
                    cy="18"
                    r="1"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="0.9s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </g>
            </svg>
          </Media>
        </template>

        <template #content>
          <text>Button Inherit</text>
        </template>
      </Button>
    </section>

    <section>
      <Button scale="20">
        <template #content>
          <text>Button Inherit</text>
        </template>

        <template #after>
          <Media>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 16 17"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use xlink:href="#icon-cog" />
            </svg>
          </Media>
        </template>
      </Button>
    </section>

    <section>
      <card>
        <template #before>
          ciao
        </template>

        <template #after>
          <Button
            tag="a"
            url="/hello"
            scale="25"
          >
            <template #before>
              <Media>
                <img
                  src="//pbs.twimg.com/profile_images/701940186838532096/TarzXAkb.jpg"
                  alt=""
                >
              </Media>
            </template>

            <template #content>
              <text>Button Inherit</text>
            </template>
          </Button>

          <card scale="10">
            <template #before>
              <card scale="10">
                <template #before>
                  ciao
                </template>

                <template #after>
                  <Button
                    tag="section"
                    scale="25"
                  >
                    <template #before>
                      <Media>
                        <img
                          src="//pbs.twimg.com/profile_images/701940186838532096/TarzXAkb.jpg"
                          alt=""
                        >
                      </Media>
                    </template>

                    <template #content>
                      <text>Button Inherit</text>
                    </template>
                  </Button>
                </template>
              </card>
            </template>

            <template #after>
              <Button
                tag-name="a"
                url="/hello"
                scale="25"
              >
                <template #before>
                  <Media>
                    <img
                      src="//pbs.twimg.com/profile_images/701940186838532096/TarzXAkb.jpg"
                      alt=""
                    >
                  </Media>
                </template>

                <template #content>
                  <text>Button Inherit</text>
                </template>
              </Button>
            </template>
          </card>
        </template>
      </card>
    </section>

    <svg
      style="display: none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="icon-cog"
        fill-rule="nonzero"
      >
        <path
          d="M15.596917,9.98326938 L14.5041079,9.33798816 C14.5728064,8.7815386 14.5728064,8.2184614 14.5041079,7.66201184 L15.596917,7.01673062 C15.9178229,6.82726259 16.0726124,6.43742732 15.9670848,6.0741546 C15.5912871,4.78033611 14.9223646,3.61573153 14.0390021,2.66061113 C13.7831755,2.38401797 13.3749053,2.32348965 13.0525249,2.51384881 L11.9613243,3.15813608 C11.5248519,2.81840117 11.0481221,2.53648663 10.542482,2.31910255 L10.542482,1.02991108 C10.542482,0.648438733 10.2860522,0.316869683 9.92305592,0.229024792 C8.66155,-0.07632446 7.33871809,-0.0763587342 6.07694408,0.229024792 C5.71398131,0.316869683 5.457518,0.648404458 5.457518,1.02991108 L5.457518,2.31910255 C4.95187406,2.53647872 4.47514334,2.81839382 4.03867572,3.15813608 L2.94747511,2.51384881 C2.62506122,2.32348965 2.21679094,2.38401797 1.96099786,2.66061113 C1.07763542,3.61573153 0.40871289,4.78037038 0.0329152236,6.0741546 C-0.072612407,6.43742732 0.0821770899,6.82722832 0.403082962,7.01673062 L1.49589212,7.66201184 C1.42719356,8.2184614 1.42719356,8.7815386 1.49589212,9.33798816 L0.403082962,9.98326938 C0.0821770899,10.1727374 -0.072612407,10.5625727 0.0329152236,10.9258454 C0.40871289,12.2196296 1.07763542,13.3842685 1.96099786,14.3393889 C2.21682445,14.615982 2.62509474,14.6765103 2.94747511,14.4861855 L4.03867572,13.8418982 C4.47514096,14.1816349 4.95187243,14.4635389 5.457518,14.6808975 L5.457518,15.9700889 C5.457518,16.3515613 5.7139478,16.6831303 6.07694408,16.7709752 C7.33848351,17.0763245 8.66128191,17.0763587 9.92305592,16.7709752 C10.2860187,16.6831303 10.542482,16.3515955 10.542482,15.9700889 L10.542482,14.6808975 C11.0481183,14.4635198 11.5248475,14.1816171 11.9613243,13.8418982 L13.0525249,14.4861855 C13.3749053,14.6765446 13.7831755,14.6160163 14.0390021,14.3393889 C14.9223646,13.3842685 15.5912871,12.2196296 15.9670848,10.9258454 C16.0726124,10.5625727 15.9178229,10.1727717 15.596917,9.98326938 Z M13.4026193,13.4264943 L11.8507364,12.510001 C10.9463288,13.3007421 10.6255905,13.4997041 9.47011484,13.9172673 L9.47011484,15.7502196 C8.50024808,15.9548373 7.49975192,15.9548373 6.52988516,15.7502196 L6.52988516,13.9172673 C5.4031959,13.5101235 5.07699522,13.3210668 4.14926358,12.510001 L2.59738075,13.4264943 C1.9368696,12.6693763 1.43490124,11.7817076 1.12525522,10.8230912 L2.67780828,9.90659789 C2.4588108,8.69270694 2.45871027,8.30790999 2.67780828,7.09340211 L1.12525522,6.17690879 C1.43490124,5.21829242 1.93690311,4.33058946 2.59738075,3.57312864 L4.14926358,4.49030745 C5.0667072,3.68712478 5.39129933,3.4941265 6.52988516,3.08269846 L6.52988516,1.24978037 C7.49971774,1.04482059 8.50028226,1.04482059 9.47011484,1.24978037 L9.47011484,3.08273274 C10.6087677,3.49419505 10.9333933,3.6872276 11.8507364,4.49034172 L13.4026193,3.57316291 C14.0630969,4.33058946 14.5650988,5.21829242 14.8747448,6.17694306 L13.3221917,7.09343638 C13.5412227,8.3076358 13.5412897,8.69212428 13.3221917,9.90663217 L14.8747448,10.8231255 C14.5650988,11.7817076 14.0631304,12.6694105 13.4026193,13.4264943 Z M8,5.20968958 C6.22607014,5.20968958 4.78289853,6.68570996 4.78289853,8.50001714 C4.78289853,10.3143243 6.22607014,11.7903447 8,11.7903447 C9.77392986,11.7903447 11.2171015,10.3143243 11.2171015,8.50001714 C11.2171015,6.68570996 9.77392986,5.20968958 8,5.20968958 Z M8,10.6935688 C6.81738009,10.6935688 5.85526568,9.70955526 5.85526568,8.50001714 C5.85526568,7.29047902 6.81738009,6.30646543 8,6.30646543 C9.18261991,6.30646543 10.1447343,7.29047902 10.1447343,8.50001714 C10.1447343,9.70955526 9.18261991,10.6935688 8,10.6935688 Z"
        />
      </g>
    </svg>

    <div class="content">
      <section scale="2xs">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[2XS]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="xs">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[XS]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="sm">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[SM]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="md">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[MD]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="lg">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[LG]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="xl">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[XL]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="2xl">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[2XL]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>

      <section scale="3xl">
        <pre
          scale-root="md"
          fh-highlight
          fh-text="center"
        >[3XL]</pre>
        <h6>Infinte Scale</h6>
        <h5>Infinte Scale</h5>
        <h4>Infinte Scale</h4>
        <h3>Infinte Scale</h3>
        <h2>Infinte Scale</h2>
        <h1>Infinte Scale</h1>

        <p>
          <span class="text">When you are satisfied with your changes, check Lock to let the
            Constraint to control this GameObject. This property has no effect
            in Play Mode.</span>
        </p>
      </section>
    </div>

    <div class="content">
      <section>
        <div
          class="Button"
          scale="2xs"
        >
          <Button class="Button">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="xs"
        >
          <Button class="Button">
            <span class="Media">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 16 17"
              >
                <use xlink:href="#icon-cog" />
              </svg>
            </span>

            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="sm"
        >
          <Button class="Button">
            <span class="Media">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 38 38"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="8.042%"
                    y1="0%"
                    x2="65.682%"
                    y2="23.865%"
                  >
                    <stop
                      stop-color="var(--skin-color-default-fg)"
                      stop-opacity="0"
                      offset="0%"
                    />
                    <stop
                      stop-color="var(--skin-color-default-fg)"
                      stop-opacity=".631"
                      offset="63.146%"
                    />
                    <stop
                      stop-color="var(--skin-color-default-fg)"
                      offset="100%"
                    />
                  </linearGradient>
                </defs>
                <g
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g transform="translate(1 1)">
                    <path
                      id="Oval-2"
                      d="M36 18c0-9.94-8.06-18-18-18"
                      stroke="url(#a)"
                      stroke-width="2"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <circle
                      fill="var(--skin-color-default-fg)"
                      cx="36"
                      cy="18"
                      r="1"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="0.9s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </g>
              </svg>
            </span>
            <span
              class="text"
              fh-content="Button"
            />
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="md"
        >
          <Button class="Button">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="lg"
        >
          <Button class="Button">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="xl"
        >
          <Button class="Button">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <section>
        <div
          class="Button"
          scale="2xl"
        >
          <Button class="Button">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <hr>

      <section class="card">
        <div class="Button">
          <Button scale="2xs">
            <span class="text">Button</span>
          </Button>
        </div>
      </section>

      <div class="Button">
        <Button scale="xs">
          <span class="text">Button</span>
        </Button>
      </div>

      <br>

      <div class="Button">
        <Button scale="sm">
          <span
            class="text"
            pxtoem
          >Button</span>
        </Button>
      </div>

      <br>

      <div
        scale="lg"
        class="Button"
        style="
          background: hsla(261, 69%, 45%, 0.24);
          display: flex;
          justify-content: space-between;
          padding: 0.5em;
        "
      >
        <div
          style="
            text-align: right;
            background: #420c7121;
            margin: 0 0 auto auto;
            width: 100%;
          "
        >
          <Button
            scale
            style="margin: auto; font-size: 1em"
          >
            <span class="text">Button</span>
          </Button>
        </div>
      </div>

      <br>

      <div class="Button">
        <Button scale="lg">
          <span class="text">Button</span>
        </Button>
      </div>

      <br>

      <div class="Button">
        <Button scale="xl">
          <span class="text">Button</span>
        </Button>
      </div>

      <br>

      <div class="Button">
        <Button scale="2xl">
          <span class="text">Button</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
