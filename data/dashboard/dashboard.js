(self.webpackChunk = self.webpackChunk || []).push([
	[44410, 34254], {
		"../flags.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				J8: function() {
					return s
				},
				Jd: function() {
					return a
				},
				QY: function() {
					return C
				},
				Qw: function() {
					return u
				},
				ki: function() {
					return l
				}
			});
			var e = n("../react/common/selectors/accountSelectors.ts"),
				r = n("../react/utils/url.ts"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				d = n.n(c),
				y = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				i;
			const u = () => Object.keys(y.Z).reduce((p, _) => (_.indexOf("cf_beta.") === 0 && y.Z.get(_) === "true" && p.push(_.split(".").slice(1).join(".")), p), []),
				l = () => {
					var p, _, j;
					return ((p = window) === null || p === void 0 || (_ = p.bootstrap) === null || _ === void 0 || (j = _.data) === null || j === void 0 ? void 0 : j.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.length > 0 ? window.bootstrap.data.user.betas : []
				};
			if (((i = window) === null || i === void 0 ? void 0 : i.location) && y.Z) {
				const p = d().parse(window.location.search);
				p.beta_on && y.Z.set(`cf_beta.${p.beta_on}`, !0), p.beta_off && y.Z.set(`cf_beta.${p.beta_off}`, !1)
			}
			const E = {},
				t = p => {
					var _, j, L;
					return Object.prototype.hasOwnProperty.call(E, p) ? E[p] : ((_ = window) === null || _ === void 0 || (j = _.bootstrap) === null || j === void 0 || (L = j.data) === null || L === void 0 ? void 0 : L.user) && Array.isArray(window.bootstrap.data.user.betas) && window.bootstrap.data.user.betas.some(f => f === p) ? (E[p] = !0, !0) : (E[p] = !1, !1)
				},
				o = p => y.Z ? y.Z.get(`cf_beta.${p}`) === !0 : !1,
				s = p => o(p) || t(p),
				g = () => !0,
				a = () => {
					var p, _, j;
					return ((p = window) === null || p === void 0 || (_ = p.bootstrap) === null || _ === void 0 || (j = _.data) === null || j === void 0 ? void 0 : j.user) && /@cloudflare\.com$/.test(window.bootstrap.data.user.email)
				},
				C = p => {
					const _ = (0, e.uF)(p),
						j = (_ == null ? void 0 : _.roles) || [];
					return (0, r.qR)(location.pathname) && j.length === 1 && j.some(L => L === "Administrator Read Only")
				}
		},
		"../init.ts": function(V, v, n) {
			"use strict";
			n.r(v);
			var e = n("../../../../node_modules/url-search-params-polyfill/index.js"),
				r = n("../node_modules/isomorphic-fetch/fetch-npm-browserify.js"),
				c = n("../../../../node_modules/fetch-intercept/lib/browser.js");

			function d(b) {
				for (var N = 1; N < arguments.length; N++) {
					var q = arguments[N] != null ? Object(arguments[N]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(q, _e).enumerable
					})), ae.forEach(function(_e) {
						y(b, _e, q[_e])
					})
				}
				return b
			}

			function y(b, N, q) {
				return N = i(N), N in b ? Object.defineProperty(b, N, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[N] = q, b
			}

			function i(b) {
				var N = u(b, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function u(b, N) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(b, N || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(b)
			}
			const l = b => {
				const N = b && b.headers || {},
					q = new Headers(N);
				return q.append("X-Cross-Site-Security", "dash"), d({}, b, {
					headers: q
				})
			};
			(0, c.register)({
				request: (b, N) => {
					try {
						return new URL(b), b === "https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg" ? ["/static/vendor/onetrust/logos/ot_guard_logo.svg", N] : [b, N]
					} catch {
						return [b, l(N)]
					}
				}
			});
			var E = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				o = n("../react/app/providers/storeContainer.js");
			let s = "";
			const g = 61;

			function a(b) {
				const N = b.substr(1);
				if (N && s !== N) {
					const q = document.getElementById(N);
					if (q) {
						const ae = q.getBoundingClientRect().top;
						if (ae > 0) {
							const _e = ae - g;
							document.documentElement.scrollTop = _e
						}
					}
				}
				s = N
			}

			function C(b) {
				b.listen(N => a(N.hash))
			}
			var p = n("../../../../node_modules/cookie/index.js"),
				_ = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const j = "CF_dash_version",
				L = "current",
				f = "hash",
				S = "deploymentPreview",
				h = b => b === L ? w() : $(),
				w = () => new Date("Thu, 01 Jan 1970 00:00:00 UTC"),
				$ = (b = 72) => {
					const N = 36e5;
					return new Date(Date.now() + b * N)
				},
				Y = b => {
					switch (b) {
						case 429:
							return {
								title: "Rate Limit Exceeded", description: 'This IP address has been rate limited. Please wait one minute and then <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							};
						case 503:
							return {
								title: "The Cloudflare Dashboard is temporarily under maintenance.", description: 'Please visit the <a href="https://www.cloudflarestatus.com/incidents/5xxwjqd2lwgp">Cloudflare Status page</a> for up-to-date information regarding the maintenance.'
							};
						default:
							return {
								title: "The Cloudflare Dashboard is temporarily unavailable.", description: 'Please <a href="">reload this page</a> to try again. If the issue persists, please visit the <a href="https://cloudflarestatus.com">Cloudflare Status page</a> for up-to-date information regarding any ongoing issues.'
							}
					}
				},
				re = (b, N = !1) => {
					var q;
					const ae = Y(b),
						_e = `
  <style type="text/css">
    #loading-state {
      display: flex;
      height: 100vh;
      width: 100vw;
      justify-content: center;
      align-items: center;
    }
    .dark-mode body {
      background-color: #1d1d1d;
      color: #d9d9d9;
    }
    .error-container {
      line-height: 1.5;
      font-size: 20px;
      padding: 32px;
    }
    .error-container a {
      color: inherit;
      text-decoration: underline;
    }
    .error-container h1 {
      line-height: 1.5;
      font-size: inherit;
      font-weight: 600;
      margin: 0 auto 16px;
    }
    .error-container p {
      margin: 0;
      max-width: 37.5rem;
    }
    .error-container svg {
      width: 128px;
      margin-bottom: 16px;
    }
  </style>
  <div class="error-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1230.574 519.774" xml:space="preserve">
      <path fill="#F78100" d="M784.025,512.011l5.872-20.311c6.998-24.169,4.394-46.511-7.349-62.926c-10.801-15.122-28.804-24.022-50.666-25.056l-414.114-5.281c-2.788-0.147-5.096-1.403-6.518-3.471c-1.44-2.123-1.773-4.856-0.886-7.478c1.366-4.08,5.41-7.164,9.62-7.349l417.954-5.299c49.576-2.271,103.252-42.505,122.048-91.564l23.837-62.28c0.657-1.696,0.952-3.493,0.94-5.294c-0.007-0.984-0.078-1.969-0.294-2.94C857.383,91.028,748.758,0,618.863,0c-119.685,0-221.312,77.254-257.76,184.623c-23.523-17.652-53.62-27.031-85.969-23.801c-57.423,5.706-103.565,51.94-109.271,109.363c-1.496,14.901-0.277,29.284,3.158,42.8C75.222,315.718,0,392.566,0,487.029c0,8.549,0.646,16.95,1.846,25.166c0.591,3.988,3.952,6.98,7.977,6.98l764.527,0.092c0.076,0,0.142-0.034,0.218-0.036C778.942,519.134,782.79,516.24,784.025,512.011z"/>
      <path fill="#FBAC42" d="M921.982,225.558c-3.841,0-7.663,0.111-11.466,0.295c-0.628,0.033-1.224,0.185-1.796,0.385c-1.985,0.696-3.566,2.305-4.168,4.397l-16.286,56.242c-6.998,24.169-4.395,46.493,7.349,62.907c10.801,15.14,28.804,24.022,50.665,25.056l88.277,5.299c2.604,0.129,4.893,1.385,6.297,3.416c1.477,2.142,1.809,4.893,0.923,7.515c-1.385,4.081-5.41,7.164-9.601,7.349l-91.73,5.299c-49.798,2.29-103.473,42.505-122.27,91.564l-6.629,17.319c-1.206,3.134,1.039,6.472,4.354,6.635c0.084,0.004,0.159,0.031,0.244,0.031h315.626c3.766,0,7.127-2.456,8.142-6.075c5.484-19.498,8.402-40.048,8.402-61.301C1148.315,326.889,1046.984,225.558,921.982,225.558z"/>
    </svg>
    <h1 id="error-title">${ae.title}</h1>
    <p id="error-description">${ae.description}</p>
  </div>
  `,
						Oe = N ? `
    <style>
    .preview-banner {
      width: 680px;
      padding: 32px;
      background: ${_.fk.orange[9]};
      border-radius: 5px;
      box-shadow: 1px 1px 4px 0px #999;
    }
    .preview-banner-branch {
      font-family: Courier New;
      font-weight: bold;
    }
    </style>
    <div class="preview-banner">
      <p>You are currently on a preview for branch: <span class="preview-banner-branch">${(q=window.build)===null||q===void 0?void 0:q.branch}</span>.</p>
      <a href="/version?hash=current">Click here to go to the live dashboard deployment</a>
    </div>` : "";
					return _e + Oe
				},
				te = b => {
					var N;
					const q = document.getElementById(b);
					!q || (N = q.parentNode) === null || N === void 0 || N.removeChild(q)
				};

			function ee() {
				const b = document.getElementById("loading-state");
				b == null || b.classList.add("hide"), b == null || b.addEventListener("transitionend", () => {
					["loading-state", "loading-styles", "loading-script-dark-mode", "loading-script-i18n"].forEach(te)
				})
			}

			function J(b) {
				var N;
				const q = document.getElementById("loading-state"),
					ae = !!((N = p.parse(document.cookie)) === null || N === void 0 ? void 0 : N[j]);
				!q || (q.innerHTML = re(b == null ? void 0 : b.code, ae))
			}
			var k = n("../utils/initStyles.ts"),
				z = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				se = n("../../../../node_modules/@sentry/react/esm/sdk.js"),
				B = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/index.js"),
				ue = n("../../../../node_modules/@sentry/tracing/esm/index.js"),
				X = n("../../../../node_modules/history/esm/history.js"),
				P = (0, X.lX)(),
				Z = n("../../../../node_modules/@sentry/utils/esm/worldwide.js"),
				Q = n("../react/utils/url.ts");
			const ce = (0, Z.Rf)();
			let F;

			function ne(b) {
				return me(b, "react-router-v5")
			}

			function me(b, N) {
				return (q, ae = !0, _e = !0) => {
					ae && ce && ce.location && (F = q({
						name: (0, Q.Fl)(ce.location.pathname),
						op: "pageload",
						tags: {
							"routing.instrumentation": N
						}
					})), _e && b.listen && b.listen((Oe, Ae) => {
						if (Ae && (Ae === "PUSH" || Ae === "POP")) {
							F && F.finish();
							const rt = {
								"routing.instrumentation": N
							};
							F = q({
								name: (0, Q.Fl)(Oe.pathname),
								op: "navigation",
								tags: rt
							})
						}
					})
				}
			}
			var M = n("../react/common/selectors/languagePreferenceSelector.ts"),
				A = n("../flags.js"),
				R = n("../utils/getDashVersion.ts"),
				W = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				oe = n.n(W),
				ve = n("../../../common/intl/intl-core/src/errors.ts"),
				De = n("../../../../node_modules/@sentry/utils/esm/object.js"),
				Ie = n("../react/common/middleware/sparrow/errors.ts");
			const x = "https://a32e52f8871f439f850537cab9b0645a@sentry10.cfdata.org/218",
				fe = !0,
				Le = [/cloudflare\.com/, /staging\.cloudflare\.com/, /cloudflare\.lol/, /127\.0\.0\.1/, /webpack/, /localhost/],
				xe = ["top.GLOBALS", "originalCreateNotification", "canvas.contentDocument", "MyApp_RemoveAllHighlights", "http://tt.epicplay.com", "Can't find variable: ZiteReader", "jigsaw is not defined", "ComboSearch is not defined", "http://loading.retry.widdit.com/", "atomicFindClose", "fb_xd_fragment", "bmi_SafeAddOnload", "EBCallBackMessageReceived", "conduitPage", "Script error.", "Failed to construct 'Worker'", "sendBeacon", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications."];

			function je(b, N, q) {
				return N = Ue(N), N in b ? Object.defineProperty(b, N, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[N] = q, b
			}

			function Ue(b) {
				var N = Ye(b, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function Ye(b, N) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(b, N || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(b)
			}
			class Qe {
				constructor() {
					je(this, "name", Qe.id)
				}
				setupOnce() {
					n.g.console && (0, De.hl)(n.g.console, "error", N => (...q) => {
						const ae = q.find(_e => _e instanceof Error);
						if (x && ae) {
							let _e, Oe = !0;
							if (ae instanceof Ie.ez) {
								const Ae = ae instanceof Ie.oV ? ae.invalidProperties : void 0;
								_e = {
									tags: {
										"sparrow.eventName": ae.eventName
									},
									extra: {
										sparrow: {
											eventName: ae.eventName,
											invalidProperties: Ae
										}
									},
									fingerprint: [ae.name ? ae.name : "SparrowValidationError"]
								}, Oe = !1
							} else if (ae instanceof W.SparrowIdCookieError) _e = {
								extra: {
									sparrowIdCookie: ae.cookie
								},
								fingerprint: [ae.name ? ae.name : "SparrowIdCookieError"]
							};
							else if (ae.name === "ChunkLoadError") {
								_e = {
									fingerprint: [ae.name]
								};
								try {
									_e.tags = {
										chunkId: ae.message.split(" ")[2],
										chunkUrl: ae.request
									}
								} catch {}
							} else ae instanceof ve.YB && (_e = {
								fingerprint: ["TranslatorError", ae.translationKey]
							});
							Oe && E.Tb(ae, _e)
						}
						typeof N == "function" && N.apply(n.g.console, q)
					})
				}
			}
			je(Qe, "id", "ConsoleErrorIntegration");
			var ot = null,
				Je = n("../utils/sentry/lastSentEventId.ts"),
				tt = n("../../../../node_modules/@sentry/core/esm/transports/base.js"),
				Ke = n("../../../../node_modules/@sentry/utils/esm/syncpromise.js");
			const nt = b => {
					const N = async q => {
						var ae, _e;
						const Oe = {
							envelope: q.body,
							url: b.url,
							isPreviewDeploy: (ae = window) === null || ae === void 0 || (_e = ae.build) === null || _e === void 0 ? void 0 : _e.isPreviewDeploy,
							release: (0, R.t)()
						};
						try {
							const Ae = await fetch("https://platform.dash.cloudflare.com/sentry/envelope", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(Oe)
							});
							return {
								statusCode: Ae.status,
								headers: {
									"x-sentry-rate-limits": Ae.headers.get("X-Sentry-Rate-Limits"),
									"retry-after": Ae.headers.get("Retry-After")
								}
							}
						} catch (Ae) {
							return console.log(Ae), (0, Ke.$2)(Ae)
						}
					};
					return tt.q(b, N)
				},
				Xe = () => {
					if (x && fe) {
						var b, N, q, ae, _e, Oe, Ae, rt, ht, st;
						let zt = "production";
						((b = window) === null || b === void 0 || (N = b.build) === null || N === void 0 ? void 0 : N.isPreviewDeploy) && (zt += "-preview"), se.S({
							dsn: x,
							release: (0, R.t)(),
							environment: zt,
							ignoreErrors: xe,
							allowUrls: Le,
							autoSessionTracking: !1,
							integrations: [new B.jK.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: !1
							}), new Qe, new ue.jK.BrowserTracing({
								routingInstrumentation: ne(P)
							})],
							tracesSampleRate: 0,
							transport: nt,
							beforeSend: tn => (Je.e.setEventId(tn.event_id), tn)
						});
						const on = (0, o.bh)().getState();
						E.rJ({
							LOCAL_STORAGE_FLAGS: (0, A.Qw)(),
							USER_BETA_FLAGS: (0, A.ki)(),
							meta: {
								connection: {
									type: (q = window) === null || q === void 0 || (ae = q.navigator) === null || ae === void 0 || (_e = ae.connection) === null || _e === void 0 ? void 0 : _e.effectiveType,
									bandwidth: (Oe = window) === null || Oe === void 0 || (Ae = Oe.navigator) === null || Ae === void 0 || (rt = Ae.connection) === null || rt === void 0 ? void 0 : rt.downlink
								},
								languagePreference: (0, M.r)(on),
								isPreviewDeploy: (ht = window) === null || ht === void 0 || (st = ht.build) === null || st === void 0 ? void 0 : st.isPreviewDeploy
							},
							utilGates: (0, z.T2)(on)
						}), window.addEventListener("unhandledrejection", function(tn) {})
					}
				},
				ge = b => {
					b ? E.av({
						id: b
					}) : E.av(null)
				};
			var le = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				D = () => {
					let b;
					try {
						b = decodeURIComponent(window.location.search)
					} catch {
						console.log("Could not decode query string. Using non-decoded value."), b = window.location.search
					}
					if (!b.includes("remote[")) return;
					const N = new URLSearchParams(b),
						q = {};
					for (let [ae, _e] of N) ae.includes("remote") && (q[ae.replace(/remote\[|\]/g, "")] = _e);
					le.Z.set("mfe-remotes", JSON.stringify(q))
				},
				H = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs"),
				Ee = n("../node_modules/uuid/dist/esm-browser/v4.js");
			const Me = "ANON_USER_ID";

			function Re() {
				var b, N, q, ae;
				let _e = (b = n.g) === null || b === void 0 || (N = b.bootstrap) === null || N === void 0 || (q = N.data) === null || q === void 0 || (ae = q.user) === null || ae === void 0 ? void 0 : ae.id;
				if (!_e) {
					let Oe = le.Z.get(Me);
					if (!Oe) {
						let Ae = (0, Ee.Z)();
						le.Z.set(Me, Ae), Oe = Ae
					}
					return Oe
				}
				return _e
			}
			async function ke() {
				const b = (0, o.bh)();
				b.dispatch((0, H.nM)({
					apiKey: "a23ecf39a767418a832c8f8a5a902a8c",
					environment: "production"
				})), await b.dispatch((0, z.UL)({
					userId: Re()
				}))
			}
			var Fe = n("../libs/init/initBootstrap.ts"),
				Ne = n("webpack/sharing/consume/default/react/react"),
				be = n.n(Ne),
				Be = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				Ze = n("webpack/sharing/consume/default/react-dom/react-dom"),
				Ge = n("webpack/sharing/consume/default/react-redux/react-redux"),
				it = n("../../../../node_modules/swr/core/dist/index.mjs"),
				ct = n("../../../../node_modules/@cloudflare/component-modals/es/index.js"),
				U = n("../../../../node_modules/svg-classlist-polyfill/polyfill.js"),
				ie = n("../react/shims/focus-visible.js"),
				ye = n("../react/app/components/DeepLink/index.ts"),
				Te = n("../../../../node_modules/prop-types/index.js"),
				we = n.n(Te),
				ze = n("../react/utils/translator.tsx"),
				qe = n("../../../common/intl/intl-react/src/index.ts"),
				Pe = n("../../../dash/intl/intl-translations/src/index.ts"),
				Ct = n("../../../../node_modules/query-string/query-string.js"),
				T = n.n(Ct),
				I = n("../react/common/actions/userActions.ts"),
				K = n("../react/common/selectors/userSelectors.ts"),
				de = n("../react/utils/i18n.ts"),
				Ce = n("../react/utils/bootstrap.ts");

			function et(b) {
				for (var N = 1; N < arguments.length; N++) {
					var q = arguments[N] != null ? Object(arguments[N]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(q, _e).enumerable
					})), ae.forEach(function(_e) {
						lt(b, _e, q[_e])
					})
				}
				return b
			}

			function lt(b, N, q) {
				return N = bt(N), N in b ? Object.defineProperty(b, N, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[N] = q, b
			}

			function bt(b) {
				var N = gt(b, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function gt(b, N) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(b, N || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(b)
			}
			let He = T().parse(location.search);
			const ut = b => {
					const N = (0, Ce.$8)() ? [(0, Pe.Fy)(Pe.if.changes), (0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.navigation), (0, Pe.Fy)(Pe.if.overview), (0, Pe.Fy)(Pe.if.onboarding), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.dns), (0, Pe.Fy)(Pe.n4.ssl_tls), (0, Pe.Fy)(Pe.if.message_inbox)] : [(0, Pe.Fy)(Pe.if.common), (0, Pe.Fy)(Pe.if.invite), (0, Pe.Fy)(Pe.if.login), (0, Pe.Fy)(Pe.if.onboarding)];
					He.lang ? ft(b) : le.Z.get(de.th) && dt(b, le.Z.get(de.ly));
					const q = async ae => (await Promise.all(N.map(Oe => Oe(ae)))).reduce((Oe, Ae) => et({}, Oe, Ae), {});
					return be().createElement(qe.RD.Provider, {
						value: b.languagePreference
					}, be().createElement(qe.bd, {
						translator: ze.Vb,
						locale: b.languagePreference
					}, be().createElement(qe.lm, {
						loadPhrases: q
					}, b.children)))
				},
				ft = async b => {
					let N = He.lang.substring(0, He.lang.length - 2) + He.lang.substring(He.lang.length - 2, He.lang.length).toUpperCase();
					if (!(0, M.v)(N)) {
						console.warn(`${N} is not a supported locale.`), delete He.lang, b.history.replace({
							search: T().stringify(He)
						});
						return
					}
					le.Z.set(de.ly, N), delete He.lang, dt(b, N), b.isAuthenticated || b.history.replace({
						search: T().stringify(He)
					})
				}, dt = async (b, N) => {
					if (b.isAuthenticated) try {
						await b.setUserCommPreferences({
							"language-locale": N
						}, {
							hideErrorAlert: !0
						}), le.Z.remove(de.th), b.history.replace({
							search: T().stringify(He)
						})
					} catch (q) {
						le.Z.set(de.th, !0), console.error(q)
					} else le.Z.set(de.th, !0)
				}, Tt = b => {
					const N = (0, K.PR)(b);
					return {
						isAuthenticated: !!(N && N.id),
						languagePreference: le.Z.get(de.ly) || (0, M.r)(b)
					}
				}, at = {
					setUserCommPreferences: I.V_
				};
			var At = (0, Be.withRouter)((0, Ge.connect)(Tt, at)(ut));
			ut.propTypes = {
				history: we().object,
				languagePreference: we().string.isRequired,
				children: we().node.isRequired,
				isAuthenticated: we().bool,
				setUserCommPreferences: we().func.isRequired
			};
			var yt = n("../../../../node_modules/@cloudflare/style-provider/es/StyleProvider.js"),
				Gt = n("../../../../node_modules/@cloudflare/style-provider/es/createRenderer.js");
			let St;
			const Wt = ({
				selectorPrefix: b = "c_"
			} = {}) => (St || (St = (0, Gt.Z)({
				dev: !1,
				selectorPrefix: b
			})), St);
			var Zt = n("../react/common/components/ModalManager.tsx"),
				Ht = n("../react/app/components/ErrorBoundary.tsx"),
				Kt = n("../react/common/actions/notificationsActions.ts");
			const O = (n.g.bootstrap || {}).data || {};
			class pe extends be().Component {
				componentDidMount() {
					O.messages && this.dispatchNotificationActions(O.messages)
				}
				dispatchNotificationActions(N) {
					N.forEach(q => {
						const {
							type: ae,
							message: _e,
							persist: Oe
						} = q;
						["success", "info", "warn", "error"].includes(ae) && this.props.notifyAdd(ae, (0, ze.ZP)(_e), {
							persist: !!Oe
						})
					})
				}
				render() {
					return null
				}
			}
			var We = (0, Be.withRouter)((0, Ge.connect)(null, {
				notifyAdd: Kt.IH
			})(pe));
			pe.propTypes = {
				notifyAdd: we().func.isRequired
			};
			var $e = n("../react/app/redux/index.ts");

			function pt() {
				var b;
				const N = (0, $e.p4)(K.PR),
					q = (N == null || (b = N.email) === null || b === void 0 ? void 0 : b.endsWith("@cloudflare.com")) ? "cf-internal-employee" : "regular-user",
					ae = (0, H.Yc)();
				(0, Ne.useEffect)(() => {
					ae({
						userType: q
					})
				}, [q, ae])
			}
			var Et = n("../react/common/selectors/entitlementsSelectors.ts"),
				_t = n("../react/common/selectors/accountSelectors.ts");
			const Ot = ["accountId", "is_ent"];

			function Pt() {
				const b = (0, H.f7)(),
					N = (0, Be.useHistory)(),
					q = (0, Q.uW)(N.location.pathname),
					ae = (0, H.Yc)(),
					_e = (0, H.O$)(),
					Oe = (0, $e.p4)(Et.u1),
					Ae = !Oe.isRequesting && !!Oe.data,
					rt = (0, $e.p4)(Et.p1),
					ht = (0, $e.p4)(_t.Xu),
					st = (0, $e.p4)(_t.uF),
					zt = !ht.isRequesting && !!ht.data;
				(0, Ne.useEffect)(() => {
					q && zt && st && Ae && q === st.account.id ? ae({
						accountId: st.account.id,
						is_ent: rt
					}) : (!q || q in b && b.accountId !== q) && _e(Ot)
				}, [zt, st, ae, _e, Ae, rt, q, b])
			}
			var It = n("../react/common/selectors/zoneSelectors.ts");

			function Dt() {
				const b = (0, $e.p4)(It.nA),
					N = (0, H.Yc)();
				(0, Ne.useEffect)(() => {
					var q;
					N({
						zone_id: b == null ? void 0 : b.id,
						zone_plan: b == null || (q = b.plan) === null || q === void 0 ? void 0 : q.legacy_id
					})
				}, [b, N])
			}
			const wt = () => (pt(), Pt(), Dt(), null);
			var Lt = n("../react/app/components/Persistence/index.tsx"),
				Mt = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				Rt = n("../react/app/components/LoadingSuspense.tsx");
			const kt = be().lazy(() => Promise.all([n.e(2480), n.e(15770), n.e(4616), n.e(72019), n.e(99186), n.e(5668), n.e(7484), n.e(39760), n.e(7271), n.e(79491), n.e(40453)]).then(n.bind(n, "../react/common/components/DevPanel/Main.tsx")));
			var Nt = () => be().createElement(Rt.Z, null, be().createElement(kt, null));
			const jt = () => (Ne.useEffect(() => ee, []), null);
			var Ut = n("../../../../node_modules/moment/moment.js"),
				vt = n.n(Ut);
			const Bt = b => {
					switch (b) {
						case "en-US":
						case "es-ES":
						case "de-DE":
						case "fr-FR":
						case "it-IT":
						case "ja-JP":
						case "ko-KR":
							return b.slice(0, 2);
						case "es-MX":
						case "es-CL":
						case "es-EC":
						case "pt-BR":
						case "zh-CN":
						case "zh-TW":
							return b.toLowerCase();
						default:
							return "en"
					}
				},
				xt = () => {
					const b = (0, $e.p4)(M.r);
					(0, Ne.useEffect)(() => {
						const N = Bt(b);
						N !== vt().locale() && vt().locale(N), document.documentElement.lang = b
					}, [b])
				},
				Vt = () => {
					(0, Ne.useEffect)(() => {
						var b, N;
						let q;
						if (((b = window) === null || b === void 0 || (N = b.build) === null || N === void 0 ? void 0 : N.isPreviewDeploy) && (q = "cookie"), !!q) try {
							const ae = document.head.querySelector("link[rel=icon]");
							ae && (ae.href = n("../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$")(`./favicon-${q}.ico`))
						} catch {}
					}, [])
				};
			var Yt = n("../react/common/constants/constants.ts");
			const Qt = () => {
				var b;
				const N = (0, Be.useLocation)(),
					[q, ae] = (0, Ne.useState)(((b = window) === null || b === void 0 ? void 0 : b.localStorage.getItem("gates_devtools_ui_gates_controller_enabled")) === "true");
				return (0, Ne.useEffect)(() => {
					const _e = T().parse(N.search);
					if (_e.pt && le.Z.set(Yt.sJ, _e.pt), _e == null ? void 0 : _e.devPanel) {
						var Oe, Ae;
						(Oe = window) === null || Oe === void 0 || (Ae = Oe.localStorage) === null || Ae === void 0 || Ae.setItem("gates_devtools_ui_gates_controller_enabled", "true"), ae(!0)
					}
				}, [N.search]), {
					devPanelEnabled: q
				}
			};
			var Jt = n("../react/common/components/SAMLSubmit/SAMLSubmit.tsx");
			const Xt = be().lazy(() => Promise.all([n.e(2480), n.e(15770), n.e(4616), n.e(72019), n.e(99186), n.e(36273), n.e(8445), n.e(7484), n.e(39760), n.e(7271), n.e(79491), n.e(94452), n.e(85918), n.e(42864)]).then(n.bind(n, "../react/AuthenticatedApp.jsx"))),
				Ve = be().lazy(() => Promise.all([n.e(15770), n.e(36273), n.e(7271), n.e(69088), n.e(94452), n.e(76472)]).then(n.bind(n, "../react/UnauthenticatedApp.tsx")));
			var an = ({
					userIsAuthed: b
				}) => {
					const [N, q] = (0, Ne.useState)(!1);
					xt(), Vt();
					const {
						devPanelEnabled: ae
					} = Qt(), _e = Oe => {
						Oe && q(!0)
					};
					return be().createElement(Ne.Suspense, {
						fallback: be().createElement(jt, null)
					}, !N && be().createElement(Be.Switch, null, !b && !0 && be().createElement(Be.Route, {
						exact: !0,
						path: ["/", "/login"]
					}, be().createElement(Ve, null)), be().createElement(Be.Route, {
						render: () => be().createElement(Mt.ZC, {
							minHeight: "100vh"
						}, be().createElement(Xt, null))
					})), ae && be().createElement(Nt, null), be().createElement(Jt.Z, {
						userIsAuthed: b,
						spInitiated: !0,
						samlAuthBegin: _e
					}))
				},
				en = n("../../../../node_modules/yup/es/index.js"),
				sn = n("../../../common/util/types/src/utils/index.ts");
			const nn = {
				cfEmail: () => en.Z_().email((0, ze.ZP)("common.validation.email")).required((0, ze.ZP)("common.validation.email"))
			};
			(0, sn.Yd)(nn).forEach(b => {
				en.kM(en.Z_, b, nn[b])
			});
			const rn = be().lazy(() => Promise.all([n.e(4616), n.e(6368), n.e(44264), n.e(33970)]).then(n.bind(n, "../react/AuthOnlyProviders.tsx"))),
				cn = () => {
					const b = (0, Ce.$8)(),
						[N, q] = (0, Ne.useState)(b ? rn : be().Fragment),
						[ae, _e] = (0, Ne.useState)((0, _.Yc)());
					(0, Ne.useEffect)(() => {
						(0, _.fF)(() => _e((0, _.Yc)()))
					}, []);
					const Oe = Ae => {
						_e(Ae), (0, _.C8)(Ae)
					};
					return (0, Ne.useEffect)(() => {
						q(b ? rn : be().Fragment)
					}, [b]), (0, Ne.useEffect)(() => {
						const Ae = () => Oe(localStorage.getItem("dark-mode"));
						return window.addEventListener("storage", Ae), () => {
							window.removeEventListener("storage", Ae)
						}
					}, []), be().createElement(Ne.Suspense, {
						fallback: null
					}, be().createElement(Ge.Provider, {
						store: (0, o.bh)()
					}, be().createElement(Be.Router, {
						history: P
					}, be().createElement(N, null, be().createElement(yt.Z, {
						renderer: Wt()
					}, be().createElement(At, null, be().createElement(Ht.Z, {
						sentryTag: "Root"
					}, be().createElement(it.J$, {
						value: {
							fetcher: Ae => fetch(Ae).then(rt => rt.json())
						}
					}, be().createElement(wt, null), be().createElement(We, null), be().createElement(Lt.Z_, {
						onDarkModeChangeCb: Oe
					}, be().createElement(ye.ZP, null, be().createElement(an, {
						userIsAuthed: b
					}))), be().createElement(Zt.ZP, null), be().createElement(ct.F0, null)))))))))
				},
				ln = () => {
					(0, Ze.render)(be().createElement(cn, null), document.getElementById("react-app"))
				};
			var mt = n("../utils/initSparrow.ts"),
				Ft = n("../utils/zaraz.ts");
			const un = () => {
					const b = (0, K.PR)((0, o.bh)().getState());
					dn(), (0, mt.Ug)(), (0, Ft.bM)(), (b == null ? void 0 : b.id) && oe().setUserId(b == null ? void 0 : b.id), (0, mt.yV)(), !(0, mt.Wi)() && (0, mt.IM)(), b ? (0, Ft.yn)(b) : (0, Ft.Ro)()
				},
				dn = () => {
					var b, N;
					(b = window) === null || b === void 0 || (N = b.OneTrust) === null || N === void 0 || N.OnConsentChanged(() => {
						const q = (0, K.PR)((0, o.bh)().getState());
						(0, mt.Wi)() ? (oe().setEnabled(!0), (q == null ? void 0 : q.id) ? (oe().setUserId(q.id), (0, Ft.yn)(q)) : (0, Ft.Ro)(), (0, mt.yV)()) : (oe().setEnabled(!1), (0, mt.IM)())
					})
				};

			function pn(b) {
				for (var N = 1; N < arguments.length; N++) {
					var q = arguments[N] != null ? Object(arguments[N]) : {},
						ae = Object.keys(q);
					typeof Object.getOwnPropertySymbols == "function" && ae.push.apply(ae, Object.getOwnPropertySymbols(q).filter(function(_e) {
						return Object.getOwnPropertyDescriptor(q, _e).enumerable
					})), ae.forEach(function(_e) {
						mn(b, _e, q[_e])
					})
				}
				return b
			}

			function mn(b, N, q) {
				return N = gn(N), N in b ? Object.defineProperty(b, N, {
					value: q,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : b[N] = q, b
			}

			function gn(b) {
				var N = fn(b, "string");
				return typeof N == "symbol" ? N : String(N)
			}

			function fn(b, N) {
				if (typeof b != "object" || b === null) return b;
				var q = b[Symbol.toPrimitive];
				if (q !== void 0) {
					var ae = q.call(b, N || "default");
					if (typeof ae != "object") return ae;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (N === "string" ? String : Number)(b)
			}
			const yn = b => {
				E.$e(function(N) {
					N.setTag("init", "global"), E.Tb(b)
				}), J(b)
			};
			try {
				n.g.build = pn({}, {
					branch: "master",
					isReleaseCandidate: "true",
					commit: "e292ae18fabf3a8e95d5ab280592d2925229883b",
					dashVersion: "c34ffb32f46d9a3a41e35c3321ba1398b76501b4",
					env: "production",
					builtAt: 1720208250266,
					versions: {
						"@cloudflare/app-dash": "25.161.22",
						node: "20.10.0",
						yarn: "3.2.2",
						webpack: "5.88.2"
					}
				}, {
					isPreviewDeploy: (0, R.p)()
				}), Xe();
				try {
					n("../react/utils/api.ts")
				} catch (b) {
					throw E.$e(function(N) {
						N.setTag("init", "utils/api"), E.Tb(b)
					}), b
				}
				try {
					C(P)
				} catch (b) {
					throw E.$e(function(N) {
						N.setTag("init", "hashScroll"), E.Tb(b)
					}), b
				}
				try {
					(0, k.Z)()
				} catch (b) {
					throw E.$e(function(N) {
						N.setTag("init", "styles"), E.Tb(b)
					}), b
				}
				try {
					D()
				} catch (b) {
					throw E.$e(function(N) {
						N.setTag("init", "mfePreviewData"), E.Tb(b)
					}), b
				}(0, Fe.k)().then(async b => {
					var N;
					const q = (0, o.bh)(),
						ae = (b == null ? void 0 : b.data) || {};
					q.dispatch((0, t.mW)("user", ae == null ? void 0 : ae.user));
					const _e = b == null || (N = b.data) === null || N === void 0 ? void 0 : N.user;
					n.g.bootstrap = b, _e && _e.id && ge(_e.id);
					try {
						await ke()
					} catch (Oe) {
						throw E.$e(function(Ae) {
							Ae.setTag("init", "gates"), E.Tb(Oe)
						}), Oe
					}
					try {
						un()
					} catch (Oe) {
						throw E.$e(function(Ae) {
							Ae.setTag("init", "tracking"), E.Tb(Oe)
						}), Oe
					}
					return ln()
				}).catch(b => {
					E.$e(function(N) {
						N.setTag("init", "bootstrap"), E.Tb(b)
					}), J(b)
				})
			} catch (b) {
				yn(b)
			}
		},
		"../libs/init/initBootstrap.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				k: function() {
					return c
				}
			});
			class e extends Error {
				constructor(y, i) {
					super(i);
					this.name = `${y} ${i}`
				}
			}
			const r = () => {
					document.cookie.split(";").forEach(y => {
						const [i] = y.trim().split("=");
						document.cookie = `${i}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;`
					})
				},
				c = async () => {
					let d = await fetch("/api/v4/system/bootstrap", {
						credentials: "same-origin"
					});
					if (!d.ok) throw d.headers.get("content-type") === "text/html" && (await d.text()).toLowerCase().includes("cookie too large") && (r(), window.location.reload()), new e("Bootstrap API Failure", d == null ? void 0 : d.status);
					return (await d.json()).result.data
				}
		},
		"../react/app/components/DeepLink/actions.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return l
				},
				Bh: function() {
					return i
				},
				CM: function() {
					return E
				},
				MF: function() {
					return r
				},
				TS: function() {
					return s
				},
				WF: function() {
					return y
				},
				Wz: function() {
					return t
				},
				bk: function() {
					return u
				},
				fj: function() {
					return o
				},
				r4: function() {
					return d
				},
				zq: function() {
					return c
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js");
			const r = {
					ADD_SITE: "deepLink/ADD_SITE",
					RESOLVING_START: "deepLink/RESOLVING_START",
					RESOLVING_COMPLETE: "deepLink/RESOLVING_COMPLETE",
					SELECT_ZONE: "SELECT_ZONE",
					SELECT_ACCOUNT: "SELECT_ACCOUNT",
					SELECT_PAGES_PROJECT: "SELECT_PAGES_PROJECT",
					SELECT_PAGES_DEPLOYMENT: "SELECT_PAGES_DEPLOYMENT",
					SET_FILTERED_ACCOUNT_IDS: "deepLink/SET_FILTERED_ACCOUNT_IDS",
					DELETE_FILTERED_ACCOUNT_IDS: "deepLink/DELETE_FILTERED_ACCOUNT_IDS",
					SELECT_WORKER: "deepLink/SELECT_WORKER"
				},
				c = (0, e.R)(r.ADD_SITE, g => ({
					payload: g
				})),
				d = (0, e.R)(r.RESOLVING_START),
				y = (0, e.R)(r.RESOLVING_COMPLETE),
				i = (0, e.R)(r.SELECT_ZONE, g => ({
					payload: g
				})),
				u = (0, e.R)(r.SELECT_ACCOUNT, g => ({
					payload: g
				})),
				l = (0, e.R)(r.SELECT_PAGES_PROJECT, g => ({
					payload: g
				})),
				E = (0, e.R)(r.SELECT_PAGES_DEPLOYMENT, g => ({
					payload: g
				})),
				t = (0, e.R)(r.SET_FILTERED_ACCOUNT_IDS, g => ({
					accountIds: g
				})),
				o = (0, e.R)(r.DELETE_FILTERED_ACCOUNT_IDS),
				s = (0, e.R)(r.SELECT_WORKER, g => ({
					payload: g
				}))
		},
		"../react/app/components/DeepLink/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				BV: function() {
					return e
				},
				Dz: function() {
					return u
				},
				Fj: function() {
					return c
				},
				Kt: function() {
					return d
				},
				Tc: function() {
					return r
				},
				_h: function() {
					return l
				},
				s$: function() {
					return y
				}
			});
			const e = "to",
				r = "_gl",
				c = "deepLinkQueryParams",
				d = "add",
				y = "multiSkuProducts",
				i = "/:account/billing/checkout",
				u = "/:account/:zone/billing/checkout",
				l = new RegExp("^/(:account|[a-fA-F0-9]{32})(/(:zone|[^/.]+\\.[^/.]+))?/billing/checkout$")
		},
		"../react/app/components/DeepLink/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return re
				},
				U: function() {
					return u.U
				},
				dd: function() {
					return u.dd
				},
				bk: function() {
					return i.bk
				},
				Bh: function() {
					return i.Bh
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n("../react/app/redux/index.ts"),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../react/app/components/DeepLink/utils.ts"),
				y = n("../react/utils/bootstrap.ts"),
				i = n("../react/app/components/DeepLink/actions.ts"),
				u = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(l);

			function t(te) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var J = arguments[ee] != null ? Object(arguments[ee]) : {},
						k = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(J).filter(function(z) {
						return Object.getOwnPropertyDescriptor(J, z).enumerable
					})), k.forEach(function(z) {
						o(te, z, J[z])
					})
				}
				return te
			}

			function o(te, ee, J) {
				return ee = s(ee), ee in te ? Object.defineProperty(te, ee, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[ee] = J, te
			}

			function s(te) {
				var ee = g(te, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function g(te, ee) {
				if (typeof te != "object" || te === null) return te;
				var J = te[Symbol.toPrimitive];
				if (J !== void 0) {
					var k = J.call(te, ee || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(te)
			}
			class a {
				constructor(ee, J) {
					o(this, "deepLink", void 0), o(this, "legacyDeepLink", void 0), o(this, "resolvers", void 0), o(this, "startTime", Date.now()), o(this, "endTime", Date.now()), o(this, "_done", !1), o(this, "resolverStart", k => {
						this.resolvers.set(k, {
							name: k,
							startTime: Date.now(),
							userActions: []
						})
					}), o(this, "resolverDone", k => {
						const z = this.resolvers.get(k);
						z && (z.endTime = Date.now(), this.resolvers.set(k, z))
					}), o(this, "resolverCancel", k => {
						this.resolverDone(k), this.cancel()
					}), o(this, "start", () => {
						this.startTime = Date.now()
					}), o(this, "done", () => {
						this.endTime = Date.now(), this.track("Deep Link Success")
					}), o(this, "cancel", () => {
						this.endTime = Date.now(), this.track("Deep Link Cancel")
					}), o(this, "createUserActionTracker", k => {
						const z = "NO_ACTION",
							se = {
								actionType: z,
								startTime: 0
							};
						return {
							start: (B = z) => {
								const ue = this.resolvers.get(k);
								se.actionType = B, se.startTime = Date.now(), ue && ue.userActions.push(se)
							},
							finish: (B = z) => {
								se.actionType = B, se.endTime = Date.now()
							},
							cancel: (B = z) => {
								se.actionType = B, se.endTime = Date.now(), this.resolverCancel(k)
							}
						}
					}), this.deepLink = ee, this.legacyDeepLink = J, this.resolvers = new Map
				}
				track(ee) {
					try {
						if (this._done) return;
						this._done = !0;
						const J = {
								category: "routing",
								deepLink: this.deepLink,
								legacyDeepLink: this.legacyDeepLink,
								totalUserActionsTime: 0,
								totalTime: C(this.startTime, this.endTime),
								totalCpuTime: C(this.startTime, this.endTime)
							},
							k = this.resolvers.size === 0 ? J : Array.from(this.resolvers.values()).reduce((z, se) => {
								const B = C(se.startTime, se.endTime),
									ue = se.userActions.reduce((G, P) => {
										const Z = C(P.startTime, P.endTime);
										return {
											totalTime: G.totalTime + Z,
											actions: G.actions.set(P.actionType, Z)
										}
									}, {
										totalTime: 0,
										actions: new Map
									}),
									X = B - ue.totalTime;
								return t({}, z, {
									totalTime: z.totalTime + B,
									totalUserActionsTime: z.totalUserActionsTime + ue.totalTime,
									totalCpuTime: z.totalCpuTime + X,
									[`${se.name}ResolverTotalTime`]: B,
									[`${se.name}ResolverTotalCpuTime`]: X,
									[`${se.name}ResolverTotalUserActionsTime`]: ue.totalTime
								}, Array.from(ue.actions.keys()).reduce((G, P) => t({}, G, {
									[`${se.name}Resolver/${P}`]: ue.actions.get(P)
								}), {}))
							}, t({}, J, {
								totalTime: 0,
								totalCpuTime: 0
							}));
						E().sendEvent(ee, k)
					} catch (J) {
						console.error(J)
					}
				}
			}

			function C(te = Date.now(), ee = Date.now()) {
				return (ee - te) / 1e3
			}
			var p = n("../react/app/components/DeepLink/constants.ts"),
				_ = n("../react/common/hooks/useCachedState.ts"),
				j = n("../react/common/hooks/usePrevious.ts");

			function L(te) {
				for (var ee = 1; ee < arguments.length; ee++) {
					var J = arguments[ee] != null ? Object(arguments[ee]) : {},
						k = Object.keys(J);
					typeof Object.getOwnPropertySymbols == "function" && k.push.apply(k, Object.getOwnPropertySymbols(J).filter(function(z) {
						return Object.getOwnPropertyDescriptor(J, z).enumerable
					})), k.forEach(function(z) {
						f(te, z, J[z])
					})
				}
				return te
			}

			function f(te, ee, J) {
				return ee = S(ee), ee in te ? Object.defineProperty(te, ee, {
					value: J,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : te[ee] = J, te
			}

			function S(te) {
				var ee = h(te, "string");
				return typeof ee == "symbol" ? ee : String(ee)
			}

			function h(te, ee) {
				if (typeof te != "object" || te === null) return te;
				var J = te[Symbol.toPrimitive];
				if (J !== void 0) {
					var k = J.call(te, ee || "default");
					if (typeof k != "object") return k;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ee === "string" ? String : Number)(te)
			}
			var $ = ({
					children: te
				}) => {
					const ee = (0, r.TZ)(),
						J = (0, c.useHistory)(),
						k = (0, j.Z)(J.location.pathname),
						z = (0, r.p4)(u.dd),
						[se, B] = (0, e.useState)(!0),
						[ue, X] = (0, _.j)(void 0, {
							key: p.Fj
						}),
						[G, P] = (0, _.j)(void 0, {
							key: p.s$
						}),
						Z = (0, y.$8)();
					let Q = new URLSearchParams(J.location.search);
					const ce = (0, d.mL)(J.location.pathname, Q);
					let F = null,
						ne = null;
					if (Q.has(p.Tc) && Q.delete(p.Tc), Q.get(p.BV)) F = Q.get(p.BV), J.location.hash && (ne = J.location.hash);
					else if (ue) {
						const M = new URLSearchParams(ue);
						M.get(p.BV) && (F = M.get(p.BV), Q = M)
					} else ce && (Q.set(p.BV, ce), F = ce);
					if (F && p._h.test(F)) {
						const M = Q.getAll(p.Kt),
							A = JSON.stringify(M);
						M.length && A !== G && P(A), Q.has(p.Tc) && Q.delete(p.Tc), Q.delete(p.Kt)
					}!Z && ue === void 0 && F && X(Q.toString());
					const me = async () => {
						try {
							if ((0, d.I3)(F) && Z && !z) {
								ue && X(void 0), ee.dispatch((0, i.r4)()), B(!0);
								const M = await (0, d.py)(F, B, ee, J, k, new a(F, ce ? `${J.location.pathname}${J.location.search}` : void 0));
								Q.delete(p.BV);
								const A = Q.toString();
								J.replace(L({}, J.location, {
									pathname: M,
									search: A
								}, ne ? {
									hash: ne
								} : {})), ee.dispatch((0, i.WF)())
							}
						} catch (M) {
							ee.dispatch((0, i.WF)()), console.error(M)
						} finally {
							B(!1)
						}
					};
					return (0, e.useEffect)(() => {
						me()
					}, [J.location.pathname, J.location.search, z]), (se || (0, d.I3)(F)) && Z ? null : te
				},
				Y = n("../react/app/components/DeepLink/reducer.ts"),
				re = $
		},
		"../react/app/components/DeepLink/reducer.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				E: function() {
					return d
				},
				r: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../react/app/components/DeepLink/actions.ts");
			const d = null,
				y = r().from({
					lastAction: d,
					isResolving: !1,
					filteredAccountIds: void 0
				});

			function i(u = y, l) {
				if (l.type === c.MF.RESOLVING_COMPLETE) return y;
				if (l.type === c.MF.RESOLVING_START) return u.set("isResolving", !0);
				if (u.isResolving) {
					if (l.type === c.MF.RESOLVING_COMPLETE) return u.set("isResolving", !1);
					if (l.type === c.MF.SET_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", l.accountIds);
					if (l.type === c.MF.DELETE_FILTERED_ACCOUNT_IDS) return u.set("filteredAccountIds", void 0);
					{
						let E = u;
						try {
							E = u.set("lastAction", l)
						} catch {
							E = u.set("lastAction", {
								type: l.type
							})
						}
						return E
					}
				} else return u
			}
		},
		"../react/app/components/DeepLink/selectors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return c
				},
				dd: function() {
					return r
				},
				yI: function() {
					return e
				}
			});
			const e = d => d.deepLink.lastAction,
				r = d => d.deepLink.isResolving,
				c = d => d.deepLink.filteredAccountIds
		},
		"../react/app/components/DeepLink/utils.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				I3: function() {
					return g
				},
				X1: function() {
					return o
				},
				mL: function() {
					return j
				},
				py: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				r = n("../react/app/components/DeepLink/reducer.ts"),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const d = L => L.replace(c.default.endsWithSlash, ""),
				y = L => {
					const f = d(L).split("/").slice(3);
					return f.length ? "/" + f.join("/") : ""
				},
				i = L => {
					const f = d(L).split("/").slice(2);
					return f.length ? `apps/${f.join("/")}` : "apps"
				};
			var u = n("../react/app/components/DeepLink/selectors.ts"),
				l = n("../react/app/components/DeepLink/constants.ts"),
				E = n("../react/common/validators/index.js"),
				t = n("../react/common/utils/isGuards.ts");
			const o = L => (0, E.Lb)(L) && (L.split(".").length > 1 || (0, t.v5)(L)),
				s = e.eg.union([e.eg.literal("zone"), e.eg.literal("account"), e.eg.literal("pages-project"), e.eg.literal("pages-deployment"), e.eg.literal("worker")]),
				g = L => typeof L == "string" && L.startsWith("/"),
				a = (L, f) => S => new Promise((h, w) => {
					f.start();
					const $ = L.subscribe(() => {
						const Y = (0, u.yI)(L.getState());
						Y === r.E ? (f.cancel(), $(), w("DeepLink: waitForAction out of context.")) : S(Y) && (f.finish(Y.type), $(), h(Y))
					})
				}),
				C = (L, f, S) => (h, w) => new Promise(($, Y) => {
					S.start();
					const re = f.location.pathname;
					h = new URL(h, window.location.href).pathname, re !== h && (S.cancel(), Y(`DeepLink: waitForPageAction didn't execute on pageToAwaitActionOn: "${h}", but on "${re}". You need to redirect to "${h}", and unblockRouter in your Resolver, before you use this function.`));
					const te = L.subscribe(() => {
						const ee = (0, u.yI)(L.getState()),
							J = f.location.pathname,
							z = new URLSearchParams(f.location.search).get(l.BV);
						(J !== h || !!z) && (S.cancel(), te(), Y(`DeepLink: waitForPageAction user navigated away from "${h}" to "${J}${z?f.location.search:""}"`)), ee === r.E ? (S.cancel(), te(), Y("DeepLink: waitForPageAction out of context.")) : w(ee) && (S.finish(ee.type), te(), $(ee))
					})
				});

			function p(L) {
				const f = [],
					S = L.split("?")[0].split("/");
				for (let h of S) h.length !== 0 && (h.startsWith(":") ? f.push({
					value: h.substring(1),
					type: "dynamic"
				}) : f.push({
					value: h,
					type: "static"
				}));
				return f
			}
			async function _(L, f, S, h, w, $) {
				$.start();
				const Y = p(L),
					te = await (await Promise.all([n.e(32375), n.e(72019), n.e(78839), n.e(7484), n.e(72775)]).then(n.bind(n, "../react/app/components/DeepLink/resolvers/index.ts"))).default(),
					ee = {};
				let J = "";
				for (const [k, z] of Y.entries())
					if (z.type === "static") J = [J, z.value].join("/");
					else if (z.type === "dynamic" && s.is(z.value) && z.value in te) {
					$.resolverStart(z.value);
					const se = await te[z.value]({
						deepLink: L,
						blockRouter: () => f(!0),
						unblockRouter: () => f(!1),
						routerHistory: h,
						resolvedValues: ee,
						store: S,
						referringRoute: w,
						uri: {
							currentPartIdx: k,
							parts: Y
						},
						waitForAction: a(S, $.createUserActionTracker(z.value)),
						waitForPageAction: C(S, h, $.createUserActionTracker(z.value))
					});
					$.resolverDone(z.value), J = [J, se].join("/"), ee[z.value] = se
				} else throw $.cancel(), new Error(`DeepLink: Resolver with name '${z.value}' is not supported.`);
				return $.done(), J
			}

			function j(L, f) {
				const S = ":account",
					h = ":zone",
					w = f.get("zone");
				if (w) return f.delete("zone"), `/${S}/${h}/${w}`;
				const $ = f.get("account");
				if ($) return f.delete("account"), `/${S}/${$}`;
				if (L === "/overview") return `/${S}/${h}`;
				if (L === "/apps") return `/${S}/${h}/${i(L)}`;
				const Y = ["/analytics", "/dns", "/spectrum", "/crypto", "/firewall", "/access", "/performance", "/caching", "/workers", "/page-rules", "/network", "/traffic", "/stream", "/customization", "/content-protection", "/rules", "/email"];
				for (const re of Y) {
					const te = re.length;
					if (L.startsWith(re) && (L.length === te || L[te] === "/")) return `/${S}/${h}${L}`
				}
				switch (L) {
					case "/account/billing":
						return `/${S}/billing`;
					case "/account/subscriptions":
						return `/${S}/billing/subscriptions`;
					case "/account/virtualDNS":
						return `/${S}/dns-firewall`;
					case "/account/audit-log":
						return `/${S}/audit-log`;
					default:
						return null
				}
			}
		},
		"../react/app/components/ErrorBoundary.tsx": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@sentry/react/esm/errorboundary.js"),
				d = n("../react/app/components/SomethingWrong.jsx"),
				y = n("../utils/sentry/lastSentEventId.ts"),
				i = n("../react/utils/zaraz.ts"),
				u = n("../react/utils/url.ts");
			const l = ({
				sentryTag: E,
				children: t
			}) => r().createElement(c.SV, {
				beforeCapture: o => {
					E && o.setTag("errorBoundary", E), i.tg === null || i.tg === void 0 || i.tg.track("page-error", {
						page: (0, u.Fl)(window.location.pathname)
					})
				},
				onError: o => {
					({
						REDUX_LOGGER: void 0
					}).TESTING && n.g.logAppError(o)
				},
				fallback: ({
					error: o,
					eventId: s
				}) => {
					const g = y.e.getEventId() || s;
					return r().createElement(d.Z, {
						type: "page",
						error: o,
						eventId: g
					})
				}
			}, t);
			v.Z = l
		},
		"../react/app/components/ErrorStatus.tsx": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js");

			function d(E, t) {
				if (E == null) return {};
				var o = y(E, t),
					s, g;
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(E);
					for (g = 0; g < a.length; g++) s = a[g], !(t.indexOf(s) >= 0) && (!Object.prototype.propertyIsEnumerable.call(E, s) || (o[s] = E[s]))
				}
				return o
			}

			function y(E, t) {
				if (E == null) return {};
				var o = {},
					s = Object.keys(E),
					g, a;
				for (a = 0; a < s.length; a++) g = s[a], !(t.indexOf(g) >= 0) && (o[g] = E[g]);
				return o
			}
			const i = (0, c.createComponent)(({
					margin: E
				}) => E ? {} : {
					height: 300,
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				}),
				u = (0, c.createComponent)(({
					theme: E,
					margin: t,
					size: o = 5
				}) => ({
					display: "flex",
					color: E.colors.gray[3],
					height: t ? "auto" : "100%",
					padding: t ? 0 : E.space[o > 1 ? o - 2 : 0],
					margin: t,
					justifyContent: "center",
					textAlign: "center",
					alignItems: "center",
					fontSize: E.fontSizes[o]
				})),
				l = E => {
					let {
						children: t
					} = E, o = d(E, ["children"]);
					return r().createElement(i, o, r().createElement(u, o, t))
				};
			v.Z = l
		},
		"../react/app/components/Footer.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return G
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				y = n("../../../../node_modules/@cloudflare/component-icon/es/index.js"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				l = n.n(u),
				E = n("../react/common/components/Apple/utils.tsx"),
				t = n("../react/utils/translator.tsx"),
				o = n("../../../../node_modules/moment/moment.js"),
				s = n.n(o);
			const g = () => {
					const P = s()().format("YYYY"),
						Z = Q => {
							l().sendEvent("follower icloud footer link", {
								category: "icloud registrar",
								link: Q
							})
						};
					return r().createElement(a, {
						marginTop: "auto"
					}, r().createElement(C, null, r().createElement(p, null, r().createElement(_, null, "\xA9 ", P, " Cloudflare, Inc."), r().createElement(_, null, r().createElement(j, null, r().createElement(L, {
						showOnDeskTop: !1
					}, r().createElement(f, {
						fontWeight: 600,
						href: "https://support.cloudflare.com/",
						onClick: () => Z("Support")
					}, r().createElement(t.cC, {
						id: "common.support"
					}))), r().createElement(L, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/privacypolicy/",
						onClick: () => Z("Privacy Policy")
					}, r().createElement(t.cC, {
						id: "footer.privacy_policy"
					}))), r().createElement(L, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/terms/",
						onClick: () => Z("Terms of Use")
					}, r().createElement(t.cC, {
						id: "apple.footer.terms_of_use"
					}))), r().createElement(L, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/cookie-policy/",
						onClick: () => Z("Cookie Preferences")
					}, r().createElement(t.cC, {
						id: "apple.footer.cookie_preferences"
					}))), r().createElement(L, null, r().createElement(f, {
						fontWeight: 600,
						href: "https://www.cloudflare.com/trademark/",
						onClick: () => Z("Trademark")
					}, r().createElement(t.cC, {
						id: "apple.footer.trademark"
					})))), r().createElement(j, null, r().createElement(L, null, r().createElement(f, {
						fontWeight: 400,
						href: "https://www.icann.org/resources/pages/benefits-2013-09-16-en",
						onClick: () => Z("ICANN's Domain Name Registrants' Rights")
					}, r().createElement(t.cC, {
						id: "apple.footer.icanns"
					}))))))))
				},
				a = (0, i.createComponent)(({
					theme: P,
					marginTop: Z
				}) => ({
					backgroundColor: "#1F1F1F",
					width: "100%",
					minHeight: "143px",
					marginTop: Z
				})),
				C = (0, i.createComponent)(() => ({
					margin: "0 auto",
					maxWidth: "1000px"
				})),
				p = (0, i.createComponent)(({
					theme: P
				}) => ({
					desktop: {
						marginLeft: "70px",
						padding: "33px 0 0 0"
					},
					mobile: {
						padding: `33px ${P.space[3]}px`
					}
				})),
				_ = (0, i.createComponent)(({
					theme: P
				}) => ({
					width: "100%",
					color: P.colors.white,
					fontSize: P.fontSizes[1],
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					tablet: {
						flexDirection: "row"
					},
					desktop: {
						flexDirection: "row"
					}
				})),
				j = (0, i.createComponent)(({
					theme: P
				}) => ({
					display: "flex",
					flexWrap: "wrap",
					marginTop: P.space[3],
					desktop: {
						flexWrap: "nowrap"
					}
				})),
				L = (0, i.createComponent)(({
					showOnDeskTop: P = !0,
					theme: Z
				}) => ({
					color: Z.colors.white,
					fontSize: Z.fontSizes[1],
					height: "20px",
					display: P ? "flex" : "none",
					alignItems: "center",
					desktop: {
						display: "flex",
						"&:nth-child(2)": {
							marginLeft: Z.space[3],
							"&::before": {
								display: "inline-block"
							}
						}
					},
					"&:not(:first-child)": {
						marginLeft: Z.space[3],
						"&::before": {
							content: "'\xB7'",
							display: "block",
							position: "relative",
							left: "-8px",
							fontWeight: 800
						}
					},
					"&:nth-child(2)": {
						marginLeft: 0,
						"&::before": {
							display: "none"
						}
					}
				})),
				f = (0, i.createStyledComponent)(({
					theme: P
				}) => ({
					textDecoration: "none",
					color: P.colors.white,
					"&:hover": {
						color: P.colors.white,
						textDecoration: "underline"
					}
				}), "a");
			var S = g,
				h = n("../react/pages/welcome/routes.ts"),
				w = n("../react/utils/cookiePreferences.ts"),
				$ = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				Y = "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMCAxNCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzAgMTQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwNjZGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2ZpbGw6IzAwNjZGRjt9Cjwvc3R5bGU+CgkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyNzUgLTIwMCkiPgoJCQk8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjc1IDIwMCkiPgoJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0ibTcuNCAxMi44aDYuOGwzLjEtMTEuNmgtOS45Yy0zLjIgMC01LjggMi42LTUuOCA1LjhzMi42IDUuOCA1LjggNS44eiIvPgoJCQk8L2c+CgkJPC9nPgoJCTxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc1IC0yMDApIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NSAyMDApIj4KCQkJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Im0yMi42IDBoLTE1LjJjLTMuOSAwLTcgMy4xLTcgN3MzLjEgNyA3IDdoMTUuMmMzLjkgMCA3LTMuMSA3LTdzLTMuMi03LTctN3ptLTIxIDdjMC0zLjIgMi42LTUuOCA1LjgtNS44aDkuOWwtMy4xIDExLjZoLTYuOGMtMy4yIDAtNS44LTIuNi01LjgtNS44eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0MiIgZD0ibTI0LjYgNGMwLjIgMC4yIDAuMiAwLjYgMCAwLjhsLTIuMSAyLjIgMi4yIDIuMmMwLjIgMC4yIDAuMiAwLjYgMCAwLjhzLTAuNiAwLjItMC44IDBsLTIuMi0yLjItMi4yIDIuMmMtMC4yIDAuMi0wLjYgMC4yLTAuOCAwcy0wLjItMC42IDAtMC44bDIuMS0yLjItMi4yLTIuMmMtMC4yLTAuMi0wLjItMC42IDAtMC44czAuNi0wLjIgMC44IDBsMi4yIDIuMiAyLjItMi4yYzAuMi0wLjIgMC42LTAuMiAwLjggMHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDQuMWMwLjIgMC4yIDAuMyAwLjYgMC4xIDAuOGwtNC4yIDQuOWMtMC4xIDAuMS0wLjIgMC4yLTAuMyAwLjItMC4yIDAuMS0wLjUgMC4xLTAuNy0wLjFsLTIuMi0yLjJjLTAuMi0wLjItMC4yLTAuNiAwLTAuOHMwLjYtMC4yIDAuOCAwbDEuOCAxLjcgMy44LTQuNWMwLjItMC4yIDAuNi0wLjIgMC45IDB6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",
				te = () => {
					const [P, Z] = (0, e.useState)(!1), Q = (0, w.wV)(), ce = () => {
						Z(!0)
					}, F = () => {
						Z(!1)
					}, ne = Q && Q === "US" ? (0, t.ZP)("footer.cpra_cta.privacy_choices") : (0, t.ZP)("footer.cpra_cta.cookie_preferences"), me = {
						background: "transparent",
						borderRadius: "none",
						color: P ? (0, $.Yc)() ? "#ee730a" : "#003681" : (0, $.Yc)() ? "#4693ff" : "#0051c3",
						textDecoration: P ? "underline" : "none",
						textUnderlineOffset: "4px",
						cursor: "pointer",
						transitionProperty: "color",
						transitionDuration: "150ms",
						transitionTimingFunction: "ease",
						padding: "0px",
						display: "flex",
						alignItems: "center",
						lineHeight: "1.5",
						height: "fit-content",
						fontSize: "14px",
						fontWeight: 400,
						"&:focus": {
							outline: "2px solid #086fff"
						},
						border: "none",
						overflow: "hidden"
					};
					return r().createElement(d.zx, {
						id: "ot-sdk-btn",
						className: "ot-sdk-show-settings",
						style: me,
						onMouseEnter: ce,
						onMouseLeave: F
					}, r().createElement(d.Ei, {
						height: 15,
						src: Y,
						mr: 2,
						alt: ne
					}), ne)
				};

			function ee() {
				return ee = Object.assign ? Object.assign.bind() : function(P) {
					for (var Z = 1; Z < arguments.length; Z++) {
						var Q = arguments[Z];
						for (var ce in Q) Object.prototype.hasOwnProperty.call(Q, ce) && (P[ce] = Q[ce])
					}
					return P
				}, ee.apply(this, arguments)
			}

			function J(P, Z) {
				if (P == null) return {};
				var Q = k(P, Z),
					ce, F;
				if (Object.getOwnPropertySymbols) {
					var ne = Object.getOwnPropertySymbols(P);
					for (F = 0; F < ne.length; F++) ce = ne[F], !(Z.indexOf(ce) >= 0) && (!Object.prototype.propertyIsEnumerable.call(P, ce) || (Q[ce] = P[ce]))
				}
				return Q
			}

			function k(P, Z) {
				if (P == null) return {};
				var Q = {},
					ce = Object.keys(P),
					F, ne;
				for (ne = 0; ne < ce.length; ne++) F = ce[ne], !(Z.indexOf(F) >= 0) && (Q[F] = P[F]);
				return Q
			}
			const z = 24,
				se = (0, i.createStyledComponent)(() => ({
					borderBottom: "1.5px solid transparent",
					paddingBottom: "1.25px",
					textDecoration: "none",
					":hover": {
						borderBottom: `1.5px solid ${(0,$.Yc)()?$.rS.colors.orange[6]:$.rS.colors.blue[4]}`
					}
				}), d.A),
				B = P => {
					let {
						onClick: Z
					} = P, Q = J(P, ["onClick"]);
					return r().createElement(se, ee({
						onClick: ce => {
							l().sendEvent("navigate footer nav", {
								destinationPage: Q.href
							}), Z && Z(ce)
						}
					}, Q))
				},
				ue = P => {
					let {
						children: Z,
						target: Q,
						rel: ce
					} = P, F = J(P, ["children", "target", "rel"]);
					return r().createElement(B, ee({
						target: Q || "_blank",
						rel: ce || "noopener noreferrer"
					}, F), Z, r().createElement(y.J, {
						size: 12,
						ml: 1,
						label: "external-link",
						type: "external-link"
					}))
				};
			var G = () => {
				var P, Z;
				const Q = [h.d.root.pattern].some(ce => (0, c.matchPath)(location.pathname, {
					path: ce
				}));
				return (0, E.PP)() ? r().createElement(S, null) : Q ? null : r().createElement(d.$_, {
					bg: "background",
					borderTop: "1px solid",
					borderColor: "gray.8",
					py: 4,
					px: 3,
					mt: "auto"
				}, r().createElement(d.ZC, {
					display: "flex",
					flexWrap: "wrap",
					mx: "auto",
					maxWidth: "64rem"
				}, r().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.contact")), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.contact_support"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/enterprise-service-request"
				}, (0, t.ZP)("footer.contact_sales"))), r().createElement(d.Dd, {
					mt: 3
				}, r().createElement(d.ZC, {
					display: "flex",
					justifyContent: "flex-start"
				}, r().createElement(B, {
					"aria-label": (0, t.ZP)("footer.twitter_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://twitter.com/Cloudflare",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "twitter",
					size: z
				})), r().createElement(B, {
					"aria-label": (0, t.ZP)("footer.facebook_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.facebook.com/Cloudflare",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "facebook",
					size: z
				})), r().createElement(B, {
					"aria-label": (0, t.ZP)("footer.linked_in_link_purpose"),
					target: "_blank",
					rel: "noopener noreferrer",
					href: "https://www.linkedin.com/company/407222",
					mr: 1,
					height: `${z}px`
				}, r().createElement(y.J, {
					type: "linkedin",
					size: z
				})))))), r().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.what_we_do")), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/plans"
				}, (0, t.ZP)("footer.plans"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/overview"
				}, (0, t.ZP)("footer.about"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/network-map"
				}, (0, t.ZP)("footer.network_map"))))), r().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.resources")), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://developers.cloudflare.com"
				}, (0, t.ZP)("footer.product_docs"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://blog.cloudflare.com"
				}, (0, t.ZP)("footer.blog"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/case-studies"
				}, (0, t.ZP)("footer.testimonials"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://partners.cloudflare.com"
				}, (0, t.ZP)("footer.hosting_partners"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://api.cloudflare.com"
				}, (0, t.ZP)("footer.api"))))), r().createElement(d.ZC, {
					mb: 3,
					px: [0, 3, 3],
					width: [1 / 2, 1 / 5, 1 / 5],
					position: "relative"
				}, r().createElement("div", {
					style: {
						position: "absolute",
						top: "0",
						left: "0",
						height: "24px",
						width: "100%"
					},
					"aria-hidden": "true",
					title: `Current version: ${((P=window)===null||P===void 0||(Z=P.build)===null||Z===void 0?void 0:Z.dashVersion)||"unknown"}`
				}), r().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.support")), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://support.cloudflare.com"
				}, (0, t.ZP)("footer.help_center"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://community.cloudflare.com"
				}, (0, t.ZP)("footer.community"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflarestatus.com"
				}, (0, t.ZP)("footer.system_status"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/abuse"
				}, (0, t.ZP)("footer.trust_safety"))))), r().createElement(d.ZC, {
					mb: 3,
					width: [1 / 2, 1 / 5, 1 / 5]
				}, r().createElement(d.Dl, {
					fontSize: 2,
					ml: 0,
					listStyle: "none"
				}, r().createElement(d.Dt, {
					mb: 2
				}, (0, t.ZP)("footer.about_us")), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/people"
				}, (0, t.ZP)("footer.team"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/careers"
				}, (0, t.ZP)("footer.careers"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/press-center"
				}, (0, t.ZP)("footer.press"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/website-terms/"
				}, (0, t.ZP)("footer.tos"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/subscriptionagreement/"
				}, (0, t.ZP)("footer.subs_agreement"))), r().createElement(d.Dd, {
					mb: 2
				}, r().createElement(ue, {
					href: "https://www.cloudflare.com/privacypolicy/"
				}, (0, t.ZP)("footer.privacy_policy"))))), r().createElement(te, null)))
			}
		},
		"../react/app/components/LoadingSuspense.tsx": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				y = n("../react/utils/translator.tsx"),
				i = n("../react/app/components/ErrorStatus.tsx"),
				u = n("../react/common/components/EmptyPage.jsx"),
				l = n("../react/common/hooks/suspenseHelpers.ts");

			function E(s) {
				const [g, a] = (0, e.useState)(!1);
				return (0, e.useEffect)(() => {
					const C = window.setTimeout(() => a(!0), s);
					return () => window.clearTimeout(C)
				}, []), g
			}
			const t = ({
					loadingTimeout: s = 1e3,
					stillLoadingTimeout: g = 9e3
				}) => {
					const a = E(s),
						C = E(g);
					if ((0, l.nW)(), !a && !C) return r().createElement(u.Z, null);
					const p = C ? r().createElement(y.cC, {
						id: "common.still_loading"
					}) : a ? r().createElement(y.cC, {
						id: "common.loading"
					}) : null;
					return r().createElement(i.Z, {
						size: 5
					}, r().createElement(d.ZC, {
						mr: 3
					}, r().createElement(c.g, {
						size: "2x"
					})), p)
				},
				o = ({
					children: s
				}) => r().createElement(e.Suspense, {
					fallback: r().createElement(t, null)
				}, s);
			v.Z = o
		},
		"../react/app/components/Persistence/api.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				C8: function() {
					return l
				},
				d3: function() {
					return u
				},
				dr: function() {
					return y
				},
				lt: function() {
					return i
				},
				m6: function() {
					return t
				},
				n: function() {
					return E
				},
				yl: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e);
			const c = "/persistence/user",
				d = async () => {
					try {
						return await (await e.get(c, {
							hideErrorAlert: !0
						})).body
					} catch (o) {
						console.error(o)
					}
				}, y = async o => {
					try {
						return await (await e.get(`/accounts/${o}/organizations`, {
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, i = async (o, s) => {
					try {
						return await (await e.post(`${c}/favorites`, {
							body: JSON.stringify({
								type: "zone",
								name: o,
								accountId: s
							}),
							hideErrorAlert: !0
						})).body
					} catch (g) {
						return console.error(g), []
					}
				}, u = async (o, s) => {
					try {
						return await e.post(`/accounts/${o}/support/help_form/statusPage/subscribe`, {
							body: JSON.stringify({
								incidentId: s
							}),
							hideErrorAlert: !0
						}), !0
					} catch (g) {
						return console.error(g), !1
					}
				}, l = async o => {
					try {
						return await (await e.post(c, {
							body: JSON.stringify({
								darkMode: o
							})
						})).body
					} catch (s) {
						console.error(s)
					}
				}, E = async o => {
					try {
						return await (await e.post(`${c}/recents`, {
							body: JSON.stringify(o),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						console.error(s)
					}
				}, t = async o => {
					try {
						return await (await e.post(`${c}/viewed-changes`, {
							body: JSON.stringify(o),
							hideErrorAlert: !0
						})).body
					} catch (s) {
						throw console.error(s), s
					}
				}
		},
		"../react/app/components/Persistence/index.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				Wl: function() {
					return E
				},
				lp: function() {
					return p
				},
				Z_: function() {
					return j
				},
				r7: function() {
					return te
				},
				Tv: function() {
					return X
				},
				yZ: function() {
					return L
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../react/app/redux/index.ts"),
				d = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				y = n.n(d),
				i = n("../react/utils/bootstrap.ts"),
				u = n("../react/common/selectors/zoneSelectors.ts"),
				l = n("../react/app/components/Persistence/api.ts");
			const E = 10;

			function t(G) {
				for (var P = 1; P < arguments.length; P++) {
					var Z = arguments[P] != null ? Object(arguments[P]) : {},
						Q = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(Z).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(Z, ce).enumerable
					})), Q.forEach(function(ce) {
						o(G, ce, Z[ce])
					})
				}
				return G
			}

			function o(G, P, Z) {
				return P = s(P), P in G ? Object.defineProperty(G, P, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[P] = Z, G
			}

			function s(G) {
				var P = g(G, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function g(G, P) {
				if (typeof G != "object" || G === null) return G;
				var Z = G[Symbol.toPrimitive];
				if (Z !== void 0) {
					var Q = Z.call(G, P || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(G)
			}
			const a = {
					darkMode: "off",
					emailVerificationRequest: "",
					favorites: [],
					recents: {},
					viewedChanges: []
				},
				C = t({}, a, {
					isLoading: !0,
					actions: {
						starZone: () => null,
						setDarkMode: () => null,
						isZoneStarred: () => !1,
						canAccountStarZone: () => !0,
						logRouteVisited: () => null,
						viewChange: () => null
					}
				}),
				p = (0, e.createContext)(C),
				_ = p.Consumer,
				j = ({
					children: G,
					onDarkModeChangeCb: P
				}) => {
					const [Z, Q] = (0, e.useState)(a), [ce, F] = (0, e.useState)(C.isLoading), ne = (0, i.$8)(), me = (0, c.p4)(R => (0, u.wH)(R));
					(0, e.useEffect)(() => {
						ne ? (0, l.yl)().then(R => {
							R && (Q(R), P(R.darkMode))
						}).finally(() => F(!1)) : F(!1)
					}, [ne]);
					const M = (R, W) => !!Z.favorites.find(oe => oe.type === "zone" && oe.name === R && oe.accountId === W),
						A = R => Z.favorites.filter(oe => oe.type === "zone" && oe.accountId === R).length < E;
					return r().createElement(p.Provider, {
						value: t({}, Z, {
							isLoading: ce,
							actions: {
								canAccountStarZone: A,
								isZoneStarred: M,
								starZone: async (R, W) => {
									var oe;
									const ve = !M(R, W),
										De = A(W);
									if (ve && !De) {
										console.log("can not star zone - account is at limit");
										return
									}
									const Ie = await (0, l.lt)(R, W);
									y().sendEvent("click star zone", {
										isStarring: ve,
										totalStarredZones: Ie.filter(x => x.accountId === W && x.type === "zone").length,
										totalZones: me == null || (oe = me.paginationData) === null || oe === void 0 ? void 0 : oe.info.total_count
									}), Q(t({}, Z, {
										favorites: Ie
									}))
								},
								setDarkMode: async R => {
									const W = await (0, l.C8)(R);
									Q(W), P(W.darkMode)
								},
								logRouteVisited: async R => {
									var W;
									const oe = await (0, l.n)(R);
									Q((W = oe) !== null && W !== void 0 ? W : t({}, Z))
								},
								viewChange: async R => {
									const W = await (0, l.m6)(R);
									Q(t({}, Z, {
										viewedChanges: W
									}))
								}
							}
						})
					}, G)
				},
				L = () => (0, e.useContext)(p);
			var f = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				S = n("../../../../node_modules/@cloudflare/component-icon/es/index.js");

			function h() {
				return h = Object.assign ? Object.assign.bind() : function(G) {
					for (var P = 1; P < arguments.length; P++) {
						var Z = arguments[P];
						for (var Q in Z) Object.prototype.hasOwnProperty.call(Z, Q) && (G[Q] = Z[Q])
					}
					return G
				}, h.apply(this, arguments)
			}

			function w(G, P) {
				if (G == null) return {};
				var Z = $(G, P),
					Q, ce;
				if (Object.getOwnPropertySymbols) {
					var F = Object.getOwnPropertySymbols(G);
					for (ce = 0; ce < F.length; ce++) Q = F[ce], !(P.indexOf(Q) >= 0) && (!Object.prototype.propertyIsEnumerable.call(G, Q) || (Z[Q] = G[Q]))
				}
				return Z
			}

			function $(G, P) {
				if (G == null) return {};
				var Z = {},
					Q = Object.keys(G),
					ce, F;
				for (F = 0; F < Q.length; F++) ce = Q[F], !(P.indexOf(ce) >= 0) && (Z[ce] = G[ce]);
				return Z
			}
			const Y = {
				light: {
					gold: "gold.6",
					gray: "gray.6"
				},
				dark: {
					gold: "gold.3",
					gray: "gray.4"
				}
			};
			var te = G => {
					let {
						isStarred: P,
						size: Z = 16
					} = G, Q = w(G, ["isStarred", "size"]);
					const ce = Y[(0, f.Yc)() ? "dark" : "light"];
					return r().createElement(S.J, h({
						type: P ? "star" : "star-outline",
						color: P ? ce.gold : ce.gray,
						size: Z
					}, Q))
				},
				ee = n("../../../../node_modules/@cloudflare/elements/es/index.js");

			function J(G) {
				for (var P = 1; P < arguments.length; P++) {
					var Z = arguments[P] != null ? Object(arguments[P]) : {},
						Q = Object.keys(Z);
					typeof Object.getOwnPropertySymbols == "function" && Q.push.apply(Q, Object.getOwnPropertySymbols(Z).filter(function(ce) {
						return Object.getOwnPropertyDescriptor(Z, ce).enumerable
					})), Q.forEach(function(ce) {
						k(G, ce, Z[ce])
					})
				}
				return G
			}

			function k(G, P, Z) {
				return P = z(P), P in G ? Object.defineProperty(G, P, {
					value: Z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : G[P] = Z, G
			}

			function z(G) {
				var P = se(G, "string");
				return typeof P == "symbol" ? P : String(P)
			}

			function se(G, P) {
				if (typeof G != "object" || G === null) return G;
				var Z = G[Symbol.toPrimitive];
				if (Z !== void 0) {
					var Q = Z.call(G, P || "default");
					if (typeof Q != "object") return Q;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (P === "string" ? String : Number)(G)
			}
			const B = {
				light: {
					default: {
						border: "gray.8",
						text: "gray.2",
						bg: "white",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "blue.5",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				},
				dark: {
					default: {
						border: "gray.8",
						text: "gray.1",
						bg: "gray.7",
						bgDisabled: "grey.6"
					},
					active: {
						border: "blue.5",
						text: "gray.1",
						bg: "blue.9",
						bgDisabled: "grey.6"
					}
				}
			};
			var X = (0, e.forwardRef)(({
				featurePreview: G = !1,
				isStarred: P,
				onClickFn: Z,
				isDisabled: Q,
				testId: ce,
				buttonText: F,
				size: ne = "large"
			}, me) => {
				const M = B[(0, f.Yc)() ? "dark" : "light"][P && !G ? "active" : "default"],
					A = J({}, ne === "large" && {
						starIconSize: 16,
						fontSize: 3,
						height: "auto",
						paddingLeft: "12px",
						paddingRight: 3
					}, ne === "small" && {
						starIconSize: 14,
						fontSize: 1,
						height: "1.5rem",
						paddingLeft: "6px",
						paddingRight: 2
					});
				return r().createElement(ee.zx, {
					innerRef: me,
					display: "inline-flex",
					alignItems: "center",
					py: 2,
					pr: A.paddingRight,
					gap: 1,
					pl: A.paddingLeft,
					pointerEvents: "inherit",
					borderRadius: "50vh",
					border: "1px solid",
					cursor: G || Q ? "default" : "pointer",
					backgroundColor: M.bg,
					color: M.text,
					borderColor: M.border,
					onClick: Z,
					opacity: Q ? .5 : 1,
					disabled: Q,
					fontSize: A.fontSize,
					height: A.height,
					"data-testid": ce
				}, r().createElement(te, {
					isStarred: G ? !1 : P,
					size: A.starIconSize
				}), F)
			})
		},
		"../react/app/components/SomethingWrong.jsx": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(c),
				y = n("../../../common/intl/intl-react/src/index.ts"),
				i = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				u = n("../node_modules/@cloudflare/component-button/es/index.js"),
				l = n("../../../../node_modules/@sentry/react/node_modules/@sentry/browser/esm/sdk.js"),
				E = n("../../../../node_modules/@sentry/core/esm/exports.js"),
				t = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				o = n.n(t),
				s = n("../../../../node_modules/@cloudflare/component-header/es/index.js"),
				g = n("../../../../node_modules/@cloudflare/component-logo/es/index.js"),
				a = n("../react/app/components/Footer.tsx"),
				C = n("../react/utils/url.ts");

			function p(J) {
				for (var k = 1; k < arguments.length; k++) {
					var z = arguments[k] != null ? Object(arguments[k]) : {},
						se = Object.keys(z);
					typeof Object.getOwnPropertySymbols == "function" && se.push.apply(se, Object.getOwnPropertySymbols(z).filter(function(B) {
						return Object.getOwnPropertyDescriptor(z, B).enumerable
					})), se.forEach(function(B) {
						_(J, B, z[B])
					})
				}
				return J
			}

			function _(J, k, z) {
				return k = j(k), k in J ? Object.defineProperty(J, k, {
					value: z,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : J[k] = z, J
			}

			function j(J) {
				var k = L(J, "string");
				return typeof k == "symbol" ? k : String(k)
			}

			function L(J, k) {
				if (typeof J != "object" || J === null) return J;
				var z = J[Symbol.toPrimitive];
				if (z !== void 0) {
					var se = z.call(J, k || "default");
					if (typeof se != "object") return se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (k === "string" ? String : Number)(J)
			}
			const f = (0, i.createComponent)(({
					type: J
				}) => ({
					height: J !== "fullscreen" ? 451 : "75vh",
					tabletLegacy: {
						marginBottom: "-2.66rem"
					}
				})),
				S = (0, i.createComponent)(({
					theme: J,
					margin: k,
					size: z = 6
				}) => ({
					display: "flex",
					flexFlow: "column",
					color: J.colors.gray[3],
					height: k ? "auto" : "100%",
					padding: k ? 0 : J.space[z > 1 ? z - 2 : 0],
					margin: k,
					justifyContent: "center",
					alignItems: "center"
				})),
				h = (0, i.createComponent)(() => ({
					textAlign: "left"
				})),
				w = (0, i.createComponent)(() => ({
					textAlign: "right"
				})),
				$ = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[6]
				})),
				Y = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[4]
				})),
				re = (0, i.createComponent)(({
					theme: J
				}) => ({
					fontSize: J.fontSizes[3]
				})),
				te = (0, i.createComponent)(({
					theme: J
				}) => ({
					width: "100%",
					height: 125,
					marginTop: J.space[4],
					padding: J.space[2]
				}), "textarea");
			class ee extends r().Component {
				constructor(...k) {
					super(...k);
					_(this, "state", {
						value: "",
						submitted: !1
					}), _(this, "handleTextareaChange", z => {
						this.setState({
							value: z.target.value
						})
					}), _(this, "sendErrToSentry10", async () => {
						try {
							var z, se, B, ue;
							const X = ((z = window) === null || z === void 0 || (se = z.bootstrap) === null || se === void 0 || (B = se.data) === null || B === void 0 || (ue = B.user) === null || ue === void 0 ? void 0 : ue.id) || "Unknown",
								G = this.props.eventId || l.eW(),
								P = {
									name: X,
									email: `${X}@userid.com`,
									comments: this.state.value,
									eventId: G,
									url: window.location.href,
									prevUrl: document.referrer,
									date: Date.now(),
									dashVersion: window.build.dashVersion,
									build: p({}, window.build)
								};
							(await fetch("https://platform.dash.cloudflare.com/sentry/user-feedback", {
								method: "POST",
								headers: {
									Accept: "*/*",
									"Content-Type": "application/json"
								},
								body: JSON.stringify(P)
							})).ok && this.setState({
								submitted: !0,
								value: ""
							}, () => {
								setTimeout(() => window.location.href = "/", 5 * 1e3)
							})
						} catch (X) {
							console.error(X)
						}
					}), _(this, "handleSubmit", () => {
						this.state.value !== "" && this.sendErrToSentry10()
					}), _(this, "renderContent", z => r().createElement(y.oc, null, se => r().createElement(f, {
						type: z
					}, r().createElement(S, null, r().createElement(h, null, r().createElement($, null, se.t("error.internal_issues")), r().createElement(Y, null, se.t("error.help_us")), r().createElement(te, {
						name: "comment",
						value: this.state.textareaValue,
						onChange: B => this.handleTextareaChange(B),
						disabled: this.state.submitted,
						placeholder: se.t("error.give_feedback")
					}), r().createElement(w, null, !this.state.submitted && r().createElement(u.zx, {
						onClick: this.handleSubmit,
						type: "primary"
					}, se.t("common.submit")), this.state.submitted && r().createElement(re, null, se.t("error.feedback_sent"))))))))
				}
				componentDidMount() {
					const k = this.props.error;
					console.error(`SomethingWrong: ${k}`), E.YA("user_feedback_form_displayed", "yes"), E.YA("normalizedPath", (0, C.Fl)(window.location.pathname))
				}
				render() {
					const {
						type: k
					} = this.props;
					return k === "fullscreen" ? r().createElement("div", null, r().createElement(s.h4, null, r().createElement(t.Link, {
						to: "/"
					}, r().createElement(g.TR, null))), this.renderContent(k), r().createElement(a.Z, null)) : this.renderContent(k)
				}
			}
			ee.propTypes = {
				type: d().oneOf(["fullscreen", "page"]),
				error: d().oneOfType([d().string, d().object]),
				eventId: d().string
			}, v.Z = ee
		},
		"../react/app/providers/storeContainer.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				bh: function() {
					return Ct
				}
			});
			var e = n("../../../../node_modules/redux/es/redux.js"),
				r = n("../../../../node_modules/redux-thunk/es/index.js"),
				c = n("../../../../node_modules/redux-persist/es/index.js"),
				d = n("../../../../node_modules/redux-persist/lib/storage/index.js"),
				y = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				i = n("../react/app/redux/makeReducer.js"),
				u = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				l = n.n(u);
			const E = u.static.from({
					data: void 0,
					errors: null,
					isRequesting: !1,
					isErrored: !1
				}),
				t = (T, {
					type: I,
					meta: K
				}) => K && K.method === "put" && I.indexOf("membership") === 0 ? E : T;
			var s = {
					reducer: (0, i.ZP)("invite").on("default", t)
				},
				g = n("../../../../node_modules/@cloudflare/util-exhausted-reducers/es/index.js"),
				a = n("../react/common/actionTypes.ts");
			const C = (T = l().from({
					isRequesting: !1,
					isErrored: !1,
					isFinished: !1,
					securityToken: null,
					errors: null
				}), I) => {
					switch (I.type) {
						case "ONBOARDING_SIGNUP_REQUEST":
							return l().merge(T, {
								isRequesting: !0,
								isFinished: !1,
								isErrored: !1,
								errors: null
							});
						case "ONBOARDING_SIGNUP_SUCCESS":
							return l().merge(T, {
								isRequesting: !1,
								isFinished: !0,
								isErrored: !1
							});
						case "ONBOARDING_SIGNUP_FAILURE":
							return l().merge(T, {
								isRequesting: !1,
								isErrored: !0,
								errors: I.errors
							});
						case "ONBOARDING_SECURITY_TOKEN_UPDATE":
							return l().update(T, "securityToken", () => I.token)
					}
					return (0, g.h)(I, T)
				},
				p = {
					apikey: (0, i.ZP)(a.Yc.APIKEY),
					apitoken: (0, i.ZP)(a.Yc.APITOKEN),
					emailrollback: (0, i.ZP)(a.Yc.EMAIL_ROLLBACK),
					deleteuser: (0, i.ZP)(a.Yc.DELETE_USER),
					forgotpass: (0, i.ZP)(a.Yc.FORGOT_PASS),
					login: (0, i.ZP)(a.Yc.LOGIN),
					origincakey: (0, i.ZP)(a.Yc.ORIGIN_CA_KEY),
					signup: (0, i.ZP)(a.Yc.SIGNUP)
				};
			var _ = {
				reducer: (0, e.combineReducers)({
					userCreation: C,
					[a.Yc.APIKEY]: p.apikey,
					[a.Yc.APITOKEN]: p.apitoken,
					[a.Yc.EMAIL_ROLLBACK]: p.emailrollback,
					[a.Yc.DELETE_USER]: p.deleteuser,
					[a.Yc.FORGOT_PASS]: p.forgotpass,
					[a.Yc.LOGIN]: p.login,
					[a.Yc.ORIGIN_CA_KEY]: p.origincakey,
					[a.Yc.SIGNUP]: p.signup
				})
			};

			function j(T = (0, u.static)({}), I) {
				switch (I.type) {
					case a.Li:
						const {
							userId: K, accountId: de, timeStamp: Ce
						} = I;
						return u.static.setIn(T, [K, de], {
							lastSeen: Ce
						});
					default:
						return T
				}
			}

			function L(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						f(T, Ce, K[Ce])
					})
				}
				return T
			}

			function f(T, I, K) {
				return I = S(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function S(T) {
				var I = h(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function h(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function w(T = {}, I) {
				const K = `__ACTIVE__${I.activeKey}`;
				switch (I.type) {
					case a.HI:
						return L({}, T, {
							[K]: I.activeValue
						});
					case a.s1:
						return L({}, T, {
							[K]: void 0
						});
					default:
						return T
				}
			}
			const $ = () => [...Array(8)].map(T => Math.floor(Math.random() * 16).toString(16)).join(""),
				Y = [];

			function re(T, I) {
				if (T === void 0) return Y;
				switch (I.type) {
					case a.Np: {
						const {
							payload: K,
							options: de
						} = I, {
							ModalComponent: Ce,
							props: et
						} = K;
						return T = de.replace ? Y : T, [...T, {
							id: $(),
							ModalComponent: Ce,
							props: et
						}]
					}
					case a.gM: {
						const {
							ModalComponent: K
						} = I.payload;
						if (K) {
							const de = T.findIndex(Ce => Ce.ModalComponent === K);
							return de >= 0 ? T.slice(0, de) : T
						} else return T.slice(0, -1)
					}
					default:
						return T
				}
			}

			function te(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						ee(T, Ce, K[Ce])
					})
				}
				return T
			}

			function ee(T, I, K) {
				return I = J(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function J(T) {
				var I = k(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function k(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}

			function z(T = {}, I) {
				const K = `__TOGGLE__${I.toggleKey}`;
				switch (I.type) {
					case a.lV:
						return te({}, T, {
							[K]: !0
						});
					case a.Cm:
						return te({}, T, {
							[K]: !1
						});
					default:
						return T
				}
			}
			const se = {
				notifications: []
			};

			function B(T, I) {
				switch (T === void 0 && (T = se), I.type) {
					case a.Ng:
						return Object.assign({}, T, {
							notifications: T.notifications.concat(I.notification)
						});
					case a.Cz:
						return Object.assign({}, T, {
							notifications: T.notifications.filter(function(K) {
								return K.id !== I.notificationId
							})
						});
					default:
						return T
				}
			}

			function ue(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						X(T, Ce, K[Ce])
					})
				}
				return T
			}

			function X(T, I, K) {
				return I = G(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function G(T) {
				var I = P(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function P(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const Z = T => (0, i.ZP)(T).on("success", (I, K, {
					meta: de
				}) => {
					var Ce, et;
					const {
						accountId: lt,
						zoneId: bt,
						dateOnly: gt = !1
					} = de.params || {};
					let He = "";
					const ut = {},
						ft = ue({}, (Ce = I.paginationData) === null || Ce === void 0 || (et = Ce.options) === null || et === void 0 ? void 0 : et.editedDate);
					I.data.forEach(Tt => {
						const {
							id: at,
							allocation: At,
							edited_date: yt
						} = Tt;
						ut[at] = At.value, yt > He && (He = yt)
					}), ft[lt || bt] = He;
					const dt = {
						options: {
							editedDate: ft
						}
					};
					return gt ? ue({}, I, {
						paginationData: dt
					}) : ue({}, I, {
						paginationData: dt,
						data: ut
					})
				}),
				Q = (0, e.combineReducers)({
					account: Z("accountEntitlements"),
					zone: Z("zoneEntitlements")
				});
			var ce = n("../react/app/components/DeepLink/reducer.ts");

			function F(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						ne(T, Ce, K[Ce])
					})
				}
				return T
			}

			function ne(T, I, K) {
				return I = me(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function me(T) {
				var I = M(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function M(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const A = (0, i.ZP)("onboardingGuide").on("success", (T, I, K) => {
				if (K.meta.method === "post") {
					var de;
					const Ce = I.data && I.data.completedTasks || [],
						et = (de = I.data && I.data.readTasks) !== null && de !== void 0 ? de : [];
					return F({}, T, {
						data: {
							completedTasks: Array.from(new Set(Ce.concat(K.payload.status === "completedTasks" ? K.payload.taskName : []))),
							readTasks: Array.from(new Set(et.concat(K.payload.status === "readTasks" ? K.payload.taskName : [])))
						}
					})
				}
				return T
			});
			var R = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js");

			function W(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						oe(T, Ce, K[Ce])
					})
				}
				return T
			}

			function oe(T, I, K) {
				return I = ve(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function ve(T) {
				var I = De(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function De(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const Ie = (T, I) => {
				const {
					meta: K
				} = I;
				return K && K.method === "delete" && !T[K.entityType] ? T : (0, R.uW)(T, I)
			};
			var x = {
					access: (0, e.combineReducers)({
						accessOrganizations: (0, i.ZP)("organizations").modifyInitialState(T => W({}, T, {
							needsHydration: !0,
							data: {
								auth_domain: "",
								name: "",
								login_design: {}
							}
						})).on("success", (T, I) => W({}, T, {
							data: Array.isArray(T == null ? void 0 : T.data) ? I == null ? void 0 : I.data : T == null ? void 0 : T.data,
							needsHydration: !1
						})).on("error", T => W({}, T, {
							needsHydration: !1
						}))
					}),
					accountAccess: j,
					accounts: (0, i.ZP)("accounts"),
					application: (0, e.combineReducers)({
						active: w,
						modals: re,
						toggles: z
					}),
					deepLink: ce.r,
					entitlements: Q,
					entities: Ie,
					gates: y.vq,
					notifications: B,
					onboarding: _.reducer,
					onboardingGuide: A,
					userCommPreferences: (0, i.ZP)("userCommPreferences"),
					userDetails: (0, i.ZP)("userDetails"),
					invite: s.reducer,
					membership: (0, i.ZP)("membership"),
					memberships: (0, i.ZP)("memberships").on("success", (T, I, K) => K.meta.method === "delete" ? W({}, T, {
						data: I.data.filter(de => de !== K.payload)
					}) : T),
					filteredMemberships: (0, i.ZP)("filteredMemberships"),
					user: (0, i.ZP)("user"),
					zone: (0, i.ZP)("zone"),
					zoneFlags: (0, i.ZP)("zoneFlags"),
					zoneSubscription: (0, i.ZP)("zoneSubscription"),
					zoneSubscriptions: (0, i.ZP)("zoneSubscriptions"),
					zones: (0, i.ZP)("zones"),
					zonesRoot: (0, i.ZP)("zonesRoot"),
					zonesAccount: (0, i.ZP)("zonesAccount")
				},
				fe = n("../react/app/redux/normalizer.js"),
				Le = n("../../../../node_modules/@sentry/react/esm/redux.js"),
				xe = n("../react/common/selectors/zoneSelectors.ts"),
				je = n("../../../../node_modules/object.pick/index.js"),
				Ue = n.n(je);

			function Ye(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						Qe(T, Ce, K[Ce])
					})
				}
				return T
			}

			function Qe(T, I, K) {
				return I = ot(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function ot(T) {
				var I = Je(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function Je(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const tt = ["accountRoles", "accountSubscriptions", "application", "caching", "crypto", "customizations", "edgeauth", "access", "entitlements", "fields", "firewall", "notifications", "onboarding", "partners", "performance", "ratePlans", "settings", "traffic", "user", "zone", "zones"],
				Ke = T => {
					const I = Ue()(T, tt),
						K = (0, xe.nA)(T);
					return Ye({}, I, {
						accountTwoFa: T.profile && T.profile.twoFactor,
						currentZone: Ue()(K, ["plan", "type"])
					})
				},
				nt = ({
					type: T,
					meta: I
				}) => ({
					type: T,
					entityType: I && I.entityType
				});
			var Xe = n("../react/app/reducerRegistry.js"),
				ge = n("../../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js"),
				le = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				he = n("../react/common/constants/index.ts"),
				D = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				H = n("../react/app/redux/makeAction.js"),
				Ee = n("../react/common/actions/membershipActions.ts");
			const Me = "get";

			function* Re(T) {
				const I = {
					entityType: T.entityType,
					method: Me
				};
				try {
					yield(0, le.gw)(200), yield(0, le.gz)((0, H.dJ)({
						type: `${T.entityType}.start`,
						meta: I
					}));
					const K = yield(0, le.RE)(D[Me], T.url, T.params[0]);
					let de = K && K.body;
					T.type === he.UM.MEMBERSHIPS_ROOT_REQUESTED && (de = (0, Ee.ct)({
						payload: de.result
					})), yield(0, le.gz)((0, H.Oy)({
						type: `${T.entityType}.success`,
						payload: de,
						meta: {
							entityType: T.entityType,
							method: Me
						}
					}, {}, T.params, {}, K))
				} catch (K) {
					throw yield(0, le.gz)((0, H.$J)({
						type: `${T.entityType}.error`,
						payload: K,
						error: !0,
						meta: I
					}, {}, T.params, {}, K)), K
				}
			}
			var ke = [(0, le.Fm)(he.UM.ZONES_ROOT_REQUESTED, Re), (0, le.Fm)(he.UM.ZONES_ACCOUNT_REQUESTED, Re), (0, le.Fm)(he.UM.ZONES_HEADER_REQUESTED, Re), (0, le.Fm)(he.UM.MEMBERSHIPS_ROOT_REQUESTED, Re), (0, le.Fm)(he.UM.ACCOUNT_MEMBERS_REQUESTED, Re)],
				Fe = n("../react/pages/apps/marketplace/config/sagas.ts");

			function* Ne() {
				yield(0, le.$6)([...ke, ...Fe.y])
			}
			var be = n("../react/app/redux/processActionMiddleware.js"),
				Be = n("../../../../node_modules/is-promise/index.js"),
				Ze = n.n(Be);

			function Ge(T) {
				for (var I = 1; I < arguments.length; I++) {
					var K = arguments[I] != null ? Object(arguments[I]) : {},
						de = Object.keys(K);
					typeof Object.getOwnPropertySymbols == "function" && de.push.apply(de, Object.getOwnPropertySymbols(K).filter(function(Ce) {
						return Object.getOwnPropertyDescriptor(K, Ce).enumerable
					})), de.forEach(function(Ce) {
						it(T, Ce, K[Ce])
					})
				}
				return T
			}

			function it(T, I, K) {
				return I = ct(I), I in T ? Object.defineProperty(T, I, {
					value: K,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : T[I] = K, T
			}

			function ct(T) {
				var I = U(T, "string");
				return typeof I == "symbol" ? I : String(I)
			}

			function U(T, I) {
				if (typeof T != "object" || T === null) return T;
				var K = T[Symbol.toPrimitive];
				if (K !== void 0) {
					var de = K.call(T, I || "default");
					if (typeof de != "object") return de;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (I === "string" ? String : Number)(T)
			}
			const ie = {
					key: "cf-redux-store",
					storage: d.Z,
					whitelist: ["accountAccess", "invite"]
				},
				ye = (0, ge.ZP)(),
				we = [({
					dispatch: T
				}) => I => K => Ze()(K) ? K.then(de => T(de)) : I(K), ye, r.Z, be.Z, fe.qR],
				ze = T => (0, c.Wq)(ie, Ge({}, x, T));

			function qe() {
				const T = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
					K = e.compose((0, e.applyMiddleware)(...we), Le.w({
						actionTransformer: nt,
						stateTransformer: Ke
					})),
					de = {},
					Ce = (0, e.createStore)(ze(Xe.Z.getReducers()), de, K);
				ye.run(Ne), (0, c.p5)(Ce);
				const lt = (n.g.bootstrap || {}).data || {};
				return Ce.dispatch((0, R.mW)("user", lt.user)), Ce
			}
			let Pe;
			Xe.Z.setChangeListener(T => {
				var I;
				Pe && ((I = Pe) === null || I === void 0 ? void 0 : I.replaceReducer) && (Pe.replaceReducer(ze(T)), (0, c.p5)(Pe))
			});

			function Ct() {
				return Pe || (Pe = qe()), Pe
			}
		},
		"../react/app/reducerRegistry.js": function(V, v, n) {
			"use strict";

			function e(u) {
				for (var l = 1; l < arguments.length; l++) {
					var E = arguments[l] != null ? Object(arguments[l]) : {},
						t = Object.keys(E);
					typeof Object.getOwnPropertySymbols == "function" && t.push.apply(t, Object.getOwnPropertySymbols(E).filter(function(o) {
						return Object.getOwnPropertyDescriptor(E, o).enumerable
					})), t.forEach(function(o) {
						r(u, o, E[o])
					})
				}
				return u
			}

			function r(u, l, E) {
				return l = c(l), l in u ? Object.defineProperty(u, l, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = E, u
			}

			function c(u) {
				var l = d(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function d(u, l) {
				if (typeof u != "object" || u === null) return u;
				var E = u[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class y {
				constructor() {
					this.listener = null, this.reducers = {}
				}
				getReducers() {
					return e({}, this.reducers)
				}
				emitChange() {
					this.listener && this.listener(this.getReducers())
				}
				register(l, E) {
					this.reducers = e({}, this.reducers, {
						[l]: E
					}), this.emitChange()
				}
				registerAll(l) {
					this.reducers = e({}, this.reducers, l), this.emitChange()
				}
				setChangeListener(l) {
					this.listener = l
				}
			}
			const i = new y;
			v.Z = i
		},
		"../react/app/redux/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				TZ: function() {
					return c
				},
				UM: function() {
					return y
				},
				ZS: function() {
					return d
				},
				p4: function() {
					return i
				}
			});
			var e = n("webpack/sharing/consume/default/react-redux/react-redux"),
				r = n.n(e);
			const c = () => (0, e.useStore)(),
				d = () => c().getState(),
				y = () => (0, e.useDispatch)(),
				i = e.useSelector
		},
		"../react/app/redux/makeAction.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				$J: function() {
					return s
				},
				Oy: function() {
					return o
				},
				SC: function() {
					return E
				},
				ZP: function() {
					return g
				},
				dJ: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				r = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				c = n.n(r);

			function d(a) {
				for (var C = 1; C < arguments.length; C++) {
					var p = arguments[C] != null ? Object(arguments[C]) : {},
						_ = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(p).filter(function(j) {
						return Object.getOwnPropertyDescriptor(p, j).enumerable
					})), _.forEach(function(j) {
						y(a, j, p[j])
					})
				}
				return a
			}

			function y(a, C, p) {
				return C = i(C), C in a ? Object.defineProperty(a, C, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = p, a
			}

			function i(a) {
				var C = u(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function u(a, C) {
				if (typeof a != "object" || a === null) return a;
				var p = a[Symbol.toPrimitive];
				if (p !== void 0) {
					var _ = p.call(a, C || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			const l = d({}, r),
				E = (a, C, p, _ = {}) => {
					const j = a === "delete" ? "del" : a.toLowerCase();
					return p && j !== "del" && (_.body = p), l[j](C, _)
				},
				t = (a, C) => (a.meta.params = C, a),
				o = (a, C, p, _, {
					body: j = {}
				}) => {
					const {
						result: L,
						messages: f,
						result_info: S
					} = j, h = Object.values(C);
					if (a.meta.method === "delete") {
						const w = h[h.length - 1];
						a.meta.id = typeof w == "object" ? w.id : w
					}
					return a.payload = L, f && (a.meta.messages = f), h.length && (a.meta.params = C), S && (a.meta.paginationData = {
						info: S,
						actionParameters: h,
						options: p[0],
						insertionOffset: 0
					}), a
				},
				s = (a, C, p, _, j) => (a.payload = j && j.body && j.body.errors, a.meta.messages = j && j.body && j.body.messages, a.meta.params = C, a);

			function g(a, C, p, _) {
				const j = (0, e.RM)(a, C, p, _).apiFetch(E).on("start", t).on("success", o).on("error", s),
					L = j.mock;
				return j.mock = f => (L((...S) => {
					const h = f(...S);
					return h && typeof h == "object" && "result" in h ? h : {
						result: h
					}
				}), j), j
			}
		},
		"../react/app/redux/makeActionCreator.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				C: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");

			function r(d, y) {
				return {
					get: (i, ...u) => (0, e.ZP)(d, "get", c(i, u), y),
					post: (i, ...u) => (0, e.ZP)(d, "post", c(i, u), y),
					delete: (i, ...u) => (0, e.ZP)(d, "delete", c(i, u), y),
					put: (i, ...u) => (0, e.ZP)(d, "put", c(i, u), y),
					patch: (i, ...u) => (0, e.ZP)(d, "patch", c(i, u), y)
				}
			}

			function c(d, y) {
				let i = "";
				const u = [...d.raw],
					l = [...y];
				for (; u.length > 0 || l.length > 0;) {
					const E = u.shift(),
						t = l.shift();
					i += E !== void 0 ? E : "", i += t !== void 0 ? `(${t})` : ""
				}
				return i
			}
		},
		"../react/app/redux/makeReducer.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				d = n("../../../../node_modules/lodash/clone.js"),
				y = n.n(d);
			const i = e.static.from([]);

			function u(o, s, {
				meta: {
					paginationData: g,
					messages: a
				}
			}) {
				let C = e.static.set(o, "messages", a || i);
				return g ? e.static.merge(C, {
					paginationData: g
				}) : C
			}

			function l(o, s, {
				meta: {
					errors: g,
					messages: a
				}
			}) {
				const C = {
					messages: a || i
				};
				return g && (C.errors = g), e.static.merge(o, C)
			}

			function E(o, s, g = {}) {
				const {
					data: a
				} = o;
				if (s.type === `${g.insertDelete}.success`) {
					const {
						method: C
					} = s.meta;
					let p = 0,
						_ = o;
					if (C === "post") {
						const j = a ? [s.payload, ...a] : [s.payload];
						_ = e.static.set(_, "data", j), p = 1
					} else if (C === "delete" && a && a.includes(s.meta.id)) {
						const j = a.filter(L => L !== s.meta.id);
						_ = e.static.set(_, "data", j), p = -1
					}
					return p && o.paginationData && (_ = e.static.setIn(_, ["paginationData", "insertionOffset"], o.paginationData.insertionOffset + p)), _
				}
				return s.type === "cfForceUpdate" ? e.static.set(o, "data", y()(a)) : o
			}

			function t(o, s = {}) {
				return s.errorKey = "errors", (0, c.j3)(o, s).modifyInitialState(g => e.static.set(g, "messages", i)).on("success", u).on("error", l).on("default", E)
			}
		},
		"../react/app/redux/normalizer.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				P1: function() {
					return E
				},
				jQ: function() {
					return u
				},
				qR: function() {
					return t
				},
				uc: function() {
					return l
				}
			});
			var e = n("../react/pages/home/alerts/config.tsx"),
				r = n("../react/pages/workers/entityTypes.ts"),
				c = n("../react/pages/email/types.ts"),
				d = n("../../../../node_modules/redux-grim/dist/redux-grim.es.js"),
				y = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				i = n.n(y);
			const u = y.static.from([{
					entityType: "accessOrganization"
				}, {
					entityType: "access-temp-data"
				}, {
					entityType: "accessPolicy"
				}, {
					entityType: "accessGroup"
				}, {
					entityType: "accessPolicies",
					to: "accessPolicy"
				}, {
					entityType: "accessGroups",
					to: "accessGroup"
				}, {
					entityType: "accessAppLauncher"
				}, {
					entityType: "accounts"
				}, {
					entityType: e.w8.alert
				}, {
					entityType: e.w8.alerts,
					to: e.w8.alert
				}, {
					entityType: e.w8.alertsHistory
				}, {
					entityType: e.w8.integrations
				}, {
					entityType: e.w8.pagerDuty
				}, {
					entityType: e.w8.pagerDutyRequest
				}, {
					entityType: e.w8.statuspageComponents
				}, {
					entityType: e.w8.webhook
				}, {
					entityType: e.w8.webhooks
				}, {
					entityType: e.w8.availableAlerts
				}, {
					entityType: e.w8.availableAlertsForProduct
				}, {
					entityType: e.w8.deliveryMechanisms
				}, {
					entityType: "accountsDetailed"
				}, {
					entityType: "accountSubscriptions",
					to: "accountSubscription"
				}, {
					entityType: "zoneSubscriptions",
					to: "zoneSubscription"
				}, {
					entityType: "accountSubscription"
				}, {
					entityType: "accountSubscriptionCancelDowngrade"
				}, {
					entityType: "accountSubscriptionCancellationReason"
				}, {
					entityType: "accountLegoContract"
				}, {
					entityType: "accountMember"
				}, {
					entityType: "accountMembers",
					to: "accountMember"
				}, {
					entityType: "accountSingle"
				}, {
					entityType: "accountRoles"
				}, {
					entityType: "accountHealthChecks"
				}, {
					entityType: "advancedTCPProtection"
				}, {
					entityType: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPAllowlist",
					to: "advancedTCPAllowlistItem"
				}, {
					entityType: "advancedTCPPrefix"
				}, {
					entityType: "advancedTCPPrefixes",
					to: "advancedTCPPrefix"
				}, {
					entityType: "amp"
				}, {
					entityType: "apiShields",
					to: "apiShield"
				}, {
					entityType: "apiShield"
				}, {
					entityType: "apiToken"
				}, {
					entityType: "apiTokens",
					to: "apiToken"
				}, {
					entityType: "apiTokenZones",
					to: "zone"
				}, {
					entityType: "apiTokenFormZones",
					to: "zone"
				}, {
					entityType: "apiTokenSearchZones",
					to: "zone"
				}, {
					entityType: "billing.usageGraphQL"
				}, {
					entityType: "billingAccount"
				}, {
					entityType: "billingPlans"
				}, {
					entityType: "billingProfile"
				}, {
					entityType: "billingTransactions"
				}, {
					entityType: "billingOutstandingTransactions",
					to: "billingTransactions"
				}, {
					entityType: "billingBadDebt",
					nestedProps: {
						invoices: "billingTransactions"
					}
				}, {
					entityType: "billingUnpaidInvoices"
				}, {
					entityType: "billingNextBilling"
				}, {
					entityType: "billableUsage"
				}, {
					entityType: "billingContractSelfServeEligibility"
				}, {
					entityType: "certificate"
				}, {
					entityType: "certificates",
					to: "certificate"
				}, {
					entityType: "colosStats"
				}, {
					entityType: "certificatePack"
				}, {
					entityType: "certificatePacks",
					to: "certificatePack"
				}, {
					entityType: "certificateOrder"
				}, {
					entityType: "certificateValidationStatus"
				}, {
					entityType: "clientCertificate"
				}, {
					entityType: "clientCertificates",
					to: "clientCertificate"
				}, {
					entityType: "customerMetadataBoundary"
				}, {
					entityType: "customHostname"
				}, {
					entityType: "customHostnames",
					to: "customHostname"
				}, {
					entityType: "customCSR"
				}, {
					entityType: "customCSRs",
					to: "customCSR"
				}, {
					entityType: "dnsFirewallCluster"
				}, {
					entityType: "dnsFirewallClusters",
					to: "dnsFirewallCluster"
				}, {
					entityType: "dnsRecord"
				}, {
					entityType: "dnsRecords",
					to: "dnsRecord"
				}, {
					entityType: "dnsRecordsImport"
				}, {
					entityType: "dnsAcl"
				}, {
					entityType: "dnsAcls",
					to: "dnsAcl"
				}, {
					entityType: "dnsTsig"
				}, {
					entityType: "dnsTsigs",
					to: "dnsTsig"
				}, {
					entityType: "dnsOutgoingZoneTransfers"
				}, {
					entityType: "dnsMaster"
				}, {
					entityType: "dnsMasters",
					to: "dnsMaster"
				}, {
					entityType: "dpa"
				}, {
					entityType: "filter"
				}, {
					entityType: "filteredMemberships"
				}, {
					entityType: "firewallRule",
					nestedProps: {
						filter: "filter"
					}
				}, {
					entityType: "firewallRules",
					to: "firewallRule"
				}, {
					entityType: "greTunnel"
				}, {
					entityType: "greTunnels",
					to: "greTunnel"
				}, {
					entityType: "interconnect"
				}, {
					entityType: "interconnects",
					to: "interconnect"
				}, {
					entityType: "healthCheck"
				}, {
					entityType: "healthChecks",
					to: "healthCheck"
				}, {
					entityType: "magicConnector"
				}, {
					entityType: "magicConnectors",
					to: "magicConnector"
				}, {
					entityType: "hostnameRegions"
				}, {
					entityType: "http2ToOrigin"
				}, {
					entityType: "httpStats"
				}, {
					entityType: "httpStatsOverview"
				}, {
					entityType: "identityProvider"
				}, {
					entityType: "identityProviders",
					to: "identityProvider"
				}, {
					entityType: "ipAccessRule"
				}, {
					entityType: "ipAccessRules",
					to: "ipAccessRule"
				}, {
					entityType: "ipPrefix"
				}, {
					entityType: "ipPrefixes",
					to: "ipPrefix"
				}, {
					entityType: "ipsecTunnel"
				}, {
					entityType: "ipsecTunnels",
					to: "ipsecTunnel"
				}, {
					entityType: "pcapBucket"
				}, {
					entityType: "pcapBucketValidation",
					to: "pcapBucket"
				}, {
					entityType: "pcapBuckets",
					to: "pcapBucket"
				}, {
					entityType: "pcapCapture"
				}, {
					entityType: "pcapCaptures",
					to: "pcapCapture"
				}, {
					entityType: "networkMonitoringConfiguration"
				}, {
					entityType: "networkMonitoringRule"
				}, {
					entityType: "networkMonitoringRules",
					to: "networkMonitoringRule"
				}, {
					entityType: "loadBalancer",
					nestedProps: {
						default_pools: "pool",
						fallback_pool: "pool",
						region_pools: "pool",
						country_pools: "pool",
						pop_pools: "pool"
					}
				}, {
					entityType: "languagePreference"
				}, {
					entityType: "loadBalancers",
					to: "loadBalancer"
				}, {
					entityType: "accountLogpushJob"
				}, {
					entityType: "accountLogpushJobs",
					to: "accountLogpushJob"
				}, {
					entityType: "logpushJob"
				}, {
					entityType: "logpushJobs",
					to: "logpushJob"
				}, {
					entityType: "logpushDestinationExists"
				}, {
					entityType: "logpushDestinationValidation"
				}, {
					entityType: "logpushSentOwnershipToken"
				}, {
					entityType: "logpushOwnershipValidation"
				}, {
					entityType: "logpushFieldsAll"
				}, {
					entityType: "logpushFieldsDefault"
				}, {
					entityType: "staticRoute"
				}, {
					entityType: "staticRoutes",
					to: "staticRoute"
				}, {
					entityType: "membership",
					to: "memberships"
				}, {
					entityType: "memberships",
					nestedProps: {
						account: "accounts"
					}
				}, {
					entityType: "monitor"
				}, {
					entityType: "monitors",
					to: "monitor"
				}, {
					entityType: "mTlsHosts"
				}, {
					entityType: "nel"
				}, {
					entityType: "normalizationSetting"
				}, {
					entityType: "schemaValidationV2"
				}, {
					entityType: "paymentMethod"
				}, {
					entityType: "paymentMethods",
					to: "paymentMethod"
				}, {
					entityType: "pool",
					nestedProps: {
						monitor: "monitor"
					}
				}, {
					entityType: "pools",
					to: "pool"
				}, {
					entityType: "prefixDelegation"
				}, {
					entityType: "prefixDelegations",
					to: "prefixDelegation"
				}, {
					entityType: "prefixServices",
					idProp: "prefix_id"
				}, {
					entityType: "onboardingGuide"
				}, {
					entityType: "organization"
				}, {
					entityType: "originCertificate"
				}, {
					entityType: "originCertificates",
					to: "originCertificate"
				}, {
					entityType: "pageRule"
				}, {
					entityType: "pageRules",
					to: "pageRule"
				}, {
					entityType: "purgeCache"
				}, {
					entityType: "sanitizeRuleset"
				}, {
					entityType: "sanitizeRulesetOverrides"
				}, {
					entityType: "sanitizeRulesets",
					to: "sanitizeRuleset"
				}, {
					entityType: "serviceToken"
				}, {
					entityType: "serviceTokens",
					to: "serviceToken"
				}, {
					entityType: "shortLivedCertificate"
				}, {
					entityType: "shortLivedCertificates",
					to: "shortLivedCertificate"
				}, {
					entityType: "shareStats"
				}, {
					entityType: "spectrumApp"
				}, {
					entityType: "spectrumApps",
					to: "spectrumApp"
				}, {
					entityType: "sslRecommenderPreference"
				}, {
					entityType: "sslRecommendation"
				}, {
					entityType: "totalTLSSettings"
				}, {
					entityType: "certificatePacksByHosts"
				}, {
					entityType: "customHostnamesByHosts"
				}, {
					entityType: "synProtectionRule"
				}, {
					entityType: "synProtectionRules",
					to: "synProtectionRule"
				}, {
					entityType: "synProtectionFilter"
				}, {
					entityType: "synProtectionFilters",
					to: "synProtectionFilter"
				}, {
					entityType: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpFlowProtectionRules",
					to: "tcpFlowProtectionRule"
				}, {
					entityType: "tcpProtectionFilter"
				}, {
					entityType: "tcpProtectionFilters",
					to: "tcpProtectionFilter"
				}, {
					entityType: "user",
					nestedProps: {
						organizations: "userOrganization"
					}
				}, {
					entityType: "userOrganization"
				}, {
					entityType: "userAgentRule"
				}, {
					entityType: "userAgentRules",
					to: "userAgentRule"
				}, {
					entityType: "userSessions"
				}, {
					entityType: "regionalHostname",
					idProp: "hostname"
				}, {
					entityType: "regionalHostnames",
					to: "regionalHostname"
				}, {
					entityType: "revokeSession"
				}, {
					entityType: "securityKey"
				}, {
					entityType: "securityKeys"
				}, {
					entityType: "rateLimit"
				}, {
					entityType: "rateLimits",
					to: "rateLimit"
				}, {
					entityType: "auditLogs"
				}, {
					entityType: "userCommPreferences"
				}, {
					entityType: "userDetails"
				}, {
					entityType: "workerRoutes"
				}, {
					entityType: "zone"
				}, {
					entityType: "singleZone",
					to: "zone"
				}, {
					entityType: "zoneSubscription"
				}, {
					entityType: "recheckNameservers"
				}, {
					entityType: "abuseUrls"
				}, {
					entityType: "zoneHold"
				}, {
					entityType: "abuseReview"
				}, {
					entityType: "zones",
					to: "zone"
				}, {
					entityType: "zonesRoot",
					to: "zone"
				}, {
					entityType: "zonesAccount",
					to: "zone"
				}, {
					entityType: "zoneMarketingCampaigns"
				}, {
					entityType: "zoneRuleset"
				}, {
					entityType: "zoneRulesets"
				}, {
					entityType: "zoneRulesetsEnabled"
				}, {
					entityType: "zoneRulesetDLPOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneRulesetOverride",
					to: "zoneRuleset"
				}, {
					entityType: "zoneMasters"
				}, {
					entityType: "zoneUiConfig"
				}, {
					entityType: "zoneLockdown"
				}, {
					entityType: "zoneLockdowns",
					to: "zoneLockdown"
				}, {
					entityType: "argoGeoAnalytics"
				}, {
					entityType: "argoGlobalAnalytics"
				}, {
					entityType: "dnsAnalyticsTopNxDomainRecords"
				}, {
					entityType: "dnsAnalyticsTopRecords"
				}, {
					entityType: "dnsAnalyticsTSByRecordType"
				}, {
					entityType: "dnsAnalyticsTSByResponseCode"
				}, {
					entityType: "geographyDnsAnalyticsNoErrorPerColo"
				}, {
					entityType: "geographyDnsAnalyticsNxDomainPerColo"
				}, {
					entityType: "geographyDnsAnalyticsPerColo"
				}, {
					entityType: "geographyHttpAnalytics"
				}, {
					entityType: "h2Prioritization"
				}, {
					entityType: "firstPartyFonts"
				}, {
					entityType: "imageResizing"
				}, {
					entityType: "rateLimitingAnalytics"
				}, {
					entityType: "rulesets"
				}, {
					entityType: "rumRule"
				}, {
					entityType: "rumRuleset"
				}, {
					entityType: "rumSiteTag"
				}, {
					entityType: "rumRedirectToOnboarding"
				}, {
					entityType: "rumSiteInfo"
				}, {
					entityType: "rumSiteInfoList"
				}, {
					entityType: "rumSiteInfoTagList"
				}, {
					entityType: "rumSiteInfoZoneList"
				}, {
					entityType: "rumFeature"
				}, {
					entityType: "performanceHttpAnalytics"
				}, {
					entityType: "csamScanner"
				}, {
					entityType: "alwaysOnline"
				}, {
					entityType: "coveoCategoryResults"
				}, {
					entityType: "phoneSupportTwoFactor"
				}, {
					entityType: "supportOpenTickets"
				}, {
					entityType: "knownIssueTickets"
				}, {
					entityType: "ticket"
				}, {
					entityType: "phoneSupportOTP"
				}, {
					entityType: "helperbotDiagnostics"
				}, {
					entityType: "chinaNetwork"
				}, {
					entityType: "automaticPlatformOptimization"
				}, {
					entityType: "pageShieldScript"
				}, {
					entityType: "pageShieldScripts",
					to: "pageShieldScript"
				}, {
					entityType: "pageShieldConnection"
				}, {
					entityType: "pageShieldConnections",
					to: "pageShieldConnection"
				}, {
					entityType: "pageShieldPolicy"
				}, {
					entityType: "pageShieldPolicies",
					to: "pageShieldPolicy"
				}, {
					entityType: "securityHttpAnalytics"
				}, {
					entityType: "speedTesting"
				}, {
					entityType: "webhook"
				}, {
					entityType: "webhooks",
					to: "webhook"
				}, {
					entityType: r.D.route
				}, {
					entityType: r.D.routes,
					to: r.D.route
				}, {
					entityType: "domainGroup"
				}, {
					entityType: "domainGroups",
					to: "domainGroup"
				}, {
					entityType: "domainGroupsAllDomain"
				}, {
					entityType: "domainGroupManagerZones",
					to: "zone"
				}, {
					entityType: "domainGroupFormZones",
					to: "zone"
				}, {
					entityType: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplicationVersions",
					to: "HTTPApplicationVersion"
				}, {
					entityType: "HTTPApplication",
					nestedProps: {
						versions: "HTTPApplicationVersions"
					}
				}, {
					entityType: "HTTPApplications",
					to: "HTTPApplication"
				}, {
					entityType: "HTTPApplicationConvertedId"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "HTTPApplicationsRuleset"
				}, {
					entityType: "HTTPApplicationsRule"
				}, {
					entityType: "inviteMembersSearchZones",
					to: "zone"
				}, {
					entityType: "inviteMembersZones",
					to: "zone"
				}, {
					entityType: "waitingRoom"
				}, {
					entityType: "waitingRooms",
					to: "waitingRoom"
				}, {
					entityType: "waitingRoomEvent"
				}, {
					entityType: "waitingRoomEvents",
					to: "waitingRoomEvent"
				}, {
					entityType: "zoneVersion"
				}, {
					entityType: "zoneVersionCompare"
				}, {
					entityType: "zoneVersions",
					to: "zoneVersion"
				}, {
					entityType: "zoneApplication",
					nestedProps: {
						versions: "zoneVersions"
					}
				}, {
					entityType: "zoneApplications",
					to: "zoneApplication"
				}, {
					entityType: "WAFMigrationStatus"
				}, {
					entityType: "environments"
				}, {
					entityType: "tenants"
				}, {
					entityType: "accountTypes"
				}, {
					entityType: "permissionGroups"
				}, {
					entityType: "zoneLevelAccessPolicy"
				}, {
					entityType: "zoneLevelAccessPolicies",
					to: "zoneLevelAccessPolicy"
				}, {
					entityType: "oAuthConsentApp"
				}, {
					entityType: "oAuthConsentApps",
					to: "oAuthConsentApp"
				}, {
					entityType: "wafPackages"
				}, {
					entityType: "wafPackageGroup"
				}, {
					entityType: "wafPackageGroups",
					to: "wafPackageGroup"
				}, {
					entityType: "wafRule"
				}, {
					entityType: "wafRules",
					to: "wafRule"
				}, {
					entityType: "web3Hostname"
				}, {
					entityType: "web3Hostnames",
					to: "web3Hostname"
				}, {
					entityType: "web3Blocklist"
				}, {
					entityType: "web3Blocklists",
					to: "web3Blocklist"
				}, {
					entityType: "zaraz"
				}, {
					entityType: c.BB.catchAllRule,
					idProp: "tag"
				}, {
					entityType: c.BB.rule,
					idProp: "tag"
				}, {
					entityType: c.BB.rules,
					to: c.BB.rule
				}, {
					entityType: c.BB.dstAddress,
					idProp: "tag"
				}, {
					entityType: c.BB.dstAddresses,
					to: c.BB.dstAddress
				}, {
					entityType: c.BB.dnsRecord,
					idProp: "tag"
				}, {
					entityType: c.BB.dnsRecords,
					to: c.BB.dnsRecord
				}, {
					entityType: c.BB.zone,
					idProp: "tag"
				}]),
				l = o => o.entities,
				E = (...o) => (0, d.P1)(u, l, ...o),
				t = (0, d.QB)(u)
		},
		"../react/app/redux/processActionMiddleware.js": function(V, v, n) {
			"use strict";
			var e = n("../react/app/redux/normalizer.js");
			const r = ".success",
				c = () => {
					const d = new Map,
						y = u => {
							const l = e.jQ.find(E => E.entityType === u);
							return l && (l.to ? l.to : l.entityType)
						},
						i = () => u => l => {
							if (l.type.endsWith(r)) {
								const E = l.type.substring(0, l.type.length - r.length),
									t = y(E),
									o = d.get(t);
								return u(o ? o(l) : l)
							}
							return u(l)
						};
					return i.on = (u, l) => {
						let E = d.get(u);
						d.set(u, t => l(E ? E(t) : t))
					}, i
				};
			v.Z = c()
		},
		"../react/app/redux/utils.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return c
				},
				_: function() {
					return r
				}
			});
			var e = n("../react/app/redux/makeAction.js");
			const r = d => (y, i, u) => (0, e.SC)(y, i, u, {
					hideErrorAlert: !0
				}).catch(d),
				c = d => y => {
					if (y.status === d) return y;
					throw y
				}
		},
		"../react/common/actionTypes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Cm: function() {
					return i
				},
				Cz: function() {
					return r
				},
				HI: function() {
					return u
				},
				Li: function() {
					return E
				},
				Ng: function() {
					return e
				},
				Np: function() {
					return c
				},
				Yc: function() {
					return o
				},
				gM: function() {
					return d
				},
				lV: function() {
					return y
				},
				s1: function() {
					return l
				}
			});
			const e = "NOTIFICATION_OPEN",
				r = "NOTIFICATION_CLOSE",
				c = "MODAL_OPEN",
				d = "MODAL_CLOSE",
				y = "TOGGLE_ON",
				i = "TOGGLE_OFF",
				u = "SET_ACTIVE",
				l = "CLEAR_ACTIVE",
				E = "UPDATE_ACCOUNT_ACCESS",
				t = "UPDATE_LANGUAGE_PREFERENCE";
			let o = function(s) {
				return s.APIKEY = "APIKEY_CAPTCHA_CHALLENGE", s.APITOKEN = "APITOKEN_CAPTCHA_CHALLENGE", s.BILLING_PRE_VERIFICATION = "BILLING_PRE_CC_VERIFICATION_CAPTCHA_CHALLENGE", s.DELETE_USER = "DELETE_USER_CAPTCHA_CHALLENGE", s.EMAIL_ROLLBACK = "EMAIL_ROLLBACK_CAPTCHA_CHALLENGE", s.FORGOT_PASS = "FORGOT_PASS_CAPTCHA_CHALLENGE", s.LOGIN = "LOGIN_CAPTCHA_CHALLENGE", s.ORIGIN_CA_KEY = "ORIGIN_CA_KEY_CHALLENGE", s.SIGNUP = "SIGNUP_CAPTCHA_CHALLENGE", s
			}({})
		},
		"../react/common/actions/membershipActions.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AX: function() {
					return s
				},
				YT: function() {
					return E
				},
				ct: function() {
					return u
				},
				d6: function() {
					return t
				},
				kt: function() {
					return o
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/common/constants/index.ts");

			function c(g) {
				for (var a = 1; a < arguments.length; a++) {
					var C = arguments[a] != null ? Object(arguments[a]) : {},
						p = Object.keys(C);
					typeof Object.getOwnPropertySymbols == "function" && p.push.apply(p, Object.getOwnPropertySymbols(C).filter(function(_) {
						return Object.getOwnPropertyDescriptor(C, _).enumerable
					})), p.forEach(function(_) {
						d(g, _, C[_])
					})
				}
				return g
			}

			function d(g, a, C) {
				return a = y(a), a in g ? Object.defineProperty(g, a, {
					value: C,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : g[a] = C, g
			}

			function y(g) {
				var a = i(g, "string");
				return typeof a == "symbol" ? a : String(a)
			}

			function i(g, a) {
				if (typeof g != "object" || g === null) return g;
				var C = g[Symbol.toPrimitive];
				if (C !== void 0) {
					var p = C.call(g, a || "default");
					if (typeof p != "object") return p;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (a === "string" ? String : Number)(g)
			}
			const u = g => {
					const a = g.payload.map(C => c({}, C, {
						membershipId: C.id,
						id: C.account.id
					}));
					return c({}, g, {
						payload: a
					})
				},
				l = g => {
					const a = u(g);
					return Array.isArray(a.payload) ? c({}, g, {
						payload: a.payload[0]
					}) : c({}, g, {
						payload: null
					})
				},
				E = (0, e.C)("memberships").get`/memberships?no-permissions=1`.on("success", u),
				t = (0, e.C)("memberships").delete`/memberships/${"id"}`,
				o = (...g) => ({
					type: r.UM.MEMBERSHIPS_ROOT_REQUESTED,
					entityType: "filteredMemberships",
					url: "/memberships?no-permissions=1",
					params: g
				}),
				s = (0, e.C)("membership").get`/memberships?no-permissions=1`.on("success", l)
		},
		"../react/common/actions/modalActions.ts": function(V, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				closeModal: function() {
					return d
				},
				openModal: function() {
					return c
				}
			});
			var e = n("../react/common/actionTypes.ts");
			const r = {
				replace: !0
			};

			function c(y, i, u = r) {
				return {
					type: e.Np,
					payload: {
						ModalComponent: y,
						props: i
					},
					options: u
				}
			}

			function d(y) {
				return {
					type: e.gM,
					payload: {
						ModalComponent: y
					}
				}
			}
		},
		"../react/common/actions/notificationsActions.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				IH: function() {
					return y
				},
				Vp: function() {
					return i
				},
				ZK: function() {
					return l
				},
				um: function() {
					return u
				},
				vU: function() {
					return E
				}
			});
			var e = n("../react/common/actionTypes.ts");

			function r(t) {
				return {
					type: e.Ng,
					notification: t
				}
			}

			function c(t) {
				return {
					type: e.Cz,
					notificationId: t
				}
			}
			let d = 0;

			function y(t, o, s = {}) {
				return s = s || {},
					function(g) {
						let a = d++,
							C = {
								id: a,
								type: t,
								message: o,
								delay: s.delay,
								persist: s.persist === void 0 ? !1 : s.persist,
								closable: s.closable === void 0 ? !0 : s.closable,
								onClose() {
									g(c(a)), s.onClose && s.onClose.apply(null, arguments)
								}
							};
						g(r(C))
					}
			}

			function i(t, o) {
				return y("success", t, o)
			}

			function u(t, o) {
				return y("info", t, o)
			}

			function l(t, o) {
				return y("warning", t, o)
			}

			function E(t, o) {
				return y("error", t, o)
			}
		},
		"../react/common/actions/userActions.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				BT: function() {
					return u
				},
				Ut: function() {
					return _
				},
				V_: function() {
					return j
				},
				Y9: function() {
					return C
				},
				Z0: function() {
					return f
				},
				mp: function() {
					return p
				},
				r3: function() {
					return L
				},
				x0: function() {
					return t
				}
			});
			var e = n("../react/app/redux/makeActionCreator.ts"),
				r = n("../react/app/redux/utils.ts");

			function c(S) {
				for (var h = 1; h < arguments.length; h++) {
					var w = arguments[h] != null ? Object(arguments[h]) : {},
						$ = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(w).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(w, Y).enumerable
					})), $.forEach(function(Y) {
						d(S, Y, w[Y])
					})
				}
				return S
			}

			function d(S, h, w) {
				return h = y(h), h in S ? Object.defineProperty(S, h, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = w, S
			}

			function y(S) {
				var h = i(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function i(S, h) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var $ = w.call(S, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			const u = (0, e.C)("user").get`/user`,
				l = (0, e.C)("user").patch`/user`,
				E = (0, e.C)("user").post`/user/create`,
				t = (0, e.C)("user").put`/user/password`,
				o = (0, e.C)("user").post`/user/two_factor_authentication`,
				s = (0, e.C)("user").put`/user/two_factor_authentication`,
				g = (0, e.C)("user").delete`/user/two_factor_authentication`,
				a = (0, e.C)("user").put`/user/email`;

			function C(...S) {
				return a(...S)
			}
			const p = (0, e.C)("userCommPreferences").get`/user/communication_preferences`,
				_ = (0, e.C)("userCommPreferences").get`/user/communication_preferences`.apiFetch((0, r._)(S => c({}, S, {
					body: c({}, S.body, {
						result: {}
					})
				}))),
				j = (0, e.C)("userCommPreferences").put`/user/communication_preferences`,
				L = (0, e.C)("userDetails").get`/user/details`,
				f = (0, e.C)("userDetails").get`/user/details/two-factor-recovery`
		},
		"../react/common/components/Apple/utils.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				PP: function() {
					return o
				},
				RJ: function() {
					return u
				},
				tz: function() {
					return s
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				d = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				y = n("../../../../node_modules/@cloudflare/style-const/es/index.js");
			const i = () => l.test(window.location.pathname) || c.E.has(d.Qq),
				u = () => c.E.get(d.Qq),
				l = /^\/login\/apple(\/)?/,
				t = [l, /^\/[a-zA-Z0-9]+\/domains\/register\/checkout$/, /^\/$/, /^\/email-verification-info(\/)?/],
				o = () => {
					let g = !1;
					t.forEach(C => {
						if (C.test(window.location.pathname)) {
							g = !0;
							return
						}
					});
					const a = i() && g;
					return a && (0, y.C8)(y.LF.OFF), a
				},
				s = g => {
					g && r().sendEvent("launch icloud registrar onboarding", {
						category: "icloud registrar",
						method: "iCloud SSO"
					});
					let a = "https://oidc.iam.cfapi.net/api/v1/sso/init?client=apple&env=production";
					g && (a = a + `&jwt=${g}`), window.location.href = a
				}
		},
		"../react/common/components/EmptyPage.jsx": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/prop-types/index.js"),
				d = n.n(c),
				y = n("../../../../node_modules/@cloudflare/component-box/es/index.js");
			const i = ({
				children: u
			}) => r().createElement(y.xu, {
				height: 411
			}, u);
			i.propTypes = {
				children: d().node
			}, v.Z = i
		},
		"../react/common/components/ModalManager.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				ZP: function() {
					return s
				},
				dd: function() {
					return t
				},
				vR: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-redux/react-redux");
			const d = g => g.application.modals;
			var y = n("../react/common/actions/modalActions.ts");

			function i() {
				return i = Object.assign ? Object.assign.bind() : function(g) {
					for (var a = 1; a < arguments.length; a++) {
						var C = arguments[a];
						for (var p in C) Object.prototype.hasOwnProperty.call(C, p) && (g[p] = C[p])
					}
					return g
				}, i.apply(this, arguments)
			}
			const u = r().createContext(null);
			class l extends r().Component {
				render() {
					const {
						modals: a,
						closeModal: C
					} = this.props;
					return r().createElement(r().Fragment, null, a.map(({
						ModalComponent: p,
						props: _ = {},
						id: j
					}) => {
						const L = () => {
							typeof _.onClose == "function" && _.onClose(), C(p)
						};
						return r().createElement(u.Provider, {
							key: j,
							value: {
								closeModal: L
							}
						}, r().createElement(p, i({}, _, {
							isOpen: !0,
							closeModal: L
						})))
					}))
				}
			}

			function E() {
				const g = r().useContext(u);
				if (!g) throw new Error("useModalContext must be used within a ModalContext");
				return g
			}

			function t() {
				const g = (0, c.useDispatch)();
				return {
					openModal: (0, e.useCallback)(function(...a) {
						return g(y.openModal(...a))
					}, [g]),
					closeModal: (0, e.useCallback)(function(...a) {
						return g(y.closeModal(...a))
					}, [g])
				}
			}
			var s = (0, c.connect)(g => ({
				modals: d(g)
			}), y)(l)
		},
		"../react/common/components/SAMLSubmit/SAMLSubmit.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return _
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/react-router-dom/react-router-dom"),
				d = n("../react/common/actions/notificationsActions.ts"),
				y = n("../react/app/redux/index.ts"),
				i = n("../react/common/hooks/useGate.ts"),
				u = n("../react/common/selectors/languagePreferenceSelector.ts"),
				l = n("../../../../node_modules/@cloudflare/component-loading/es/index.js"),
				E = n("../../../../node_modules/@cloudflare/elements/es/index.js"),
				t = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA5MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYxLjAyODggMzkuNDM4NEw2MS40ODU2IDM3Ljg3MzVDNjIuMDI5NCAzNi4wMTE4IDYxLjgyNzEgMzQuMjkxIDYwLjkxNDIgMzMuMDI2N0M2MC4wNzUzIDMxLjg2MjIgNTguNjc2NiAzMS4xNzY1IDU2Ljk3NzcgMzEuMDk2N0wyNC44MDE1IDMwLjY5MjdDMjQuNzAxNyAzMC42OTA2IDI0LjYwMzkgMzAuNjY1MyAyNC41MTU3IDMwLjYxODhDMjQuNDI3NiAzMC41NzI0IDI0LjM1MTYgMzAuNTA2MSAyNC4yOTQgMzAuNDI1M0MyNC4yMzgyIDMwLjM0MTQgMjQuMjAzIDMwLjI0NTcgMjQuMTkxIDMwLjE0NTlDMjQuMTc5MSAzMC4wNDYxIDI0LjE5MDcgMjkuOTQ0OSAyNC4yMjUxIDI5Ljg1MDNDMjQuMjgwNSAyOS42OTQgMjQuMzgwOCAyOS41NTcyIDI0LjUxMzYgMjkuNDU2N0MyNC42NDY0IDI5LjM1NjIgMjQuODA2IDI5LjI5NjQgMjQuOTcyNyAyOS4yODQ2TDU3LjQ0NzYgMjguODc2M0M2MS4yOTkyIDI4LjcwMDkgNjUuNDY5OSAyNS42MDIyIDY2LjkzMDIgMjEuODIzNUw2OC43ODI4IDE3LjAyNjJDNjguODMyNCAxNi44OTYgNjguODU3IDE2Ljc1NzggNjguODU1MyAxNi42MTg2QzY4Ljg1NTUgMTYuNTQyMyA2OC44NDc3IDE2LjQ2NjIgNjguODMyMSAxNi4zOTE1QzY2LjcyODYgNy4wMTExNyA1OC4yODg3IDAgNDguMTk2MyAwQzM4Ljg5NzEgMCAzMC45OTk1IDUuOTUwMjIgMjguMTcxNyAxNC4yMjA3QzI2LjI1NzggMTIuNzk2NiAyMy44NzE3IDEyLjE0MTkgMjEuNDkxNSAxMi4zODc4QzE3LjAzMDEgMTIuODI3IDEzLjQ0MzEgMTYuMzg3OSAxMy4wMDE2IDIwLjgxMTRDMTIuODg3OSAyMS45MTU5IDEyLjk3MDggMjMuMDMxNyAxMy4yNDY3IDI0LjEwNzhDNS45NTU5NiAyNC4zMTg0IDAuMTExMDg0IDMwLjIzNzcgMC4xMTEwODQgMzcuNTE0MUMwLjExMTc0MiAzOC4xNjM3IDAuMTYwMjEgMzguODEyMyAwLjI1NjEgMzkuNDU0OUMwLjI3Njg2NiAzOS42MDM1IDAuMzUwOTkyIDM5LjczOTYgMC40NjQ4NyAzOS44Mzg0QzAuNTc4NzQ4IDM5LjkzNzIgMC43MjQ3MzkgMzkuOTkxOSAwLjg3NjA0NCAzOS45OTI2TDYwLjI3OSAzOS45OTk3QzYwLjI4NDYgNDAuMDAwMSA2MC4yOTAxIDQwLjAwMDEgNjAuMjk1NyAzOS45OTk3QzYwLjQ2MjMgMzkuOTk2IDYwLjYyMzQgMzkuOTM5NCA2MC43NTUzIDM5LjgzODRDNjAuODg3MiAzOS43Mzc0IDYwLjk4MyAzOS41OTcyIDYxLjAyODggMzkuNDM4NFoiIGZpbGw9IiNGNjgyMUYiLz4KPHBhdGggZD0iTTcxLjc0OTEgMTcuMzc0MUM3MS40NTA0IDE3LjM3NDEgNzEuMTUzMyAxNy4zODE2IDcwLjg1OCAxNy4zOTY0QzcwLjgxMDQgMTcuMzk5OCA3MC43NjM1IDE3LjQxIDcwLjcxODggMTcuNDI2NkM3MC42NDEyIDE3LjQ1MjkgNzAuNTcxMiAxNy40OTc0IDcwLjUxNDcgMTcuNTU2NEM3MC40NTgzIDE3LjYxNTMgNzAuNDE3MSAxNy42ODcgNzAuMzk0NyAxNy43NjUyTDY5LjEyOTQgMjIuMDk3NEM2OC41ODU2IDIzLjk1OTEgNjguNzg3OSAyNS42Nzg0IDY5LjcgMjYuOTQyOEM3MC41Mzk3IDI4LjEwODcgNzEuOTM4MyAyOC43OTMgNzMuNjM3MiAyOC44NzI4TDgwLjQ5NTggMjkuMjgxMUM4MC41OTIzIDI5LjI4NDIgODAuNjg2OSAyOS4zMDk2IDgwLjc3MTggMjkuMzU1M0M4MC44NTY4IDI5LjQwMSA4MC45Mjk4IDI5LjQ2NTYgODAuOTg1MiAyOS41NDQxQzgxLjA0MjEgMjkuNjI4MiA4MS4wNzgzIDI5LjcyNDQgODEuMDkwOSAyOS44MjQ5QzgxLjEwMzUgMjkuOTI1NCA4MS4wOTIxIDMwLjAyNzQgODEuMDU3NyAzMC4xMjI4QzgxLjAwMjMgMzAuMjc4OCA4MC45MDIyIDMwLjQxNTQgODAuNzY5NyAzMC41MTU5QzgwLjYzNzIgMzAuNjE2MyA4MC40NzggMzAuNjc2MyA4MC4zMTE2IDMwLjY4ODVMNzMuMTg0IDMxLjA5NjdDNjkuMzE1IDMxLjI3MzYgNjUuMTQ0MyAzNC4zNzA5IDYzLjY4NTUgMzguMTQ5Nkw2My4xNzA3IDM5LjQ4MzdDNjMuMTQ5MSAzOS41Mzk0IDYzLjE0MTMgMzkuNTk5NCA2My4xNDc3IDM5LjY1ODdDNjMuMTU0MSAzOS43MTgxIDYzLjE3NDcgMzkuNzc1IDYzLjIwNzcgMzkuODI0OUM2My4yNDA3IDM5Ljg3NDkgNjMuMjg1MiAzOS45MTYzIDYzLjMzNzUgMzkuOTQ1OEM2My4zODk4IDM5Ljk3NTMgNjMuNDQ4NCAzOS45OTIxIDYzLjUwODYgMzkuOTk0OEM2My41MTUxIDM5Ljk5NDggNjMuNTIwOSAzOS45OTQ4IDYzLjUyNzQgMzkuOTk0OEg4OC4wNDg5Qzg4LjE5MTQgMzkuOTk1OSA4OC4zMzAzIDM5Ljk1MDcgODguNDQ0NSAzOS44NjYzQzg4LjU1ODcgMzkuNzgxOCA4OC42NDE4IDM5LjY2MjUgODguNjgxMiAzOS41MjY4Qzg5LjExNjIgMzcuOTkgODkuMzM1OCAzNi40MDEyIDg5LjMzMzggMzQuODA1Qzg5LjMzNDUgMjUuMTc4OSA4MS40NjA4IDE3LjM3NDEgNzEuNzQ5MSAxNy4zNzQxWiIgZmlsbD0iI0ZCQUQ0MSIvPgo8L3N2Zz4K",
				o = n("../../../../node_modules/@cloudflare/component-page/es/index.js"),
				s = n("../node_modules/@cloudflare/component-button/es/index.js"),
				a = ({
					idpInitiated: j,
					spInitiated: L,
					title: f,
					text: S,
					error: h,
					buttonText: w,
					loading: $ = !0,
					onContinue: Y
				}) => r().createElement(E.ZC, {
					boxShadow: j ? "rgba(0, 0, 0, 0.10) 2px 4px 20px 0px" : void 0,
					margin: "auto",
					width: "fit-content",
					height: L ? "100vh" : "initial",
					alignContent: L ? "center" : "initial",
					"data-test-id": "saml-redirect-loader"
				}, r().createElement(E.ZC, {
					height: "348.5px",
					padding: "30px"
				}, f && r().createElement(E.ZC, {
					textAlign: "center"
				}, r().createElement(o.X6, {
					fontSize: 4
				}, f)), r().createElement(E.ZC, {
					display: "flex",
					justifyContent: "center",
					marginTop: "3rem"
				}, r().createElement(E.ZC, {
					alignContent: "center"
				}, r().createElement(E.Ei, {
					width: "128px",
					src: t
				}))), r().createElement(E.ZC, {
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					textAlign: "center",
					maxWidth: h || j ? "450px" : "auto",
					margin: "auto",
					marginTop: "2rem"
				}, j && r().createElement(E.P, null, S), !h && S && L && r().createElement(E.ZC, {
					marginTop: "1.2rem"
				}, r().createElement(o.X6, {
					fontSize: 4
				}, S)), h && r().createElement(E.P, null, h), $ && r().createElement(E.ZC, {
					mt: "2rem"
				}, r().createElement(l.g, {
					size: "2x"
				})), Y && r().createElement(E.ZC, {
					marginTop: "1.5rem"
				}, r().createElement(s.zx, {
					type: "primary",
					onClick: Y
				}, w))))),
				C = n("../react/utils/translator.tsx"),
				_ = ({
					userIsAuthed: j,
					idpInitiated: L = !1,
					spInitiated: f = !1,
					samlAuthBegin: S
				}) => {
					const [h, w] = (0, e.useState)(!1), [$, Y] = (0, e.useState)(!1), re = !!(0, i.Z)("rm-18295-saml-salesforce-integration"), {
						t: te
					} = (0, C.QT)(), [ee, J] = (0, e.useState)(""), [k, z] = (0, e.useState)(null), se = (0, y.UM)(), B = (0, y.p4)(u.r), ue = (0, e.useRef)(null), X = P => {
						S && S(P), w(P)
					};
					(0, e.useEffect)(() => {
						const P = async Z => {
							const Q = Z ? `/api/v4/sso/saml?id=${Z}&locale=${B}` : `/api/v4/sso/saml?locale=${B}`,
								ce = await fetch(Q);
							try {
								if (ce.status === 200) {
									const ne = (await ce.json()).result;
									if (ne && ne.assertion_consumer_service_url && ne.saml_response) z({
										acsUrl: ne.assertion_consumer_service_url,
										saml: ne.saml_response
									});
									else throw new Error(`${Q} produced unexpected content`)
								} else throw new Error(`${Q} produced bad response code:${ce.status}`)
							} catch (F) {
								const ne = "Failed completing Service Provider authentication";
								throw J(ne), se((0, d.vU)(ne)), new Error(ne + `: ${F.message}`)
							}
						};
						if (j && f) {
							const Z = sessionStorage.getItem("saml");
							Z && (X(!0), sessionStorage.removeItem("saml"), P(Z))
						}
						L && P()
					}, [j, L, f]), (0, e.useEffect)(() => {
						!k || ue.current && (ue.current.submit(), Y(!0))
					}, [k]);
					const G = h && f || L;
					return re ? r().createElement(r().Fragment, null, r().createElement("form", {
						ref: ue,
						method: "POST",
						action: k == null ? void 0 : k.acsUrl,
						target: "_blank"
					}, r().createElement("input", {
						type: "hidden",
						name: "SAMLResponse",
						value: k == null ? void 0 : k.saml
					})), G && r().createElement(a, {
						spInitiated: f,
						idpInitiated: L,
						text: te("login.help_center.in_progress.title"),
						error: ee && te("account.my_activities.sign_in.error"),
						loading: !ee
					}), $ && r().createElement(c.Route, null, r().createElement(c.Redirect, {
						to: {
							pathname: "/",
							state: {
								referrer: window.location.pathname
							}
						}
					}))) : null
				}
		},
		"../react/common/components/analytics/AnalyticsReport/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				BQ: function() {
					return t
				},
				Gn: function() {
					return l
				},
				JR: function() {
					return E
				},
				Wl: function() {
					return e
				},
				YX: function() {
					return i
				},
				ZI: function() {
					return y
				},
				if: function() {
					return r
				},
				q6: function() {
					return c
				},
				w_: function() {
					return d
				},
				zl: function() {
					return u
				}
			});
			const e = "YYYY.MM.DD-HHmm",
				r = "time-window",
				c = "date-from",
				d = "date-to",
				y = "from",
				i = "to",
				u = "all",
				l = {
					equals: "eq",
					notEquals: "neq",
					greaterThanOrEqual: "geq",
					greaterThan: "gt",
					lessThan: "lt",
					lessThanOrEqual: "leq",
					like: "like",
					notLike: "notlike",
					has: "has",
					notHas: "nothas",
					hasAll: "hasall",
					hasAny: "hasany",
					contains: "contains",
					startsWith: "starts",
					endsWith: "ends",
					notContains: "!contains",
					notStartsWith: "!starts",
					notEndsWith: "!ends",
					in: "in",
					notIn: "!in"
				};
			let E = function(o) {
					return o.ADD_FILTER = "Add filter", o.EDIT_FILTER = "Edit filter", o.REMOVE_FILTER = "Remove filter", o.CHANGE_TIME = "Change time window", o.FEED_PAGE_FORWARD = "Activity feed next page", o.FEED_PAGE_BACKWARD = "Activity feed previous page", o.FEED_EXPAND_EVENT = "Activity feed expand event", o.FEED_CLOSE_EVENT = "Activity feed close event", o.FEED_EXPAND_MATCHES = "Activity feed expand matches", o.OPEN_DOWNLOAD_MODAL = "Activity feed open download modal", o.CANCEL_DOWNLOAD_MODAL = "Activity feed cancel download modal", o.DOWNLOAD_FROM_DOWNLOAD_MODAL = "Activity feed download from modal", o.DOWNLOAD_FEED = "Activity feed download", o.CLICK_ADAPTIVE_SAMPLING = 'Click on "adaptive sampling"', o.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'Click on "Go to Log Explorer" in the description', o.CLICK_TO_LOG_EXPLORER_BANNER = 'Click on "Go to Log Explorer" in the banner"', o.CLICK_SWITCH_TO_RAW_LOGS = 'Click on "Switch to raw logs"', o.CLICK_SWITCH_TO_SAMPLED_LOGS = 'Click on "Switch back to sampled logs"', o
				}({}),
				t = function(o) {
					return o.TIMESERIES = "Timeseries Chart", o.DISTRIBUTION = "Source Distribution Chart", o.TOP_N = "Top N", o.FILTER_BAR = "Filter Bar", o.SCORES_DISTRIBUTIONS = "Scores Distributions", o.INSIGHTS = "Insights", o.RL_HISTOGRAM = "Rate Limit Histogram", o
				}({})
		},
		"../react/common/constants/billing/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Gq: function() {
					return d
				},
				g$: function() {
					return c
				},
				WX: function() {
					return e
				},
				E0: function() {
					return E
				},
				Hw: function() {
					return i
				},
				Ed: function() {
					return y
				},
				bi: function() {
					return r
				},
				Gs: function() {
					return a
				},
				hQ: function() {
					return u
				},
				SP: function() {
					return l
				}
			});
			let e = function(C) {
				return C.page_rules = "page_rules", C.automatic_platform_optimization = "automatic_platform_optimization", C
			}({});
			const r = "page_rules",
				c = "automatic_platform_optimization",
				d = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					volume_included: 1,
					ubb_frequency: 1,
					ubb_price: .1,
					ubb_unit: "gigabyte"
				},
				y = {
					address: "Address Line 1 NA",
					city: "City NA",
					state: "State NA",
					vat: " ",
					account_type: "-"
				},
				i = {
					currency: "USD",
					frequency: "monthly",
					requests_included: 5e5,
					ubb_price: .5,
					ubb_frequency: 5e5
				},
				u = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e4,
					ubb_frequency: 1e4,
					ubb_price: .05
				},
				l = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 0,
					ubb_frequency: 1e3,
					ubb_storage_price: 5,
					ubb_streaming_price: 1,
					ubb_unit: "minute"
				},
				E = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					ubb_unit: "image",
					ubb_delivery_price: 1,
					ubb_frequency_delivery: 1e5,
					ubb_storage_price: 5,
					ubb_storage_frequency: 1e5,
					ubb_transformations_frequency: 2e3,
					ubb_transformations_price: 1
				},
				t = new Set(["AZ", "CT", "DC", "HI", "IA", "IL", "OH", "NY", "PA", "SD", "TX", "WA", "WV"]),
				o = new Map([
					["RU", null],
					["US", t]
				]);
			var s = n("../react/common/constants/billing/tracking.ts"),
				g = n("../react/pages/zoneless-workers/constants.ts");
			const a = ["free", "lite", "pro", "pro_plus", "business", "enterprise"]
		},
		"../react/common/constants/billing/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				FP: function() {
					return e
				},
				Nl: function() {
					return y
				},
				SO: function() {
					return c
				},
				aA: function() {
					return r
				}
			});
			const e = {
					NOTIFICATION_CLICK: "Notification link click",
					CANCELED_SUBSCRIPTION: "Canceled subscription"
				},
				r = {
					NOTIFICATIONS: "notifications",
					SUBSCRIPTIONS: "subscriptions"
				},
				c = {
					BILLING: "billing"
				},
				d = {
					LINK: "link",
					EMAIL: "email",
					PHONE: "phone"
				},
				y = {
					BILLING_SYSTEM_UPGRADE: "Billing System Upgrade"
				}
		},
		"../react/common/constants/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return g
				},
				Dy: function() {
					return a
				},
				E_: function() {
					return i
				},
				Lv: function() {
					return C
				},
				S4: function() {
					return y
				},
				UM: function() {
					return t
				},
				Xf: function() {
					return E
				},
				Y1: function() {
					return u
				},
				p6: function() {
					return l
				},
				q0: function() {
					return d
				},
				sJ: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = "healthy",
				y = "degraded",
				i = "critical",
				u = "unknown",
				l = "not-monitored",
				E = r().from({
					FREE: "free",
					PRO: "pro",
					BIZ: "business",
					ENT: "enterprise"
				}),
				t = {
					ZONES_ROOT_REQUESTED: "zones_root_requested",
					ZONES_ACCOUNT_REQUESTED: "zones_account_requested",
					ZONES_HEADER_REQUESTED: "zones_header_requested",
					MEMBERSHIPS_ROOT_REQUESTED: "membership_root_requested",
					ACCOUNT_MEMBERS_REQUESTED: "account_members_requested"
				},
				o = {
					f: E.FREE,
					p: E.PRO,
					b: E.BIZ
				},
				s = "marketing-pt",
				g = () => {
					const p = c.Z.get(s);
					if (!!p) return o[p]
				},
				a = ["gov"],
				C = ["graphql_api_v2.enabled_network_analytics_magic_transit", "graphql_api_v2.enabled_network_analytics_spectrum", "graphql_api_v2.enabled_network_analytics_cdn"]
		},
		"../react/common/constants/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Dk: function() {
					return e.Dk
				},
				Dy: function() {
					return e.Dy
				},
				E0: function() {
					return r.E0
				},
				E_: function() {
					return e.E_
				},
				PLANS: function() {
					return e.Xf
				},
				S4: function() {
					return e.S4
				},
				UM: function() {
					return e.UM
				},
				WX: function() {
					return r.WX
				},
				Y1: function() {
					return e.Y1
				},
				bi: function() {
					return r.bi
				},
				g$: function() {
					return r.g$
				},
				p6: function() {
					return e.p6
				},
				q0: function() {
					return e.q0
				},
				sJ: function() {
					return e.sJ
				}
			});
			var e = n("../react/common/constants/constants.ts"),
				r = n("../react/common/constants/billing/index.ts")
		},
		"../react/common/hooks/suspenseHelpers.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				bt: function() {
					return u
				},
				nW: function() {
					return y
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/component-listener/es/index.js");
			const d = "suspenseComplete";

			function y() {
				(0, e.useEffect)(() => () => {
					window.dispatchEvent(new Event(d))
				}, [])
			}

			function i(l) {
				(0, c.OR)(d, () => {
					window.setTimeout(l, 0)
				}, {
					target: window
				})
			}

			function u(...l) {
				const [E, t] = l;
				r().useLayoutEffect(E, t), i(E)
			}
		},
		"../react/common/hooks/useCachedState.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				j: function() {
					return d
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");

			function d(y, {
				key: i,
				cache: u = c.E
			} = {}) {
				const l = i !== void 0 && u.get(i),
					[E, t] = (0, e.useState)(l || y);
				return [E, s => {
					t(g => (s instanceof Function && (s = s(g)), i !== void 0 && u.set(i, s), s))
				}]
			}
		},
		"../react/common/hooks/useGate.ts": function(V, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/gates-react-redux/dist/index.mjs");

			function r(c) {
				return (0, e.qf)(c)
			}
			v.Z = r
		},
		"../react/common/hooks/usePrevious.ts": function(V, v, n) {
			"use strict";
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e);

			function c(d) {
				const y = (0, e.useRef)(d);
				return (0, e.useEffect)(() => {
					y.current = d
				}, [d]), y.current
			}
			v.Z = c
		},
		"../react/common/middleware/sparrow/errors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Uh: function() {
					return y
				},
				ez: function() {
					return d
				},
				oV: function() {
					return i
				}
			});

			function e(u, l, E) {
				return l = r(l), l in u ? Object.defineProperty(u, l, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = E, u
			}

			function r(u) {
				var l = c(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(u, l) {
				if (typeof u != "object" || u === null) return u;
				var E = u[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class d extends Error {
				constructor(l, E) {
					super(E);
					e(this, "eventName", void 0), this.eventName = l, this.name = "SparrowValidationError"
				}
			}
			class y extends d {
				constructor(l) {
					super(l, `Event not allowed: "${l}"`);
					this.name = "SparrowEventNotAllowedError"
				}
			}
			class i extends d {
				constructor(l, E) {
					super(l, `Found invalid properties on event: "${l}"`);
					e(this, "invalidProperties", void 0), this.name = "SparrowInvalidPropertiesError", this.invalidProperties = E
				}
			}
		},
		"../react/common/selectors/accountSelectors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AC: function() {
					return Je
				},
				Au: function() {
					return le
				},
				B: function() {
					return Le
				},
				B3: function() {
					return Ye
				},
				BG: function() {
					return h
				},
				Bp: function() {
					return it
				},
				D0: function() {
					return j
				},
				DT: function() {
					return ne
				},
				EL: function() {
					return Z
				},
				GE: function() {
					return be
				},
				Ko: function() {
					return F
				},
				Kx: function() {
					return Y
				},
				Le: function() {
					return re
				},
				O4: function() {
					return Qe
				},
				Ou: function() {
					return X
				},
				Py: function() {
					return tt
				},
				QI: function() {
					return Fe
				},
				RO: function() {
					return x
				},
				T3: function() {
					return Xe
				},
				T8: function() {
					return S
				},
				UX: function() {
					return P
				},
				VP: function() {
					return Re
				},
				Xo: function() {
					return nt
				},
				Xu: function() {
					return se
				},
				Yi: function() {
					return ct
				},
				Yj: function() {
					return ce
				},
				Zu: function() {
					return Q
				},
				bC: function() {
					return A
				},
				f8: function() {
					return J
				},
				hN: function() {
					return $
				},
				hX: function() {
					return fe
				},
				iq: function() {
					return Ue
				},
				nE: function() {
					return w
				},
				oD: function() {
					return G
				},
				oI: function() {
					return ee
				},
				oJ: function() {
					return ge
				},
				uF: function() {
					return B
				},
				ut: function() {
					return Ke
				},
				vU: function() {
					return Be
				},
				wQ: function() {
					return oe
				}
			});
			var e = n("../../../../node_modules/lodash-es/memoize.js"),
				r = n("../../../../node_modules/lodash/get.js"),
				c = n.n(r),
				d = n("../../../../node_modules/seamless-immutable/seamless-immutable.production.min.js"),
				y = n.n(d),
				i = n("../../../../node_modules/reselect/lib/index.js"),
				u = n("../../../../node_modules/moment/moment.js"),
				l = n.n(u),
				E = n("../react/common/utils/formatDate.ts"),
				t = n("../react/app/redux/normalizer.js"),
				o = n("../react/common/selectors/userSelectors.ts"),
				s = n("../react/common/selectors/entitlementsSelectors.ts"),
				g = n("../react/app/components/DeepLink/selectors.ts");

			function a(U) {
				for (var ie = 1; ie < arguments.length; ie++) {
					var ye = arguments[ie] != null ? Object(arguments[ie]) : {},
						Te = Object.keys(ye);
					typeof Object.getOwnPropertySymbols == "function" && Te.push.apply(Te, Object.getOwnPropertySymbols(ye).filter(function(we) {
						return Object.getOwnPropertyDescriptor(ye, we).enumerable
					})), Te.forEach(function(we) {
						C(U, we, ye[we])
					})
				}
				return U
			}

			function C(U, ie, ye) {
				return ie = p(ie), ie in U ? Object.defineProperty(U, ie, {
					value: ye,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : U[ie] = ye, U
			}

			function p(U) {
				var ie = _(U, "string");
				return typeof ie == "symbol" ? ie : String(ie)
			}

			function _(U, ie) {
				if (typeof U != "object" || U === null) return U;
				var ye = U[Symbol.toPrimitive];
				if (ye !== void 0) {
					var Te = ye.call(U, ie || "default");
					if (typeof Te != "object") return Te;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ie === "string" ? String : Number)(U)
			}
			const j = U => {
					const ie = B(U);
					return ie == null ? void 0 : ie.account
				},
				L = U => {
					const ie = (0, o.PR)(U);
					if (ie) {
						const ye = ie.id;
						return U.accountAccess[ye] || {}
					}
					return {}
				},
				f = U => U.accountsDetailed,
				S = (0, t.P1)("accountsDetailed", f),
				h = U => U.memberships,
				w = (0, i.P1)((0, t.P1)("memberships", h), g.U, (U, ie) => !!ie && !!U ? U.filter(ye => ie.includes(ye.id)) : U),
				$ = U => U.accountFlags && U.accountFlags.data,
				Y = U => U.accountFlags,
				re = (U, ie, ye) => {
					const Te = $(U);
					return !Te || !Te[ie] ? null : Te[ie][ye]
				},
				te = U => U.accountFlags.isRequesting,
				ee = (U, ...ie) => c()(U, ["accountFlagsChanges", "data", ...ie]),
				J = U => U.accountFlagsChanges.isRequesting,
				k = (0, i.P1)($, Y, (U, ie) => ({
					data: U,
					meta: ie
				})),
				z = (U, ie, ye) => !!(isEnterpriseSSEnabledSelector(U) && re(U, ie, ye)),
				se = U => U.membership,
				B = (0, t.P1)("membership", se),
				ue = (0, i.P1)(B, se, (U, ie) => ({
					data: U,
					meta: ie
				})),
				X = U => {
					const {
						roles: ie = []
					} = B(U) || {};
					return Boolean(ie.find(ye => ye === "Super Administrator - All Privileges" || ye === "Billing"))
				},
				G = U => {
					const ie = L(U),
						ye = Ge.getMemberships(U) ? y().asMutable(Ge.getMemberships(U)) : [];
					if (!!ye) return y().from(ye.map(Te => a({}, Te, {
						lastSeen: ie[Te.account.id] ? ie[Te.account.id].lastSeen : null
					})).sort((Te, we) => Te.lastSeen && we.lastSeen ? we.lastSeen - Te.lastSeen : 0))
				},
				P = U => U.filteredMemberships,
				Z = (0, t.P1)("filteredMemberships", P),
				Q = (0, i.P1)(B, U => U == null ? void 0 : U.permissions),
				ce = (0, i.P1)(Q, U => (0, e.Z)(ie => {
					var ye;
					return (ye = U == null ? void 0 : U[ie]) !== null && ye !== void 0 ? ye : {
						read: !1,
						edit: !1
					}
				})),
				F = (0, i.P1)(B, U => U == null ? void 0 : U.policies),
				ne = (U, ie, ye) => {
					let Te = Ge.getMembership(U);
					if (!Te) {
						const we = Ge.getMemberships(U);
						if (!we || !ie) return !1;
						Te = we.find(ze => ze.account.id === ie)
					}
					if (!Te || !ye) return !1;
					try {
						return ye(Te.permissions)
					} catch {
						return !1
					}
				},
				me = U => {
					var ie, ye;
					return (ie = (ye = j(U)) === null || ye === void 0 ? void 0 : ye.meta.has_pro_zones) !== null && ie !== void 0 ? ie : !1
				},
				M = U => {
					var ie, ye;
					return (ie = (ye = j(U)) === null || ye === void 0 ? void 0 : ye.meta.has_business_zones) !== null && ie !== void 0 ? ie : !1
				},
				A = U => M(U) || me(U),
				R = (U, ie) => {
					const ye = W(U, ie);
					return !!ye && !!ye.enabled
				},
				W = (U, ie) => {
					const ye = Ge.getMembership(U),
						Te = ye && ye.account;
					return Te && Te.legacy_flags && Te.legacy_flags[ie]
				},
				oe = U => R(U, "custom_pages"),
				ve = U => !!U && U["webhooks.webhooks.enabled"],
				De = U => re(U, "bots", "enabled"),
				Ie = U => re(U, "billing", "annual_subscriptions_enable"),
				x = U => U ? Boolean(re(U, "ConstellationAI", "v2_ui")) : !1,
				fe = U => U ? Boolean(re(U, "ConstellationAI", "ai-emergency-waitlist")) : !1,
				Le = U => U ? Boolean(re(U, "AIgateway", "enabled")) : !1,
				xe = U => W(U, "enterprise_zone_quota"),
				je = U => {
					const ie = xe(U);
					return !ie || !ie.available ? -1 : ie.available
				},
				Ue = U => U.accountMembers,
				Ye = (0, t.P1)("accountMembers", Ue),
				Qe = U => U.accountMember && U.accountMember.isRequesting,
				ot = U => U.accountRoles,
				Je = (0, t.P1)("accountRoles", ot),
				tt = (U, ie) => {
					const ye = Ge.getMemberships(U),
						Te = ye && ye.find(qe => qe.account.id === ie);
					if (Te) return Te.account.name.replace(" Account", " account");
					const we = Ge.getMembership(U),
						ze = we && we.account;
					return ze && ze.id === ie ? ze.name : null
				},
				Ke = (U, ie) => {
					const ye = Ge.getMemberships(U),
						Te = ye && ye.find(qe => qe.account.id === ie);
					if (Te) return Te.account.settings.access_approval_expiry;
					const we = Ge.getMembership(U),
						ze = we && we.account;
					return ze && ze.id === ie ? ze.settings.access_approval_expiry : null
				},
				nt = (U, ie) => {
					const ye = Ke(U, ie);
					return ye ? l().utc(ye).isAfter() : !1
				},
				Xe = (U, ie, ye) => {
					const Te = Ke(U, ie);
					let we = Te ? l().utc(Te) : null;
					return !we || !we.isAfter() ? "" : we && we.year() === 3e3 ? ye("account.access_approval.card_expiration_forever") : ye("account.access_approval.card_expiration_text", {
						expiryTimestamp: we.local().format(E.U.DateTime)
					})
				},
				ge = U => U && U.member && U.member.edit,
				le = (U, ie) => {
					const ye = Ge.getMembership(U),
						Te = ye && ye.account;
					return Te ? Te.id !== ie : !1
				},
				he = U => U.dpa,
				D = (0, t.P1)("dpa", he),
				H = U => U.webhook,
				Ee = U => U.webhooks,
				Me = (0, t.P1)("webhook", Ee),
				Re = U => U.accountLegoContract,
				ke = (0, t.P1)("accountLegoContract", Re),
				Fe = U => {
					const ie = ke(U);
					return (ie == null ? void 0 : ie.lego_state) ? ie.lego_state : ""
				},
				Ne = U => Fe(U) === "signed",
				be = U => Re(U).isRequesting,
				Be = U => {
					const ie = ke(U);
					return ie && ie.subscription_type ? ie.subscription_type : ""
				},
				Ze = U => Be(U) !== "",
				Ge = {
					getMembership: B,
					getMemberships: w,
					getFilteredMemberships: Z,
					getAccountMembers: Ye,
					getAccountRoles: Je
				},
				it = U => U.accountSingle,
				ct = (0, t.P1)("accountSingle", it)
		},
		"../react/common/selectors/entitlementsSelectors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				$f: function() {
					return a
				},
				AD: function() {
					return y
				},
				BF: function() {
					return g
				},
				Bs: function() {
					return f
				},
				Ci: function() {
					return ne
				},
				E6: function() {
					return s
				},
				Hq: function() {
					return De
				},
				Ms: function() {
					return w
				},
				Q2: function() {
					return i
				},
				Td: function() {
					return j
				},
				Z: function() {
					return A
				},
				a: function() {
					return L
				},
				a5: function() {
					return W
				},
				du: function() {
					return l
				},
				ec: function() {
					return z
				},
				f: function() {
					return ve
				},
				hL: function() {
					return R
				},
				ji: function() {
					return me
				},
				jo: function() {
					return $
				},
				k4: function() {
					return oe
				},
				lI: function() {
					return d
				},
				p1: function() {
					return p
				},
				pK: function() {
					return Ie
				},
				pf: function() {
					return t
				},
				qR: function() {
					return _
				},
				rV: function() {
					return u
				},
				u1: function() {
					return E
				},
				w4: function() {
					return o
				},
				yD: function() {
					return M
				}
			});
			var e = n("../react/utils/url.ts");

			function r(x, fe) {
				return x && x[fe]
			}
			const c = x => !d(x).isRequesting;

			function d(x) {
				return x.entitlements.zone
			}

			function y(x) {
				return d(x).data
			}
			const i = x => {
				var fe, Le;
				return ((fe = d(x).paginationData) === null || fe === void 0 || (Le = fe.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function u(x, fe) {
				const Le = y(x);
				return Le ? r(Le, fe) : void 0
			}
			const l = (x, fe) => u(x, fe) === !0;

			function E(x) {
				return x.entitlements.account
			}

			function t(x) {
				return E(x).data
			}
			const o = x => {
				var fe, Le;
				return ((fe = E(x).paginationData) === null || fe === void 0 || (Le = fe.options) === null || Le === void 0 ? void 0 : Le.editedDate) || {}
			};

			function s(x) {
				return !E(x).isRequesting
			}

			function g(x, fe) {
				const Le = t(x);
				return Le ? r(Le, fe) : void 0
			}

			function a(x, fe) {
				return g(x, fe) === !0
			}

			function C(x, fe) {
				return fe.every(Le => a(x, Le))
			}

			function p(x) {
				return a(x, "contract.customer_enabled")
			}

			function _(x) {
				return a(x, "contract.self_service_allowed")
			}

			function j(x) {
				return a(x, "billing.partners_managed")
			}
			const L = x => p(x) && _(x),
				f = x => a(x, "enterprise.ecp_allowed");

			function S(x) {
				return h(x) || a(x, "argo.allow_smart_routing") || a(x, "argo.allow_tiered_caching") || a(x, "rate_limiting.enabled") || a(x, "ctm.enabled") || a(x, "workers.enabled") || a(x, "workers.kv_store.enabled") || a(x, "stream.enabled")
			}
			const h = x => l(x, "argo.allow_smart_routing") || l(x, "argo.allow_tiered_caching"),
				w = x => a(x, "zone.cname_setup_allowed") || a(x, "zone.partial_setup_allowed") || l(x, "zone.partial_setup_allowed"),
				$ = x => a(x, "argo.allow_smart_routing") || l(x, "argo.allow_smart_routing"),
				Y = x => a(x, "argo.allow_tiered_caching") || l(x, "argo.allow_tiered_caching"),
				re = x => $(x) || Y(x),
				te = x => a(x, "ctm.enabled"),
				ee = x => {
					const fe = g(x, "ctm.load_balancers");
					return typeof fe == "number" ? fe : 0
				},
				J = x => {
					const fe = g(x, "ctm.pools");
					return typeof fe == "number" ? fe : 0
				},
				k = x => {
					const fe = g(x, "ctm.origins");
					return typeof fe == "number" ? fe : 0
				},
				z = x => a(x, "workers.enabled"),
				se = x => a(x, "stream.enabled"),
				B = x => {
					const fe = g(x, "access.users_allowed");
					return typeof fe == "number" ? fe : 0
				},
				ue = x => B(x) > 0,
				X = x => {
					const fe = u(x, "dedicated_certificates");
					return typeof fe == "number" ? fe : 0
				},
				G = x => X(x) > 0,
				P = x => {
					const fe = u(x, "rate_limiting.max_rules");
					return typeof fe == "number" ? fe : 0
				},
				Z = x => a(x, "rate_limiting.enabled"),
				Q = x => {
					const fe = u(x, "page_rules");
					return typeof fe == "number" ? fe : 0
				},
				ce = x => Q(x) > 0,
				F = x => {
					const fe = g(x, "dns_firewall.max_clusters_allowed");
					return typeof fe == "number" ? fe : 0
				},
				ne = x => F(x) > 0,
				me = x => l(x, "zone.advanced_certificate_manager") || a(x, "zone.advanced_certificate_manager"),
				M = x => u(x, "authoritative_dns.proxy_record_allowed") === !1 || g(x, "authoritative_dns.proxy_record_allowed") === !1,
				A = x => a(x, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				R = x => u(x, "authoritative_dns.outgoing_zone_transfers_allowed") === !0,
				W = x => {
					const fe = u(x, "authoritative_dns.min_record_ttl_allowed");
					return typeof fe == "number" && fe > 1 ? fe : 60
				},
				oe = x => a(x, "foundation_dns.advanced_nameservers_allowed") || l(x, "foundation_dns.advanced_nameservers_allowed"),
				ve = (x, fe) => ((0, e.el)(window.location.pathname) ? u : g)(x, fe),
				De = x => a(x, "authoritative_dns.multi_provider_allowed") || l(x, "authoritative_dns.multi_provider_allowed"),
				Ie = x => a(x, "secondary_dns.secondary_overrides") || l(x, "secondary_dns.secondary_overrides")
		},
		"../react/common/selectors/languagePreferenceSelector.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				r: function() {
					return d
				},
				v: function() {
					return y
				}
			});
			var e = n("../react/utils/i18n.ts"),
				r = n("../../../common/intl/intl-types/src/index.ts"),
				c = n("../../../../node_modules/@cloudflare/util-cache/es/index.js");
			const d = i => {
				const u = i.userCommPreferences.data;
				if (u == null ? void 0 : u["language-locale"]) return c.Z.set(e.ly, u["language-locale"]), u["language-locale"];
				{
					c.Z.has(e.ly) || c.Z.set(e.ly, e.ZW);
					const l = c.Z.get(e.ly);
					return y(l) ? l : e.ZW
				}
			};

			function y(i) {
				const u = Object.keys(r.Q).find(l => r.Q[l] === i);
				return !!i && typeof i == "string" && u != null && (0, e.S8)(!1, u)
			}
		},
		"../react/common/selectors/userSelectors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return y
				},
				BG: function() {
					return E
				},
				GP: function() {
					return a
				},
				GU: function() {
					return f
				},
				PR: function() {
					return c
				},
				h$: function() {
					return _
				},
				h8: function() {
					return t
				},
				kk: function() {
					return p
				},
				l8: function() {
					return u
				},
				mV: function() {
					return C
				},
				vW: function() {
					return i
				}
			});
			var e = n("../react/app/redux/normalizer.js");
			const r = S => S.user,
				c = (0, e.P1)("user", r),
				d = S => {
					var h;
					return (h = c(S)) === null || h === void 0 ? void 0 : h.email.endsWith("@cloudflare.com")
				},
				y = S => {
					var h;
					return !!((h = c(S)) === null || h === void 0 ? void 0 : h.id)
				},
				i = S => {
					const h = c(S);
					if (!!h) return h.first_name && h.last_name ? `${h.first_name} ${h.last_name}` : h.email
				},
				u = S => {
					const h = c(S);
					return h && h.has_enterprise_zones
				},
				l = S => S.userCommPreferences,
				E = (0, e.P1)("userCommPreferences", l),
				t = S => {
					const h = c(S);
					return h && h.email_verified
				},
				o = S => {
					const h = E(S);
					return h && h.preferences.marketing_communication
				},
				s = S => S.userDetails,
				g = (0, e.P1)("userDetails", s),
				a = S => {
					const h = g(S);
					return h && h["2FA-RECOVERY"] === "scheduled"
				},
				C = S => {
					const h = g(S);
					return h && h["2FA-RECOVERY"] === "interrupted"
				},
				p = S => {
					const h = g(S);
					return h == null ? void 0 : h["NEW-USER-EMAIL"]
				},
				_ = S => S.gates.assignments,
				j = (S, h) => S && S[h];

			function L(S, h) {
				const w = _(S);
				return w ? j(w, h) : void 0
			}
			const f = (S, h) => L(S, h) === !0
		},
		"../react/common/selectors/zoneSelectors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				$4: function() {
					return w
				},
				$t: function() {
					return nt
				},
				A4: function() {
					return p
				},
				Cu: function() {
					return _
				},
				DQ: function() {
					return oe
				},
				Ej: function() {
					return Y
				},
				FH: function() {
					return L
				},
				ID: function() {
					return Z
				},
				Ko: function() {
					return xe
				},
				Le: function() {
					return Ie
				},
				Ly: function() {
					return F
				},
				M3: function() {
					return ot
				},
				N8: function() {
					return Qe
				},
				NY: function() {
					return A
				},
				Ns: function() {
					return ce
				},
				Ox: function() {
					return le
				},
				P4: function() {
					return re
				},
				RO: function() {
					return G
				},
				SX: function() {
					return R
				},
				Tr: function() {
					return Le
				},
				U: function() {
					return j
				},
				Ug: function() {
					return S
				},
				V6: function() {
					return Je
				},
				WR: function() {
					return he
				},
				Xg: function() {
					return C
				},
				ZB: function() {
					return De
				},
				cU: function() {
					return je
				},
				cg: function() {
					return W
				},
				d2: function() {
					return se
				},
				jN: function() {
					return ee
				},
				jg: function() {
					return me
				},
				kC: function() {
					return $
				},
				kf: function() {
					return tt
				},
				ko: function() {
					return X
				},
				mK: function() {
					return Xe
				},
				nA: function() {
					return a
				},
				oY: function() {
					return te
				},
				qM: function() {
					return x
				},
				rq: function() {
					return M
				},
				tS: function() {
					return h
				},
				tU: function() {
					return k
				},
				vB: function() {
					return ge
				},
				vM: function() {
					return J
				},
				wH: function() {
					return f
				},
				wn: function() {
					return ve
				},
				xU: function() {
					return z
				},
				xw: function() {
					return fe
				},
				z5: function() {
					return P
				},
				zO: function() {
					return Ue
				},
				zW: function() {
					return Ke
				},
				zh: function() {
					return B
				}
			});
			var e = n("../../../../node_modules/reselect/lib/index.js"),
				r = n("../react/app/redux/normalizer.js"),
				c = n("../../../../node_modules/lodash/get.js"),
				d = n.n(c),
				y = n("../../../../node_modules/moment/moment.js"),
				i = n.n(y),
				u = n("../react/common/constants/billing/index.ts");

			function l(D) {
				for (var H = 1; H < arguments.length; H++) {
					var Ee = arguments[H] != null ? Object(arguments[H]) : {},
						Me = Object.keys(Ee);
					typeof Object.getOwnPropertySymbols == "function" && Me.push.apply(Me, Object.getOwnPropertySymbols(Ee).filter(function(Re) {
						return Object.getOwnPropertyDescriptor(Ee, Re).enumerable
					})), Me.forEach(function(Re) {
						E(D, Re, Ee[Re])
					})
				}
				return D
			}

			function E(D, H, Ee) {
				return H = t(H), H in D ? Object.defineProperty(D, H, {
					value: Ee,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : D[H] = Ee, D
			}

			function t(D) {
				var H = o(D, "string");
				return typeof H == "symbol" ? H : String(H)
			}

			function o(D, H) {
				if (typeof D != "object" || D === null) return D;
				var Ee = D[Symbol.toPrimitive];
				if (Ee !== void 0) {
					var Me = Ee.call(D, H || "default");
					if (typeof Me != "object") return Me;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (H === "string" ? String : Number)(D)
			}
			const s = (0, r.P1)("zone", D => D.zone),
				g = D => {
					var H;
					return (H = D.zoneVersioning) === null || H === void 0 ? void 0 : H.zoneVersionSelector
				},
				a = (0, e.P1)(s, g, (D, H) => {
					var Ee, Me, Re;
					let ke;
					if (Array.isArray(D) && D.length === 1 ? ke = D[0] : D && !Array.isArray(D) && (ke = D), !ke) return;
					const Fe = !!(H == null ? void 0 : H.enabled);
					return l({}, ke, ke.name && {
						name: Fe ? H.rootZoneName : ke.name
					}, {
						versioning: {
							enabled: Fe,
							isRoot: !((Ee = ke.name) === null || Ee === void 0 ? void 0 : Ee.endsWith(".config.cfdata.org")),
							version: Fe ? H.selectedVersion : 0,
							rootZoneId: Fe ? H.rootZoneId : (Me = (Re = ke) === null || Re === void 0 ? void 0 : Re.id) !== null && Me !== void 0 ? Me : ""
						}
					})
				}),
				C = D => D.zone,
				p = (0, e.P1)(a, C, (D, H) => ({
					data: D,
					meta: H
				})),
				_ = D => {
					var H, Ee;
					return (H = (Ee = a(D)) === null || Ee === void 0 ? void 0 : Ee.id) !== null && H !== void 0 ? H : ""
				},
				j = D => D.zones,
				L = D => D.zonesRoot,
				f = D => D.zonesAccount,
				S = (0, r.P1)("zones", j),
				h = (0, r.P1)("zonesRoot", L),
				w = (0, r.P1)("zonesAccount", f);

			function $(D) {
				const H = a(D);
				return H ? H.created_on : null
			}

			function Y(D, H, Ee) {
				const Me = $(D);
				if (!Me) return;
				const Re = i().duration(H, Ee),
					ke = new Date(Me),
					Fe = new Date(new Date().getTime() - Re.asMilliseconds());
				return ke.getTime() > Fe.getTime()
			}

			function re(D) {
				const H = a(D);
				return H ? H.status : null
			}

			function te(D) {
				const H = a(D);
				return H ? H.type : null
			}

			function ee(D) {
				return D.plan_pending ? D.plan_pending : D.plan
			}

			function J(D) {
				const H = a(D);
				if (!H) return;
				const Ee = ee(H);
				return Ee && Ee.legacy_id
			}

			function k(D, H) {
				const Ee = ee(D);
				return !!Ee && u.Gs.indexOf(Ee.legacy_id) >= u.Gs.indexOf(H)
			}

			function z(D) {
				return !!D && D.status === "initializing"
			}

			function se(D) {
				return !!D && D.status === "pending"
			}

			function B(D) {
				return !!D && D.status === "active"
			}

			function ue(D, H) {
				if (!D) return !1;
				const Ee = ee(D);
				return !!Ee && Ee.legacy_id === H
			}

			function X(D) {
				return ue(D, "enterprise")
			}
			const G = D => X(a(D));

			function P(D) {
				return ue(D, "business")
			}
			const Z = D => P(a(D));

			function Q(D) {
				return ue(D, "pro")
			}

			function ce(D) {
				return ue(D, "free")
			}

			function F(D) {
				return !X(D)
			}

			function ne(D) {
				return D && D.owner
			}

			function me(D, H) {
				const Ee = ne(H);
				return !!Ee && Ee.type === "user" && Ee.id === D.id
			}

			function M(D) {
				const H = a(D);
				return !!H && H.type === "partial"
			}

			function A(D) {
				const H = a(D);
				return !!H && H.type === "secondary"
			}

			function R(D) {
				const H = a(D);
				return H && M(D) && H.host
			}
			const W = D => {
					var H;
					const Ee = a(D);
					return !!(Ee == null ? void 0 : Ee.host) && !!((H = Ee.plan) === null || H === void 0 ? void 0 : H.externally_managed)
				},
				oe = D => {
					const H = S(D);
					return H && H.some(X)
				},
				ve = (D, H) => {
					const Ee = a(D);
					return Ee && Ee.betas ? Ee.betas.includes(H) : !1
				},
				De = (D, ...H) => d()(D, ["zoneFlags", "data", ...H]),
				Ie = (D, ...H) => d()(D, ["accountFlags", "data", ...H]),
				x = D => D.accountFlags.isRequesting,
				fe = D => D.zoneFlags.isRequesting,
				Le = (D, ...H) => d()(D, ["zoneFlagsChanges", "data", ...H]),
				xe = D => D.zoneFlagsChanges.isRequesting,
				je = D => D.zoneFlags && D.zoneFlags.data,
				Ue = D => D.zoneFlags,
				Ye = (0, e.P1)(je, Ue, (D, H) => ({
					data: D,
					meta: H
				})),
				Qe = (0, r.P1)("abuseUrls", D => D.overview.abuseUrls),
				ot = D => {
					const H = a(D);
					return H ? `/${H.account.id}/${H.name}` : null
				},
				Je = D => D.zoneMarketingCampaigns,
				tt = D => D.overview.zoneBlocks.data,
				Ke = D => D.overview.zoneBlocks.isRequesting,
				nt = D => D.overview.zoneBlocks.hasData,
				Xe = D => {
					var H, Ee;
					return (D == null || (H = D.overview.zoneBlocks) === null || H === void 0 || (Ee = H.paginationData) === null || Ee === void 0 ? void 0 : Ee.info) || {
						page: 1,
						count: 0,
						total_pages: 0,
						per_page: 10
					}
				},
				ge = D => D.overview.zoneBlocksReview.isRequesting,
				le = D => D.overview.zoneHold,
				he = (0, r.P1)("zoneHold", le)
		},
		"../react/common/utils/formatDate.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e.pN
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-formatters/es/index.js");
			v.Z = (r, c, d = !1) => (0, e.p6)(r, c, d)
		},
		"../react/common/utils/isGuards.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Q$: function() {
					return c
				},
				t: function() {
					return i
				},
				v5: function() {
					return d
				},
				zE: function() {
					return y
				}
			});
			var e = n("../react/common/constants/index.ts"),
				r = n("../node_modules/uuid/dist/esm-browser/validate.js");
			const c = u => u ? ["page", "per_page", "count", "total_count"].every(E => E in u && u[E]) : !1,
				d = (u = "") => e.Dy.includes(u.toLowerCase()),
				y = u => u !== null && typeof u == "object" && "name" in u && "size" in u && "type" in u && typeof u.slice == "function",
				i = u => (0, r.Z)(u)
		},
		"../react/common/validators/index.js": function(V, v, n) {
			"use strict";
			n.d(v, {
				K2: function() {
					return r
				},
				Lb: function() {
					return c
				},
				XI: function() {
					return d
				},
				jk: function() {
					return u
				},
				wb: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-regex/es/index.js");
			const r = l => /^https?:\/\/(.*)/.test(l),
				c = l => e.default.hostname.test(l),
				d = l => /^([_a-zA-Z0-9][-_a-zA-Z0-9]*\.)+[-a-zA-Z0-9]{2,20}:(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(l),
				y = l => /^[!-~]+$/.test(l),
				i = /^(?:(?:[A-Za-z0-9](?:[A-Za-z0-9\-\_]{0,61}[A-Za-z0-9])?)\.)*(?:[A-Za-z0-9](?:[A-Za-z0-9\-]{0,61}[A-Za-z0-9])?)?$/,
				u = l => i.test(l)
		},
		"../react/pages/apps/marketplace/config/initialState.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Jz: function() {
					return E
				},
				OK: function() {
					return y
				},
				_Y: function() {
					return u
				},
				fD: function() {
					return o
				},
				h_: function() {
					return l
				},
				w6: function() {
					return s
				},
				yc: function() {
					return t
				}
			});

			function e(a) {
				for (var C = 1; C < arguments.length; C++) {
					var p = arguments[C] != null ? Object(arguments[C]) : {},
						_ = Object.keys(p);
					typeof Object.getOwnPropertySymbols == "function" && _.push.apply(_, Object.getOwnPropertySymbols(p).filter(function(j) {
						return Object.getOwnPropertyDescriptor(p, j).enumerable
					})), _.forEach(function(j) {
						r(a, j, p[j])
					})
				}
				return a
			}

			function r(a, C, p) {
				return C = c(C), C in a ? Object.defineProperty(a, C, {
					value: p,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : a[C] = p, a
			}

			function c(a) {
				var C = d(a, "string");
				return typeof C == "symbol" ? C : String(C)
			}

			function d(a, C) {
				if (typeof a != "object" || a === null) return a;
				var p = a[Symbol.toPrimitive];
				if (p !== void 0) {
					var _ = p.call(a, C || "default");
					if (typeof _ != "object") return _;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (C === "string" ? String : Number)(a)
			}
			let y = function(a) {
					return a.Sending = "sending", a.Success = "success", a.Failed = "failed", a.Latent = "latent", a
				}({}),
				i = function(a) {
					return a[a.Success = 200] = "Success", a[a.BadRequest = 400] = "BadRequest", a
				}({});
			const u = {
					status: y.Latent,
					statusCode: void 0
				},
				l = {
					status: y.Sending
				},
				E = {
					status: y.Success,
					statusCode: i.Success
				},
				t = {
					status: y.Failed,
					statusCode: i.BadRequest
				},
				o = {
					token: null,
					zone: null,
					isTokenValid: !1,
					user: null
				},
				s = {
					appsList: e({
						value: []
					}, u),
					installsList: e({
						value: []
					}, u),
					categoriesList: e({
						value: []
					}, u),
					recommendedAppsList: e({
						value: []
					}, u),
					metadata: e({
						value: null
					}, u),
					app: e({
						value: null
					}, u),
					updatableInstallsList: [],
					developedApps: e({
						value: []
					}, u)
				},
				g = {}
		},
		"../react/pages/apps/marketplace/config/sagas.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return me
				}
			});
			var e = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				r = n("../../../../node_modules/lodash-es/get.js"),
				c = n("../react/pages/apps/marketplace/state/auth.reducer.ts"),
				d = n("../react/pages/apps/marketplace/requests/Requester.ts");
			const y = () => d.L.fetchJSON("/user/~current"),
				i = () => d.L.request("GET", "/healthcheck");
			var u = n("../react/pages/apps/marketplace/libraries/auth.ts"),
				l = n("../react/pages/apps/marketplace/types.ts");

			function* E() {
				const A = (0, u.aP)();
				if (!A) throw new u.C6;
				try {
					const R = (0, u.he)(A);
					if (R && (0, u.pw)(R)) throw new u.C6;
					yield(0, e.gz)(c.Nw.setToken({
						token: A,
						parsed: R
					})), yield(0, e.RE)([localStorage, "setItem"], l.m.CloudflareAppsToken, A), yield(0, e.RE)([d.L, "setAuthHeader"], A)
				} catch {
					throw new u.C6
				}
			}

			function* t() {
				const {
					status: A
				} = yield(0, e.RE)(i);
				if (A === 401) throw new u.xT;
				if (A === 403) throw new u.k7;
				yield(0, e.gz)(c.Nw.setTokenValid(!0))
			}

			function* o() {
				try {
					yield(0, e.gz)(c.Nw.getCurrentUserSending());
					const A = yield(0, e.RE)(y);
					return yield(0, e.gz)(A.id ? c.Nw.getCurrentUserSuccess(A) : c.Nw.getCurrentUserFailed()), A
				} catch {
					throw yield(0, e.gz)(c.Nw.getCurrentUserFailed())
				}
			}

			function* s() {
				yield(0, e.ib)(c.U4.CurrentUserSaga, o)
			}

			function* g(A) {
				try {
					yield(0, e.RE)(E), yield(0, e.RE)(t)
				} catch (R) {
					if (yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken), ![u.Vm.RedirectToLogin, u.Vm.BadToken].includes(R.name)) return yield(0, e.gz)(c.Nw.initSaga(A.zoneId));
					try {
						return (0, u.rf)()
					} catch {
						throw new u.Sf
					}
				}
				yield(0, e.gz)(c.Nw.setZone(A.zoneId)), yield(0, e.gz)(c.Nw.getCurrentUserSaga()), yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsAuthAttempts)
			}

			function* a() {
				yield(0, e.ib)(c.U4.InitSaga, g)
			}

			function* C() {
				for (;;) {
					const A = yield(0, e.qn)(c.XO.SetCurrentUser), R = yield(0, e.RE)([localStorage, "getItem"], l.m.CloudflareAppsToken);
					if (R) {
						const W = (0, u.he)(R),
							oe = (0, r.Z)(W, "sub"),
							ve = (0, r.Z)(A, `meta.entities.user.${A.payload}.email`);
						if (ve && ve !== oe) return yield(0, e.RE)([localStorage, "removeItem"], l.m.CloudflareAppsToken)
					}
				}
			}
			var p = [a(), C(), s()],
				_ = n("../react/pages/apps/marketplace/requests/common.ts"),
				j = n("../react/pages/apps/marketplace/libraries/constants.ts");
			const L = (A, R) => A.apps ? A.apps[R] : A[R],
				f = A => L(A, "authState"),
				S = A => L(A, "commonState"),
				h = A => L(A, "homePageState"),
				w = A => f(A).zone;
			var $ = n("../react/pages/apps/marketplace/libraries/helpers.ts"),
				Y = n("../react/pages/apps/marketplace/state/common.reducer.ts");

			function re(A) {
				for (var R = 1; R < arguments.length; R++) {
					var W = arguments[R] != null ? Object(arguments[R]) : {},
						oe = Object.keys(W);
					typeof Object.getOwnPropertySymbols == "function" && oe.push.apply(oe, Object.getOwnPropertySymbols(W).filter(function(ve) {
						return Object.getOwnPropertyDescriptor(W, ve).enumerable
					})), oe.forEach(function(ve) {
						te(A, ve, W[ve])
					})
				}
				return A
			}

			function te(A, R, W) {
				return R = ee(R), R in A ? Object.defineProperty(A, R, {
					value: W,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : A[R] = W, A
			}

			function ee(A) {
				var R = J(A, "string");
				return typeof R == "symbol" ? R : String(R)
			}

			function J(A, R) {
				if (typeof A != "object" || A === null) return A;
				var W = A[Symbol.toPrimitive];
				if (W !== void 0) {
					var oe = W.call(A, R || "default");
					if (typeof oe != "object") return oe;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (R === "string" ? String : Number)(A)
			}

			function* k(A, R, W) {
				const oe = {
					categories: (W.markets || ["none"]).map(ve => {
						const De = j.XZ.find(Ie => Ie.key === ve);
						return !ve || !De ? j.iK.categories : De.categories
					}).reduce((ve, De) => ve.concat(De), []).filter((ve, De, Ie) => Ie.indexOf(ve) === De).join(","),
					excludeApps: R.map(ve => ve.appId).join(",")
				};
				return yield(0, e.RE)(_.RX, Y.Nw, _.Jb.recommendedApps.name, _.Jb.recommendedApps.url(oe), $.Ux.transformers.transformAppIdsToApps.bind(null, A))
			}

			function* z() {
				for (;;) {
					const {
						zoneId: A,
						currentResources: R
					} = yield(0, e.qn)(Y.U4.GetHomePageAssetsSaga), {
						appsList: W,
						installsList: oe,
						metadata: ve
					} = yield(0, e.$6)(re({}, R.appsList.status === "latent" ? {
						appsList: (0, e.RE)(_.RX, Y.Nw, _.Jb.apps.name, _.Jb.apps.url())
					} : {
						appsList: R.appsList.value
					}, R.categoriesList.status === "latent" ? {
						categoriesList: (0, e.RE)(_.RX, Y.Nw, _.Jb.categories.name, _.Jb.categories.url({
							includeInvisible: !0
						}))
					} : {
						categoriesList: R.categoriesList.value
					}, R.installsList.status === "latent" ? {
						installsList: (0, e.RE)(_.RX, Y.Nw, _.Jb.installs.default.name, _.Jb.installs.default.url(A))
					} : {
						installsList: R.installsList.value
					}, R.metadata.status === "latent" ? {
						metadata: (0, e.RE)(_.RX, Y.Nw, _.Jb.metadata.get.name, _.Jb.metadata.get.url(A))
					} : {
						metadata: R.metadata.value
					}));
					yield(0, e.gz)(Y.Nw.getRecommendedAppsSaga(W, oe, ve))
				}
			}

			function* se() {
				for (;;) {
					const {
						userId: A,
						zoneId: R
					} = yield(0, e.qn)(Y.U4.GetDevelopedAppsAssetsSaga);
					yield(0, e.RE)(_.RX, Y.Nw, _.Jb.installs.default.name, _.Jb.installs.default.url(R)), yield(0, e.RE)(_.RX, Y.Nw, _.Jb.developedApps.name, _.Jb.developedApps.url(A))
				}
			}

			function* B() {
				for (;;) {
					const {
						appIdentifier: A,
						zoneId: R,
						version: W
					} = yield(0, e.qn)(Y.U4.GetAppInfoAssetsSaga), oe = yield(0, e.RE)(_.RX, Y.Nw, _.Jb.installs.default.name, _.Jb.installs.default.url(R));
					yield(0, e.RE)(_.RX, Y.Nw, _.Jb.app.name, _.Jb.app.url(A, W ? {
						version: W
					} : {}), $.Ux.transformers.addCurrentSiteInstall.bind(null, oe))
				}
			}

			function* ue() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetInstalledAppsAssetsSaga), W = (yield(0, e.RE)(_.RX, Y.Nw, _.Jb.installs.default.name, _.Jb.installs.default.url(A))).filter(Ie => Ie.app.installable && Ie.versionTag !== Ie.app.infoVersion), oe = W.reduce((Ie, x) => (Ie[x.app.alias] = (0, e.RE)(_.RX, Y.Nw, _.Jb.app.name, _.Jb.app.url(x.app.alias || x.appId), $.Ux.transformers.addAppVersionInfo.bind(null, x)), Ie), {}), ve = yield(0, e.$6)(oe), De = W.map(Ie => ({
						install: Ie,
						app: ve[Ie.app.alias]
					}));
					yield(0, e.gz)(Y.Nw.setUpdatableInstalls(De))
				}
			}

			function* X() {
				for (;;) return yield(0, e.qn)(Y.U4.GetAppsSaga), yield(0, e.RE)(_.RX, Y.Nw, _.Jb.apps.name, _.Jb.apps.url())
			}

			function* G() {
				for (;;) {
					const {
						queryParams: A
					} = yield(0, e.qn)(Y.U4.GetCategoriesSaga);
					return yield(0, e.RE)(_.RX, Y.Nw, _.Jb.categories.name, _.Jb.categories.url(A))
				}
			}

			function* P() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetInstallsSaga);
					return yield(0, e.RE)(_.RX, Y.Nw, _.Jb.installs.default.name, _.Jb.installs.default.url(A))
				}
			}

			function* Z() {
				for (;;) {
					const {
						zoneId: A
					} = yield(0, e.qn)(Y.U4.GetMetadataSaga);
					return yield(0, e.RE)(_.RX, Y.Nw, _.Jb.metadata.get.name, _.Jb.metadata.get.url(A))
				}
			}

			function* Q() {
				for (;;) {
					const {
						appsList: A,
						installsList: R,
						metadata: W
					} = yield(0, e.qn)(Y.U4.GetRecommendedAppsSaga);
					yield(0, e.RE)(k, A, R, W)
				}
			}

			function* ce() {
				for (;;) {
					const {
						zoneId: A,
						data: R
					} = yield(0, e.qn)(Y.U4.PostMetadataSaga);
					try {
						const {
							appsList: W,
							installsList: oe,
							metadata: ve
						} = yield(0, e.Ys)(S), De = re({}, ve.value, {
							id: A,
							markets: [R]
						});
						yield(0, e.RE)(_.JX, Y.Nw, _.Jb.metadata.post.name, _.Jb.metadata.post.url(A), De), yield(0, e.RE)(k, W.value, oe.value, De)
					} catch {}
				}
			}

			function* F() {
				for (;;) yield(0, e.qn)(Y.dg.CloudflareZoneChangeStart), yield(0, e.gz)(Y.Nw.zoneChangedSaga())
			}
			var ne = [z(), ue(), se(), B(), X(), P(), G(), Z(), ce(), Q(), F()];
			const me = [...p, ...ne];

			function* M() {
				yield all(me)
			}
		},
		"../react/pages/apps/marketplace/libraries/auth.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				C6: function() {
					return g
				},
				Sf: function() {
					return o
				},
				Vm: function() {
					return t
				},
				aP: function() {
					return j
				},
				he: function() {
					return C
				},
				k7: function() {
					return s
				},
				pw: function() {
					return p
				},
				rf: function() {
					return f
				},
				xT: function() {
					return a
				}
			});
			var e = n("../../../../node_modules/lodash-es/toNumber.js"),
				r = n("../../../../node_modules/lodash-es/isInteger.js"),
				c = n("../../../../node_modules/lodash-es/toString.js"),
				d = n("../../../../node_modules/query-string/query-string.js"),
				y = n.n(d),
				i = n("../../../../node_modules/jwt-decode/build/jwt-decode.esm.js"),
				u = n("../react/pages/apps/marketplace/types.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				E = n.n(l);
			let t = function(h) {
				return h.RedirectToLogin = "RedirectToLogin", h.ExpiredToken = "ExpiredToken", h.BadToken = "BadToken", h.Init = "Init", h
			}({});
			class o extends Error {
				constructor() {
					super();
					this.name = t.Init
				}
			}
			class s extends Error {
				constructor() {
					super();
					this.name = t.BadToken
				}
			}
			class g extends Error {
				constructor() {
					super();
					this.name = t.RedirectToLogin
				}
			}
			class a extends Error {
				constructor() {
					super();
					this.name = t.ExpiredToken
				}
			}
			const C = h => {
					try {
						const w = (0, i.Z)(h);
						if (!w) throw new Error("Invalid JWT");
						return w
					} catch (w) {
						throw w
					}
				},
				p = h => {
					const w = new Date(h.exp * 1e3);
					return new Date > w
				},
				_ = (h, w = window.document.location.toString()) => {
					(0, l.get)(`login?redirect_uri=${encodeURIComponent(w)}`).then($ => {
						var Y, re;
						const te = (Y = $.body) === null || Y === void 0 || (re = Y.result) === null || re === void 0 ? void 0 : re.redirect_uri;
						te && (window.location.href = te)
					}).catch($ => {
						console.log("Failed login ", $)
					})
				},
				j = () => {
					let h = d.parse(location.search);
					const w = localStorage.getItem(u.m.CloudflareAppsToken) || h.token;
					if (w) {
						delete h.token, delete h.from_login;
						const $ = d.stringify(h);
						window.history.replaceState({}, document.title, `${window.location.pathname}${$?`?${$}`:""}`)
					}
					return w
				},
				L = 2,
				f = h => {
					if (S() > L) throw new Error("redirect attempt limit reached");
					return _("login", h)
				},
				S = () => {
					let h = (0, e.Z)(localStorage.getItem(u.m.CloudflareAppsAuthAttempts));
					(0, r.Z)(h) || (h = 0, localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, c.Z)(h)));
					const w = h + 1;
					return localStorage.setItem(u.m.CloudflareAppsAuthAttempts, (0, c.Z)(w)), w > L && localStorage.removeItem(u.m.CloudflareAppsAuthAttempts), w
				}
		},
		"../react/pages/apps/marketplace/libraries/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				XZ: function() {
					return i
				},
				iK: function() {
					return y
				},
				j9: function() {
					return c
				}
			});
			var e = n("../react/pages/apps/marketplace/marketplace.translations.ts");
			const r = /local.cloudflareapps.com/,
				c = /staging.cloudflare.com/,
				d = 900,
				y = {
					key: "none",
					label: e.keys.markets_metadata_label_popular,
					categories: ["recommended-for-all-sites", "recommended-for-blogs", "recommended-for-stores", "recommended-for-marketing-sites"]
				},
				i = [{
					key: "blog",
					label: e.keys.markets_metadata_label_blog,
					categories: ["recommended-for-all-sites", "recommended-for-blogs"]
				}, {
					key: "store",
					label: e.keys.markets_metadata_label_store,
					categories: ["recommended-for-all-sites", "recommended-for-stores"]
				}, {
					key: "marketing",
					label: e.keys.markets_metadata_label_marketing,
					categories: ["recommended-for-all-sites", "recommended-for-marketing-sites"]
				}, y],
				u = [{
					type: "string",
					field: "id"
				}, {
					type: "string",
					field: "title"
				}, {
					type: "string",
					field: "shortDescription"
				}, {
					type: "string",
					field: "longDescription"
				}, {
					type: "string",
					field: "instructions"
				}, {
					type: "string",
					field: "alias"
				}, {
					type: "string",
					field: "orgId"
				}, {
					type: "string",
					field: "author"
				}, {
					type: "string",
					field: "tagline"
				}, {
					type: "string",
					field: "website"
				}, {
					type: "string",
					field: "supportEmail"
				}, {
					type: "string",
					field: "org.id"
				}, {
					type: "string",
					field: "org.title"
				}, {
					type: "string",
					field: "org.username"
				}, {
					type: "list",
					field: "categories.id"
				}, {
					type: "list",
					field: "categories.title"
				}, {
					type: "list",
					field: "categories.description"
				}, {
					type: "list",
					field: "categories.metadata"
				}]
		},
		"../react/pages/apps/marketplace/libraries/helpers.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Ux: function() {
					return o
				},
				cz: function() {
					return g
				},
				im: function() {
					return u
				},
				pG: function() {
					return s
				},
				t$: function() {
					return a
				}
			});
			var e = n("../react/pages/apps/marketplace/libraries/constants.ts");

			function r(p) {
				for (var _ = 1; _ < arguments.length; _++) {
					var j = arguments[_] != null ? Object(arguments[_]) : {},
						L = Object.keys(j);
					typeof Object.getOwnPropertySymbols == "function" && L.push.apply(L, Object.getOwnPropertySymbols(j).filter(function(f) {
						return Object.getOwnPropertyDescriptor(j, f).enumerable
					})), L.forEach(function(f) {
						c(p, f, j[f])
					})
				}
				return p
			}

			function c(p, _, j) {
				return _ = d(_), _ in p ? Object.defineProperty(p, _, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[_] = j, p
			}

			function d(p) {
				var _ = y(p, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function y(p, _) {
				if (typeof p != "object" || p === null) return p;
				var j = p[Symbol.toPrimitive];
				if (j !== void 0) {
					var L = j.call(p, _ || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(p)
			}
			const i = p => p.test(window.location.hostname),
				u = () => i(e.j9),
				l = () => i(MARKETPLACE_LOCAL_URL_REGEXP),
				E = (p, _) => {
					const j = random(0, 1) ? -1 : 1;
					return p.points === _.points || p.points >= APP_POINTS_THRESHOLD && _.points >= APP_POINTS_THRESHOLD ? j : p.points < 0 || _.points < 0 || p.points >= APP_POINTS_THRESHOLD || _.points >= APP_POINTS_THRESHOLD ? _.points - p.points : j
				},
				t = (p, _, j) => {
					const L = get(_, j),
						f = get(p, j);
					return L && !isEqual(L, f)
				},
				o = {
					transformers: {
						transformAppIdsToApps: (p, _) => _.map(j => p.find(L => L.id === j)),
						addAppVersionInfo: (p, _) => r({}, _, {
							currentVersion: _.versions.find(j => j.tag === p.versionTag),
							latestVersion: _.versions.find(j => j.tag === _.infoVersion)
						}),
						addCurrentSiteInstall: (p, _) => r({}, _, {
							currentSiteInstall: p.find(j => j.appId === _.id)
						})
					}
				},
				s = (p, _, j) => r({}, p, _, j ? {
					value: j
				} : {}),
				g = p => p.map(_ => _.status),
				a = p => p.apps ? p.apps : p,
				C = p => {
					let _ = ["by-cloudflare"];
					return p.filter(j => !_.includes(j.id) && j.visible).sort((j, L) => j.points < L.points ? 1 : 0)
				}
		},
		"../react/pages/apps/marketplace/marketplace.translations.ts": function(V, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				categorySlugTranslationKey: function() {
					return y
				},
				keys: function() {
					return r
				},
				namespace: function() {
					return d
				},
				translations: function() {
					return c
				}
			});
			var e = n("../../../common/intl/intl-core/src/prepare.ts");
			const {
				keys: r,
				translations: c,
				namespace: d
			} = (0, e.x)("marketplace", {
				markets_metadata_label_popular: "Just show me the most popular apps",
				markets_metadata_label_blog: "Improve my blog or portfolio",
				markets_metadata_label_store: "Supercharge my online store",
				markets_metadata_label_marketing: "Improve my marketing and lead generation",
				nav_bar_explore_apps: "Explore Apps",
				nav_bar_installed_apps: "Your Installed Apps",
				nav_bar_developed_apps: "Your Developed Apps",
				common_card_button_show_all: "Show All",
				app_card_untitled_app: "Untitled App",
				app_card_installed_flag: "Installed",
				developer_footer_card_title: "developers",
				developer_footer_card_header: "Ship your code to 13 million sites.",
				developer_footer_card_body: "With Cloudflare Apps, getting your tool or service onto millions of sites has never been easier. Any Cloudflare user can preview & install your code on their site in seconds.",
				developer_footer_learn_more: "Learn more \u203A",
				recommended_apps_personalize_save: "Save",
				recommended_apps_personalize_customize: "Customize",
				recommended_apps_card_error_loading: "There was a problem loading popular apps.",
				angular_app_iframe_content: "Could not load content",
				home_page_errored: "There was an error!",
				home_page_apps_search_label: "Search Apps",
				home_page_categories_filter_label: "Filter Apps",
				home_page_categories_filter_options_all: "All",
				home_page_categories_filter_options_popular: "Popular",
				category_card_popular_title: "Popular<0> apps\u203A</0>",
				category_card_popular_subtitle: "Our most popular and highly rated apps.",
				home_page_categories_filter_options_ui_and_design: "UI & Design",
				home_page_categories_filter_options_widgets_and_plugins: "Widgets & Plugins",
				home_page_categories_filter_options_security: "Security",
				home_page_categories_filter_options_performance: "Performance",
				home_page_categories_filter_options_insights: "Insights",
				home_page_categories_filter_options_social_and_communication: "Social & Communication",
				category_card_ui_and_design_title: "UI & Design<0> apps\u203A</0>",
				category_card_ui_and_design_subtitle: "Apps that make your website more beautiful and user friendly.",
				category_card_widgets_and_plugins_title: "Widgets & Plugins<0> apps\u203A</0>",
				category_card_widgets_and_plugins_subtitle: "Apps that add functionality and services to your website.",
				category_card_security_title: "Security<0> apps\u203A</0>",
				category_card_security_subtitle: "Apps which make your site safer and protect you from threats.",
				category_card_insights_title: "Insights<0> apps\u203A</0>",
				category_card_insights_subtitle: "Apps that provide insight into your visitors.",
				category_card_performance_title: "Performance<0> apps\u203A</0>",
				category_card_performance_subtitle: "Improve the speed or perceived responsiveness of your website.",
				category_card_social_and_communication_title: "Social & Communication<0> apps\u203A</0>",
				category_card_social_and_communication_subtitle: "Apps that make it easier to communicate with your customers.",
				home_page_categories_filter_options_powr: "POWR",
				home_page_categories_filter_options_grow_your_email_list: "Grow Your Email List",
				home_page_categories_filter_options_make_money_on_your_site: "Make Money On Your Site",
				home_page_categories_filter_options_recommended_for_all_sites: "Recommended for All Sites",
				home_page_categories_filter_options_performance_and_security: "Performance & Security",
				home_page_categories_filter_options_recommended_for_stores: "Recommended For Stores",
				home_page_categories_filter_options_by_cloudflare: "Cloudflare Labs",
				home_page_categories_filter_options_get_more_customers: "Get More Customers",
				home_page_categories_filter_options_getting_started_apps: "Getting Started",
				home_page_categories_filter_options_recommended_for_marketing_sites: "Recommended for Marketing Sites",
				home_page_categories_filter_options_add_on: "Add-ons",
				home_page_categories_filter_options_communication: "Communication",
				home_page_categories_filter_options_humor: "Humor",
				home_page_categories_filter_options_design: "Design & Polish",
				home_page_categories_filter_options_for_developers: "For Developers",
				home_page_categories_filter_options_recommended_for_blogs: "Recommended for Blogs",
				home_page_categories_filter_options_marketing: "Marketing",
				home_page_categories_filter_options_social_media: "Social Media",
				home_page_categories_filter_options_e_commerce: "E-Commerce",
				home_page_categories_filter_options_analytics: "Analytics",
				category_card_recommended_all_sites_subtitle: "These apps are recommended for all site types.",
				category_card_powr_title: "POWR<0> apps\u203A</0>",
				category_card_powr_subtitle: "Apps created by POWR",
				category_card_grow_your_email_list_title: "Grow Your Email List<0> \u203A</0>",
				category_card_grow_your_email_list_subtitle: "Apps to help you grow your email subscribers.",
				category_card_make_money_on_your_site_title: "Make Money On Your Site<0> \u203A</0>",
				category_card_make_money_on_your_site_subtitle: "Apps to help you make money from your website.",
				category_card_recommended_for_all_sites_title: "Recommended for All Sites<0> \u203A</0>",
				category_card_recommended_for_all_sites_subtitle: "Apps that are recommended for all sites.",
				category_card_performance_and_security_title: "Performance & Security<0> apps\u203A</0>",
				category_card_performance_and_security_subtitle: "Apps that make your website faster and more secure.",
				category_card_recommended_for_stores_title: "Recommended For Stores<0> \u203A</0>",
				category_card_recommended_for_stores_subtitle: "Apps for stores in the recommendation engine.",
				category_card_by_cloudflare_title: "Cloudflare Labs<0> apps\u203A</0>",
				category_card_by_cloudflare_subtitle: "Apps made by Cloudflare.",
				category_card_get_more_customers_title: "Get More Customers<0> \u203A</0>",
				category_card_get_more_customers_subtitle: "Apps to help you grow your customer base.",
				category_card_getting_started_apps_title: "Getting Started<0> apps\u203A</0>",
				category_card_recommended_for_marketing_sites_title: "Recommended for Marketing Sites<0> \u203A</0>",
				category_card_recommended_for_marketing_sites_subtitle: "Apps for marketing sites in the recommendation engine.",
				category_card_add_on_title: "Add-ons<0> \u203A</0>",
				category_card_add_on_subtitle: "Drop-in components to add to your website.",
				category_card_communication_title: "Communication<0> apps\u203A</0>",
				category_card_communication_subtitle: "Communicate with and provide support to your website visitors.",
				category_card_humor_title: "Humor<0> apps\u203A</0>",
				category_card_humor_subtitle: "Apps that add fun widgets and Easter eggs to your site.",
				category_card_design_title: "Design & Polish<0> apps\u203A</0>",
				category_card_design_subtitle: "Improve the look & feel and ease-of-use of your website.",
				category_card_for_developers_title: "For Developers<0> \u203A</0>",
				category_card_for_developers_subtitle: "Apps made for web developers and designers.",
				category_card_recommended_for_blogs_title: "Recommended for Blogs<0> \u203A</0>",
				category_card_recommended_for_blogs_subtitle: "Apps for blogs in the recommendation engine.",
				category_card_marketing_title: "Marketing<0> apps\u203A</0>",
				category_card_marketing_subtitle: "Promote content, collect email addresses, and increase engagement.",
				category_card_social_media_title: "Social Media<0> apps\u203A</0>",
				category_card_social_media_subtitle: "Integrate your website with Twitter, Facebook, and other networks.",
				category_card_e_commerce_title: "E-Commerce<0> apps\u203A</0>",
				category_card_e_commerce_subtitle: "Tools to help your online business.",
				category_card_analytics_title: "Analytics<0> apps\u203A</0>",
				category_card_analytics_subtitle: "Collect and analyze data from your site visitors.",
				app_edit_install: "Edit Install",
				app_uninstall: "Uninstall",
				app_installed: "Installed",
				app_cancel: "Cancel",
				app_retry: "Retry",
				app_info_about: "About",
				app_info_no_description: "This app has no description.",
				app_info_no_description_link: "This app has no description.  <0>Add one here</0>.",
				app_info_try_on_your_site: "Try it out on your site now!",
				app_info_preview: "Preview",
				app_info_header_preview: "Preview on your site",
				app_info_starting_price: "Starting at %{appStartingPrice}",
				app_info_install_free: "Install for FREE",
				app_info_details: "Details",
				app_info_rating: "Rating",
				app_info_feedback_rating_error: "There was an error with your rating. Please try again and <0>contact us</0> if the issue persists.",
				app_info_installed_version: "%{appInstalledVersion} on %{appInstalledDate}",
				app_info_developer: "Developer",
				app_info_support_contact: "Support Contact",
				app_info_category: "Category",
				app_info_categories: "Categories",
				app_info_elsewhere: "Elsewhere",
				app_info_external_link_website: "Website \u203A",
				app_info_external_link_tos: "Terms of Service \u203A",
				app_info_external_link_privacy: "Privacy Policy \u203A",
				app_info_external_link_source: "Source Code \u203A",
				developed_app_card_configure: "Configure",
				developed_app_card_metrics: "Metrics",
				developed_app_card_status_approved: "Approved",
				developed_app_card_status_hidden: "Hidden",
				developed_app_card_status_draft: "Draft",
				developed_app_card_status_pending: "Awaiting approval...",
				installed_app_card_installed_date: "Installed %{appCreatedRelativeTime}",
				installed_app_card_leave_feedback: "Leave Feedback",
				installed_app_card_visit_vendor_site: "Visit vendor site",
				installed_app_card_visit_vendor: "Visit %{title}",
				installed_app_card_external_link: "External Link",
				installed_app_card_upgrade_version: "Upgrade version",
				installed_app_card_update: "Update",
				installed_app_card_default_release_notes: "Bugfixes and stability improvements.",
				installed_apps_group_title_all: "Installed on all pages",
				installed_apps_group_title_page: "Installed on <0>%{page}</0>",
				installed_apps_group_title_page_and_other: "Installed on <0>%{page}</0> and 1 other location",
				installed_apps_group_title_page_and_others: "Installed on <0>%{page}</0> and %{length} other locations",
				uninstall_confirm_all_sites: "Are you sure you want to uninstall %{title} from all sites?",
				uninstall_confirm_sites: "Are you sure you want to uninstall %{title} from the following sites and pages?",
				uninstall_error: "There was an error removing the app. Please try again later or <0>contact us</0> for assistance.",
				page_loading_error: "There was an error loading the page.",
				developed_apps_installed_toast: "Your developed apps can be fully installed and tested on any site managed by your Cloudflare account.",
				developed_apps_no_apps: "No apps were found.",
				developed_apps_create_app: "Create an App",
				developed_apps_banner_title: "Developers",
				developed_apps_banner_body: "To configure, manage, and monitor your developed apps, go to the Developer Dashboard.",
				developed_apps_banner_dashboard: "Developer Dashboard",
				installed_apps_heading: "Apps",
				installed_apps_update_toast: "You have 1 app with pending updates.",
				installed_apps_updates_toast: "You have %{length} apps with pending updates.",
				installed_apps_no_apps_installed_section: "No apps installed on <0>%{section}</0>.",
				installed_apps_no_apps_insatlled_site: "You haven't installed any apps on your site yet."
			});

			function y(i) {
				const u = i.replace(/-/g, "_");
				return Object.keys(r).includes(u) ? u : void 0
			}
		},
		"../react/pages/apps/marketplace/requests/Requester.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				L: function() {
					return o
				}
			});
			var e = n("../../../../node_modules/lodash-es/defaults.js"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(s) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), C.forEach(function(p) {
						i(s, p, a[p])
					})
				}
				return s
			}

			function d(s, g) {
				if (s == null) return {};
				var a = y(s, g),
					C, p;
				if (Object.getOwnPropertySymbols) {
					var _ = Object.getOwnPropertySymbols(s);
					for (p = 0; p < _.length; p++) C = _[p], !(g.indexOf(C) >= 0) && (!Object.prototype.propertyIsEnumerable.call(s, C) || (a[C] = s[C]))
				}
				return a
			}

			function y(s, g) {
				if (s == null) return {};
				var a = {},
					C = Object.keys(s),
					p, _;
				for (_ = 0; _ < C.length; _++) p = C[_], !(g.indexOf(p) >= 0) && (a[p] = s[p]);
				return a
			}

			function i(s, g, a) {
				return g = u(g), g in s ? Object.defineProperty(s, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = a, s
			}

			function u(s) {
				var g = l(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function l(s, g) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			const E = n("../../../../node_modules/url-join/lib/url-join.js");
			class t {
				constructor(g) {
					i(this, "token", void 0), i(this, "options", void 0), i(this, "setAuthHeader", a => {
						this.token = a
					}), this.token = "", this.options = (0, e.Z)(g, t.defaults)
				}
				getAuthHeaders() {
					return {
						Authorization: `Bearer ${this.token}`
					}
				}
				async request(g = "GET", a, C = {}) {
					const {
						body: p
					} = C, _ = d(C, ["body"]);
					return fetch(E(this.options.baseUrl, a), c({
						method: g
					}, _, p ? {
						body: JSON.stringify(p)
					} : {}, {
						credentials: "same-origin",
						headers: new Headers(c({
							Accept: "application/json, text/plain, */*"
						}, C.headers, this.getAuthHeaders()))
					}))
				}
				async fetchJSON(g, a = {}) {
					const C = await this.request("GET", g, a);
					return this.parseJSONResponse(C)
				}
				async postJSON(g, a = {}) {
					const C = await this.request("POST", g, c({}, a, {
						headers: c({}, a.headers, {
							"Content-Type": "application/json"
						})
					}));
					return this.parseJSONResponse(C)
				}
				parseJSONResponse(g) {
					return g.json()
				}
			}
			i(t, "defaults", {
				baseUrl: (0, r.im)() ? "https://api-staging.appstore.cfdata.org" : "https://api.cloudflareapps.com"
			});
			const o = new t
		},
		"../react/pages/apps/marketplace/requests/common.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				RX: function() {
					return t
				},
				JX: function() {
					return o
				},
				Jb: function() {
					return g
				}
			});
			var e = n("../../../../node_modules/lodash-es/upperFirst.js"),
				r = n("../../../../node_modules/lodash-es/isEmpty.js"),
				c = n("../../../../node_modules/query-string/query-string.js"),
				d = n("../../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js"),
				y = n("../react/pages/apps/marketplace/requests/Requester.ts");

			function i(p, _, j) {
				return _ = u(_), _ in p ? Object.defineProperty(p, _, {
					value: j,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : p[_] = j, p
			}

			function u(p) {
				var _ = l(p, "string");
				return typeof _ == "symbol" ? _ : String(_)
			}

			function l(p, _) {
				if (typeof p != "object" || p === null) return p;
				var j = p[Symbol.toPrimitive];
				if (j !== void 0) {
					var L = j.call(p, _ || "default");
					if (typeof L != "object") return L;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (_ === "string" ? String : Number)(p)
			}
			class E {
				constructor(_) {
					i(this, "name", void 0), i(this, "url", void 0), this.name = _.name, this.url = _.url
				}
			}

			function* t(p, _, j, L) {
				const f = (0, e.Z)(_),
					[S, h, w] = [`get${f}Sending`, `get${f}Success`, `get${f}Failed`];
				try {
					yield(0, d.gz)(p[S]());
					const $ = yield(0, d.RE)(a, j);
					let Y = $;
					if (Y.error) {
						yield(0, d.gz)(p[w]());
						return
					}
					return L && (Y = yield L($)), yield(0, d.gz)(p[h](Y)), Y
				} catch {
					yield(0, d.gz)(p[w]())
				}
			}

			function* o(p, _, j, L) {
				const f = (0, e.Z)(_),
					S = `get${f}Sending`,
					h = `get${f}Success`,
					w = `get${f}Failed`;
				try {
					yield(0, d.gz)(p[S]());
					const $ = yield(0, d.RE)(C, {
						url: j,
						data: L
					});
					return yield(0, d.gz)(p[h]($)), $
				} catch {
					yield(0, d.gz)(p[w]())
				}
			}
			const s = p => (0, r.Z)(p) ? "" : `?${c.stringify(p)}`,
				g = {
					app: new E({
						name: "app",
						url: (p, _) => `apps/${p}${s(_)}`
					}),
					apps: new E({
						name: "apps",
						url: () => "apps"
					}),
					installs: {
						default: new E({
							name: "installs",
							url: p => `sites/${p}/installs`
						}),
						delete: new E({
							name: "installs",
							url: p => `installs/${p}`
						})
					},
					categories: new E({
						name: "categories",
						url: (p = {}) => "categories" + s(p)
					}),
					metadata: {
						get: new E({
							name: "metadata",
							url: p => `sites/${p}/metadata`
						}),
						post: new E({
							name: "metadata",
							url: p => `sites/${p}/metadata`
						})
					},
					ratings: {
						default: new E({
							name: "ratings",
							url: (p = {}) => "ratings" + s(p)
						}),
						delete: new E({
							name: "ratings",
							url: p => `ratings/${p}`
						})
					},
					recommendedApps: new E({
						name: "recommendedApps",
						url: (p = {}) => "apps/recommend" + s(p)
					}),
					developedApps: new E({
						name: "developedApps",
						url: p => `user/${p}/apps`
					})
				},
				a = async p => y.L.fetchJSON(p), C = async p => {
					const {
						url: _,
						data: j
					} = p;
					return y.L.postJSON(_, {
						body: j
					})
				}
		},
		"../react/pages/apps/marketplace/state/auth.reducer.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return l
				},
				U4: function() {
					return u
				},
				XO: function() {
					return i
				},
				ZP: function() {
					return E
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts");

			function r(t) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						g = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), g.forEach(function(a) {
						c(t, a, s[a])
					})
				}
				return t
			}

			function c(t, o, s) {
				return o = d(o), o in t ? Object.defineProperty(t, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = s, t
			}

			function d(t) {
				var o = y(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function y(t, o) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var g = s.call(t, o || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let i = function(t) {
					return t.SetCurrentUser = "user.set", t
				}({}),
				u = function(t) {
					return t.InitSaga = "MARKETPLACE/AUTH/LOADED_SAGA", t.SetZone = "MARKETPLACE/AUTH/SET_ZONE", t.SetToken = "MARKETPLACE/AUTH/SET_TOKEN", t.ClearToken = "MARKETPLACE/AUTH/CLEAR_TOKEN", t.SetTokenValid = "MARKETPLACE/AUTH/VALID_TOKEN", t.CurrentUserSaga = "MARKETPLACE/AUTH/CURRENT_USER_SAGA", t.CurrentUserSending = "MARKETPLACE/AUTH/CURRENT_USER_SENDING", t.CurrentUserSuccess = "MARKETPLACE/AUTH/CURRENT_USER_SUCCESS", t.CurrentUserFailed = "MARKETPLACE/AUTH/CURRENT_USER_FAILED", t.ResetState = "MARKETPLACE/AUTH/RESET_STATE", t
				}({});
			const l = {
				resetState: () => ({
					type: u.ResetState
				}),
				initSaga: t => ({
					type: u.InitSaga,
					zoneId: t
				}),
				setZone: t => ({
					type: u.SetZone,
					zone: t
				}),
				setToken: t => ({
					type: u.SetToken,
					token: t
				}),
				clearToken: () => ({
					type: u.ClearToken
				}),
				setTokenValid: t => ({
					type: u.SetTokenValid,
					isTokenValid: t
				}),
				getCurrentUserSaga: () => ({
					type: u.CurrentUserSaga
				}),
				getCurrentUserSending: () => ({
					type: u.CurrentUserSending
				}),
				getCurrentUserSuccess: t => ({
					type: u.CurrentUserSuccess,
					user: t
				}),
				getCurrentUserFailed: () => ({
					type: u.CurrentUserFailed
				})
			};

			function E(t = e.fD, o) {
				switch (o.type) {
					case u.ResetState:
						return r({}, e.fD);
					case u.CurrentUserSending:
						return r({}, t);
					case u.CurrentUserSuccess:
						const {
							user: s
						} = o;
						return r({}, t, {
							user: s
						});
					case u.CurrentUserFailed:
						return r({}, t);
					case u.SetZone:
						const {
							zone: g
						} = o;
						return r({}, t, {
							zone: g
						});
					case u.SetToken:
						const {
							token: a
						} = o;
						return r({}, t, {
							token: a
						});
					case u.ClearToken:
						return r({}, t, {
							token: null
						});
					case u.SetTokenValid:
						const {
							isTokenValid: C
						} = o;
						return r({}, t, {
							isTokenValid: C
						});
					default:
						return t
				}
			}
		},
		"../react/pages/apps/marketplace/state/common.reducer.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Nw: function() {
					return E
				},
				U4: function() {
					return l
				},
				ZP: function() {
					return t
				},
				dg: function() {
					return u
				}
			});
			var e = n("../react/pages/apps/marketplace/config/initialState.ts"),
				r = n("../react/pages/apps/marketplace/libraries/helpers.ts");

			function c(o) {
				for (var s = 1; s < arguments.length; s++) {
					var g = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), a.forEach(function(C) {
						d(o, C, g[C])
					})
				}
				return o
			}

			function d(o, s, g) {
				return s = y(s), s in o ? Object.defineProperty(o, s, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = g, o
			}

			function y(o) {
				var s = i(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(o, s) {
				if (typeof o != "object" || o === null) return o;
				var g = o[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(o, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let u = function(o) {
					return o.CloudflareZoneChangeStart = "zone.start", o
				}({}),
				l = function(o) {
					return o.GetHomePageAssetsSaga = "MARKETPLACE/COMMON/GET_HOME_PAGE_ASSETS_SAGA", o.GetInstalledAppsAssetsSaga = "MARKETPLACE/COMMON/GET_INSTALLED_APPS_ASSETS_SAGA", o.GetDevelopedAppsAssetsSaga = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_ASSETS_SAGA", o.GetDevelopedAppsSending = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SENDING", o.GetDevelopedAppsSuccess = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_SUCCESS", o.GetDevelopedAppsFailed = "MARKETPLACE/COMMON/GET_DEVELOPED_APPS_FAILED", o.GetAppInfoAssetsSaga = "MARKETPLACE/COMMON/GET_APP_INFO_ASSETS_SAGA", o.SetUpdatableInstalls = "MARKETPLACE/COMMON/SET_UPDATABLE_INSTALLS", o.GetAppSaga = "MARKETPLACE/COMMON/GET_APP_SAGA", o.GetAppSending = "MARKETPLACE/COMMON/GET_APP_SENDING", o.GetAppSuccess = "MARKETPLACE/COMMON/GET_APP_SUCCESS", o.GetAppFailed = "MARKETPLACE/COMMON/GET_APP_FAILED", o.ClearApp = "MARKETPLACE/COMMON/CLEAR_APP", o.GetAppsSaga = "MARKETPLACE/COMMON/GET_APPS_SAGA", o.GetAppsSending = "MARKETPLACE/COMMON/GET_APPS_SENDING", o.GetAppsSuccess = "MARKETPLACE/COMMON/GET_APPS_SUCCESS", o.GetAppsFailed = "MARKETPLACE/COMMON/GET_APPS_FAILED", o.GetInstallsSaga = "MARKETPLACE/COMMON/GET_INSTALLS_SAGA", o.GetInstallsSending = "MARKETPLACE/COMMON/GET_INSTALLS_SENDING", o.GetInstallsSuccess = "MARKETPLACE/COMMON/GET_INSTALLS_SUCCESS", o.GetInstallsFailed = "MARKETPLACE/COMMON/GET_INSTALLS_FAILED", o.GetCategoriesSaga = "MARKETPLACE/COMMON/GET_CATEGORIES_SAGA", o.GetCategoriesSending = "MARKETPLACE/COMMON/GET_CATEGORIES_SENDING", o.GetCategoriesSuccess = "MARKETPLACE/COMMON/GET_CATEGORIES_SUCCESS", o.GetCategoriesFailed = "MARKETPLACE/COMMON/GET_CATEGORIES_FAILED", o.GetMetadataSaga = "MARKETPLACE/COMMON/GET_METADATA_SAGA", o.GetMetadataSending = "MARKETPLACE/COMMON/GET_METADATA_SENDING", o.GetMetadataSuccess = "MARKETPLACE/COMMON/GET_METADATA_SUCCESS", o.GetMetadataFailed = "MARKETPLACE/COMMON/GET_METADATA_FAILED", o.PostMetadataSaga = "MARKETPLACE/COMMON/POST_METADATA_SAGA", o.PostMetadataSending = "MARKETPLACE/COMMON/POST_METADATA_SENDING", o.PostMetadataSuccess = "MARKETPLACE/COMMON/POST_METADATA_SUCCESS", o.PostMetadataFailed = "MARKETPLACE/COMMON/POST_METADATA_FAILED", o.GetRecommendedAppsSaga = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SAGA", o.GetRecommendedAppsSending = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SENDING", o.GetRecommendedAppsSuccess = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_SUCCESS", o.GetRecommendedAppsFailed = "MARKETPLACE/COMMON/GET_RECOMMENDED_APPS_FAILED", o.ZoneChangedSaga = "MARKETPLACE/COMMON/ZONE_CHANGED_SAGA", o.ResetState = "MARKETPLACE/COMMON/RESET_STATE", o
				}({});
			const E = {
				resetState: () => ({
					type: l.ResetState
				}),
				zoneChangedSaga: () => ({
					type: l.ZoneChangedSaga
				}),
				getHomePageAssetsSaga: (o, s) => ({
					type: l.GetHomePageAssetsSaga,
					zoneId: o,
					currentResources: s
				}),
				getInstalledAppsAssetsSaga: o => ({
					type: l.GetInstalledAppsAssetsSaga,
					zoneId: o
				}),
				getDevelopedAppsAssetsSaga: (o, s) => ({
					type: l.GetDevelopedAppsAssetsSaga,
					userId: o,
					zoneId: s
				}),
				getDevelopedAppsSending: () => ({
					type: l.GetDevelopedAppsSending
				}),
				getDevelopedAppsSuccess: o => ({
					type: l.GetDevelopedAppsSuccess,
					developedApps: o
				}),
				getDevelopedAppsFailed: () => ({
					type: l.GetDevelopedAppsFailed
				}),
				getAppInfoAssetsSaga: (o, s, g) => ({
					type: l.GetAppInfoAssetsSaga,
					appIdentifier: o,
					zoneId: s,
					version: g
				}),
				setUpdatableInstalls: o => ({
					type: l.SetUpdatableInstalls,
					updatableInstallsList: o
				}),
				getAppSaga: o => ({
					type: l.GetAppSaga,
					appIdentifier: o
				}),
				getAppSending: () => ({
					type: l.GetAppSending
				}),
				getAppSuccess: o => ({
					type: l.GetAppSuccess,
					app: o
				}),
				getAppFailed: () => ({
					type: l.GetAppFailed
				}),
				clearApp: () => ({
					type: l.ClearApp
				}),
				getAppsSaga: () => ({
					type: l.GetAppsSaga
				}),
				getAppsSending: () => ({
					type: l.GetAppsSending
				}),
				getAppsSuccess: o => ({
					type: l.GetAppsSuccess,
					appsList: o
				}),
				getAppsFailed: () => ({
					type: l.GetAppsFailed
				}),
				getInstallsSaga: o => ({
					type: l.GetInstallsSaga,
					zoneId: o
				}),
				getInstallsSending: () => ({
					type: l.GetInstallsSending
				}),
				getInstallsSuccess: o => ({
					type: l.GetInstallsSuccess,
					installsList: o
				}),
				getInstallsFailed: () => ({
					type: l.GetInstallsFailed
				}),
				getCategoriesSaga: o => ({
					type: l.GetCategoriesSaga,
					queryParams: o
				}),
				getCategoriesSending: () => ({
					type: l.GetCategoriesSending
				}),
				getCategoriesSuccess: o => ({
					type: l.GetCategoriesSuccess,
					categoriesList: o
				}),
				getCategoriesFailed: () => ({
					type: l.GetCategoriesFailed
				}),
				getMetadataSaga: o => ({
					type: l.GetMetadataSaga,
					zoneId: o
				}),
				getMetadataSending: () => ({
					type: l.GetMetadataSending
				}),
				getMetadataSuccess: o => ({
					type: l.GetMetadataSuccess,
					metadata: o
				}),
				getMetadataFailed: () => ({
					type: l.GetMetadataFailed
				}),
				postMetadataSaga: (o, s) => ({
					type: l.PostMetadataSaga,
					zoneId: o,
					data: s
				}),
				postMetadataSending: () => ({
					type: l.PostMetadataSending
				}),
				postMetadataSuccess: o => ({
					type: l.PostMetadataSuccess,
					metadata: o
				}),
				postMetadataFailed: () => ({
					type: l.PostMetadataFailed
				}),
				getRecommendedAppsSaga: (o, s, g) => ({
					type: l.GetRecommendedAppsSaga,
					appsList: o,
					installsList: s,
					metadata: g
				}),
				getRecommendedAppsSending: () => ({
					type: l.GetRecommendedAppsSending
				}),
				getRecommendedAppsSuccess: o => ({
					type: l.GetRecommendedAppsSuccess,
					recommendedAppsList: o
				}),
				getRecommendedAppsFailed: () => ({
					type: l.GetRecommendedAppsFailed
				})
			};

			function t(o = e.w6, s) {
				switch (s.type) {
					case l.ResetState:
						return c({}, e.w6);
					case l.ZoneChangedSaga:
						return c({}, o, {
							installsList: c({}, e.w6.installsList),
							recommendedAppsList: c({}, e.w6.recommendedAppsList),
							metadata: c({}, e.w6.metadata)
						});
					case l.GetAppsSending:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.h_))
						});
					case l.GetAppsSuccess:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.Jz, s.appsList))
						});
					case l.GetAppsFailed:
						return c({}, o, {
							appsList: c({}, (0, r.pG)(o.appsList, e.yc))
						});
					case l.GetInstallsSending:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.h_))
						});
					case l.GetInstallsSuccess:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.Jz, s.installsList))
						});
					case l.GetInstallsFailed:
						return c({}, o, {
							installsList: c({}, (0, r.pG)(o.installsList, e.yc))
						});
					case l.GetCategoriesSending:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.h_))
						});
					case l.GetCategoriesSuccess:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.Jz, s.categoriesList))
						});
					case l.GetCategoriesFailed:
						return c({}, o, {
							categoriesList: c({}, (0, r.pG)(o.categoriesList, e.yc))
						});
					case l.GetMetadataSending:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.h_))
						});
					case l.GetMetadataSuccess:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.Jz, s.metadata))
						});
					case l.GetMetadataFailed:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.yc))
						});
					case l.PostMetadataSending:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.h_))
						});
					case l.PostMetadataSuccess:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.Jz, s.metadata))
						});
					case l.PostMetadataFailed:
						return c({}, o, {
							metadata: c({}, (0, r.pG)(o.metadata, e.yc))
						});
					case l.GetRecommendedAppsSending:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.h_))
						});
					case l.GetRecommendedAppsSuccess:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.Jz, s.recommendedAppsList))
						});
					case l.GetRecommendedAppsFailed:
						return c({}, o, {
							recommendedAppsList: c({}, (0, r.pG)(o.recommendedAppsList, e.yc))
						});
					case l.GetAppSending:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.h_))
						});
					case l.GetAppSuccess:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.Jz, s.app))
						});
					case l.GetAppFailed:
						return c({}, o, {
							app: c({}, (0, r.pG)(o.app, e.yc))
						});
					case l.ClearApp:
						return c({}, o, {
							app: {
								value: null,
								status: e._Y.status
							}
						});
					case l.SetUpdatableInstalls:
						return c({}, o, {
							updatableInstallsList: s.updatableInstallsList
						});
					case l.GetDevelopedAppsSending:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.h_))
						});
					case l.GetDevelopedAppsSuccess:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.Jz, s.developedApps))
						});
					case l.GetDevelopedAppsFailed:
						return c({}, o, {
							developedApps: c({}, (0, r.pG)(o.developedApps, e.yc))
						});
					default:
						return o
				}
			}
		},
		"../react/pages/apps/marketplace/types.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				m: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CloudflareAppsToken = "CloudflareAppsToken", r.CloudflareAppsAuthAttempts = "CloudflareAppsAuthAttempts", r
			}({})
		},
		"../react/pages/caching/tracking.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CACHE_PURGE = "submit custom purge", r.TIERED_CACHE = "select tiered cache topology", r.CACHE_ANALYTICS = "load cache analytics data", r
			}({})
		},
		"../react/pages/dns/dns-records/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				U: function() {
					return e
				},
				X: function() {
					return r
				}
			});
			let e = function(c) {
				return c.DNS_RECORD_CREATE = "create DNS records", c.DNS_RECORD_UPDATE = "update DNS records", c.DNS_RECORD_DELETE = "delete DNS records", c.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", c
			}({});
			const r = {
				put: e.DNS_RECORD_UPDATE,
				patch: e.DNS_RECORD_UPDATE,
				delete: e.DNS_RECORD_DELETE
			}
		},
		"../react/pages/email/types.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				BB: function() {
					return r
				},
				Pm: function() {
					return c
				},
				UZ: function() {
					return e
				}
			});
			let e = function(y) {
				return y.ROOT = "root", y.DSTADDRS_CARD = "dstaddrs_card", y.RULES_CARD = "rules_card", y.CATCHALL_CARD = "catchall_card", y.SETTINGS_PAGE = "settings_page", y.WORKERS_PAGE = "workers_page", y
			}({});
			const r = {
				zone: "emailRoutingZone",
				catchAllRule: "emailRoutingCatchAllRule",
				rule: "emailRoutingRule",
				rules: "emailRoutingRules",
				dstAddress: "emailRoutingDestinationAddress",
				dstAddresses: "emailRoutingDestinationAddresses",
				dnsRecord: "emailRoutingDnsRecord",
				dnsRecords: "emailRoutingDnsRecords"
			};
			let c = function(y) {
				return y[y.Verified = 0] = "Verified", y[y.Pending = 1] = "Pending", y[y.Missing = 2] = "Missing", y[y.WorkerNotFound = 3] = "WorkerNotFound", y[y.Unknown = 4] = "Unknown", y[y.Loading = 5] = "Loading", y
			}({});
			const d = {
				dmarcReports: "emailSecurityDmarcReports"
			}
		},
		"../react/pages/firewall/analytics/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AU: function() {
					return a
				},
				Bc: function() {
					return g
				},
				Bd: function() {
					return J
				},
				Bt: function() {
					return o
				},
				Ji: function() {
					return Y
				},
				LO: function() {
					return s
				},
				Pk: function() {
					return h
				},
				WB: function() {
					return ee
				},
				Wd: function() {
					return te
				},
				Zj: function() {
					return j
				},
				e_: function() {
					return p
				},
				hk: function() {
					return $
				},
				jY: function() {
					return S
				},
				kF: function() {
					return re
				},
				kg: function() {
					return w
				},
				oD: function() {
					return C
				},
				pP: function() {
					return f
				},
				q4: function() {
					return L
				},
				qC: function() {
					return _
				}
			});
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../../../../node_modules/@cloudflare/component-filter-bar/es/index.js"),
				c = n("../../../../node_modules/@cloudflare/data-locations/es/index.js"),
				d = n("../../../../node_modules/@cloudflare/cf.util.patterns/index.js"),
				y = n.n(d),
				i = n("../react/common/components/analytics/AnalyticsReport/constants.ts");

			function u(k) {
				for (var z = 1; z < arguments.length; z++) {
					var se = arguments[z] != null ? Object(arguments[z]) : {},
						B = Object.keys(se);
					typeof Object.getOwnPropertySymbols == "function" && B.push.apply(B, Object.getOwnPropertySymbols(se).filter(function(ue) {
						return Object.getOwnPropertyDescriptor(se, ue).enumerable
					})), B.forEach(function(ue) {
						l(k, ue, se[ue])
					})
				}
				return k
			}

			function l(k, z, se) {
				return z = E(z), z in k ? Object.defineProperty(k, z, {
					value: se,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : k[z] = se, k
			}

			function E(k) {
				var z = t(k, "string");
				return typeof z == "symbol" ? z : String(z)
			}

			function t(k, z) {
				if (typeof k != "object" || k === null) return k;
				var se = k[Symbol.toPrimitive];
				if (se !== void 0) {
					var B = se.call(k, z || "default");
					if (typeof B != "object") return B;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (z === "string" ? String : Number)(k)
			}
			const o = {
					unknown: "firewall.analytics.actions.labels.unknown",
					allow: "firewall.analytics.actions.labels.allow",
					bypass: "firewall.analytics.actions.labels.bypass",
					block: "firewall.analytics.actions.labels.drop",
					challenge: "firewall.analytics.actions.labels.challenge",
					jschallenge: "firewall.analytics.actions.labels.jschallenge",
					rewrite: "firewall.analytics.actions.labels.rewrite",
					log: "firewall.analytics.actions.labels.log",
					connection_close: "firewall.analytics.actions.labels.connectionClose",
					challenge_solved: "firewall.analytics.actions.labels.challenge_solved",
					challenge_failed: "firewall.analytics.actions.labels.challenge_failed",
					challenge_bypassed: "firewall.analytics.actions.labels.challenge_bypassed",
					jschallenge_solved: "firewall.analytics.actions.labels.jschallenge_solved",
					jschallenge_failed: "firewall.analytics.actions.labels.jschallenge_failed",
					jschallenge_bypassed: "firewall.analytics.actions.labels.jschallenge_bypassed",
					managed_challenge: "firewall.analytics.actions.labels.managed_challenge",
					skip: "firewall.analytics.actions.labels.skip",
					force_connection_close: "firewall.analytics.actions.labels.force_connection_close"
				},
				s = {
					block: e.Rl.colors.categorical[0],
					allow: e.Rl.colors.categorical[1],
					challenge: e.Rl.colors.categorical[2],
					jschallenge: e.Rl.colors.categorical[3],
					log: e.Rl.colors.categorical[4],
					unknown: e.Rl.colors.categorical[5],
					connection_close: e.Rl.colors.categorical[6],
					bypass: e.Rl.colors.categorical[7],
					managed_challenge: e.Rl.colors.categorical[8],
					rewrite: e.Rl.colors.categorical[9],
					skip: e.Rl.colors.categorical[10],
					force_connection_close: e.Rl.colors.categorical[11]
				},
				g = {
					"Behavioral Analysis": "security_analytics.labels.bot_source.behavioral_analysis",
					Heuristics: "security_analytics.labels.bot_source.heuristics",
					"Machine Learning": "security_analytics.labels.bot_source.machine_learning",
					"Not Computed": "security_analytics.labels.bot_source.not_computed",
					"JS Fingerprinting": "security_analytics.labels.bot_source.js_fingerprinting",
					"Verified Bot": "security_analytics.labels.bot_source.verified_bot",
					"Cloudflare Service": "security_analytics.labels.bot_source.cloudflare_service"
				},
				a = {
					ASN: "asn",
					COUNTRY: "country",
					IP: "ip",
					IP_RANGE: "iprange",
					SECURITY_LEVEL: "securitylevel",
					VALIDATION: "validation",
					ZONE_LOCKDOWN: "zonelockdown",
					WAF: "waf",
					UA_BLOCK: "uablock",
					RATE_LIMIT: "ratelimit",
					FIREWALL_RULES: "firewallrules",
					BIC: "bic",
					HOT: "hot",
					L7DOS: "l7ddos",
					BOT_FIGHT_MODE: "botFight",
					API_SHIELD: "apiShield",
					API_SHIELD_SCHEMA_VALIDATION: "apiShieldSchemaValidation",
					API_SHIELD_TOKEN_VALIDATION: "apiShieldTokenValidation",
					API_SHIELD_SEQUENCE_MITIGATION: "apiShieldSequenceMitigation",
					FIREWALL_CUSTOM: "firewallCustom",
					FIREWALL_MANAGED: "firewallManaged",
					SDD: "sdd",
					DLP: "dlp",
					BOT_MANAGEMENT: "botManagement",
					UNKNOWN: "unknown"
				},
				C = {
					[a.ASN]: e.Rl.colors.categorical[2],
					[a.COUNTRY]: e.Rl.colors.categorical[1],
					[a.IP]: e.Rl.colors.categorical[15],
					[a.IP_RANGE]: e.Rl.colors.categorical[15],
					[a.BOT_MANAGEMENT]: e.Rl.colors.categorical[14],
					[a.SECURITY_LEVEL]: e.Rl.colors.categorical[13],
					[a.ZONE_LOCKDOWN]: e.Rl.colors.categorical[12],
					[a.WAF]: e.Rl.colors.categorical[11],
					[a.FIREWALL_MANAGED]: e.Rl.colors.categorical[11],
					[a.UA_BLOCK]: e.Rl.colors.categorical[10],
					[a.RATE_LIMIT]: e.Rl.colors.categorical[9],
					[a.FIREWALL_RULES]: e.Rl.colors.categorical[8],
					[a.BIC]: e.Rl.colors.categorical[7],
					[a.HOT]: e.Rl.colors.categorical[6],
					[a.DLP]: e.Rl.colors.categorical[5],
					[a.L7DOS]: e.Rl.colors.categorical[4],
					[a.VALIDATION]: e.Rl.colors.categorical[3],
					[a.BOT_FIGHT_MODE]: e.Rl.colors.categorical[2],
					[a.API_SHIELD]: e.Rl.colors.categorical[1],
					[a.API_SHIELD_SCHEMA_VALIDATION]: e.Rl.colors.categorical[1],
					[a.API_SHIELD_TOKEN_VALIDATION]: e.Rl.colors.categorical[1],
					[a.FIREWALL_CUSTOM]: e.Rl.colors.categorical[0],
					[a.UNKNOWN]: e.Rl.colors.gray[5]
				},
				p = {
					[a.ASN]: "firewall.analytics.services.labels.asn",
					[a.COUNTRY]: "firewall.analytics.services.labels.country",
					[a.IP]: "firewall.analytics.services.labels.ip",
					[a.IP_RANGE]: "firewall.analytics.services.labels.ipRange",
					[a.SECURITY_LEVEL]: "firewall.analytics.services.labels.securityLevel",
					[a.VALIDATION]: "firewall.analytics.services.labels.validation",
					[a.ZONE_LOCKDOWN]: "firewall.analytics.services.labels.zoneLockdown",
					[a.WAF]: "firewall.analytics.services.labels.waf",
					[a.UA_BLOCK]: "firewall.analytics.services.labels.uaBlock",
					[a.RATE_LIMIT]: "firewall.analytics.services.labels.rateLimit",
					[a.FIREWALL_RULES]: "firewall.analytics.services.labels.firewallRules",
					[a.BIC]: "firewall.analytics.services.labels.bic",
					[a.HOT]: "firewall.analytics.services.labels.hot",
					[a.UNKNOWN]: "firewall.analytics.services.labels.unknown",
					[a.L7DOS]: "firewall.analytics.services.labels.l7dos",
					[a.BOT_FIGHT_MODE]: "firewall.analytics.services.labels.bot_fight_mode",
					[a.API_SHIELD]: "firewall.analytics.services.labels.apiShield",
					[a.API_SHIELD_SCHEMA_VALIDATION]: "firewall.analytics.services.labels.apiShieldSchemaValidation",
					[a.API_SHIELD_TOKEN_VALIDATION]: "firewall.analytics.services.labels.apiShieldTokenValidation",
					[a.API_SHIELD_SEQUENCE_MITIGATION]: "firewall.analytics.services.labels.apiShieldSequenceMitigation",
					[a.FIREWALL_CUSTOM]: "firewall.analytics.services.labels.firewallCustom",
					[a.FIREWALL_MANAGED]: "firewall.analytics.services.labels.firewallManaged",
					[a.DLP]: "firewall.analytics.services.labels.dlp",
					[a.BOT_MANAGEMENT]: "firewall.analytics.services.labels.botManagement"
				},
				_ = {
					action: {
						label: "firewall.analytics.filters.labels.action",
						type: r.kE.select,
						options: Object.keys(o).filter(k => !["challenge_solved", "challenge_failed", "challenge_bypassed", "jschallenge_solved", "jschallenge_failed", "jschallenge_bypassed", "unknown"].includes(k)),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn]
					},
					botScore: {
						label: "firewall.analytics.filters.labels.botScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.botScore",
						validate: k => {
							const z = parseInt(k, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "botScore"
					},
					botScoreSrcName: {
						label: "firewall.analytics.filters.labels.botScoreSrcName",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: Object.keys(g),
						urlParam: "botScoreSrcName"
					},
					clientAsn: {
						label: "firewall.analytics.filters.labels.clientAsn",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 13335,
						validationMessage: "firewall.analytics.filters.errors.asn",
						validate: k => !isNaN(parseFloat(k)) && isFinite(parseFloat(k)),
						urlParam: "asn"
					},
					clientCountryName: {
						label: "firewall.analytics.filters.labels.clientCountryName",
						type: r.kE.select,
						options: Object.keys(c.zY),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "country"
					},
					clientIP: {
						label: "firewall.analytics.filters.labels.clientIP",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "192.0.2.0",
						validationMessage: "firewall.analytics.filters.errors.ip",
						validate: k => !!k && !!k.length && (d.ipv4.test(k) || d.ipv6.test(k)),
						urlParam: "ip"
					},
					clientRequestHTTPHost: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPHost",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "example.com",
						urlParam: "host"
					},
					clientRequestHTTPMethodName: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPMethodName",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["GET", "POST", "PURGE", "PUT", "HEAD", "OPTIONS", "DELETE", "PATCH", "CONNECT", "TRACE"],
						urlParam: "http-method"
					},
					clientRequestHTTPProtocol: {
						label: "firewall.analytics.filters.labels.clientRequestHTTPProtocol",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["HTTP/1.0", "HTTP/1.1", "HTTP/1.2", "HTTP/2", "HTTP/3", "SPDY/3.1"],
						urlParam: "http-version"
					},
					ja3Hash: {
						label: "firewall.analytics.filters.labels.ja3Hash",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "df669e7ea913f1ac0c0cce9a201a2ec1",
						urlParam: "ja3-hash"
					},
					ja4: {
						label: "firewall.analytics.filters.labels.ja4",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "t13d1516h2_8daaf6152771_b186095e22b6",
						urlParam: "ja4"
					},
					apiGatewayMatchedEndpoint: {
						label: "firewall.analytics.filters.labels.apiGatewayMatchedEndpoint",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						urlParam: "api-matched-endpoint",
						example: "/path/{var1}"
					},
					clientRequestPath: {
						label: "firewall.analytics.filters.labels.clientRequestPath",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "/content",
						urlParam: "path"
					},
					clientRequestQuery: {
						label: "firewall.analytics.filters.labels.clientRequestQuery",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "?example=1",
						urlParam: "query"
					},
					source: {
						label: "firewall.analytics.filters.labels.source",
						type: r.kE.select,
						options: Object.keys(p).filter(k => k !== "unknown"),
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "service"
					},
					rayName: {
						label: "firewall.analytics.filters.labels.rayName",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals],
						example: "1a79a4d60de6718e",
						urlParam: "ray-id",
						parse: k => k.replace(/-[A-Z]{3}$/, "")
					},
					ruleId: {
						label: "firewall.analytics.filters.labels.ruleId",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: 100001,
						urlParam: "rule-id"
					},
					rulesetId: {
						label: "firewall.analytics.filters.labels.rulesetId",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						example: "",
						urlParam: "ruleset-id"
					},
					userAgent: {
						label: "firewall.analytics.filters.labels.userAgent",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.contains, i.Gn.notContains, i.Gn.startsWith, i.Gn.notStartsWith, i.Gn.endsWith, i.Gn.notEndsWith, i.Gn.in, i.Gn.notIn],
						example: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6)...",
						urlParam: "user-agent"
					},
					wafMlAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const z = parseInt(k, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-ml-score"
					},
					wafRceAttackScore: {
						label: "firewall.analytics.filters.labels.wafRceAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafRceAttackScore",
						validate: k => {
							const z = parseInt(k, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-rce-score"
					},
					wafMlSqliAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlSqliAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const z = parseInt(k, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-ml-sqli-score"
					},
					wafMlXssAttackScore: {
						label: "firewall.analytics.filters.labels.wafMlXssAttackScore",
						type: r.kE.string,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.greaterThan, i.Gn.greaterThanOrEqual, i.Gn.lessThan, i.Gn.lessThanOrEqual],
						example: 20,
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.wafMlAttackScore",
						validate: k => {
							const z = parseInt(k, 10);
							return z >= 0 && z <= 100
						},
						urlParam: "waf-ml-xss-score"
					},
					wafAttackScoreClass: {
						label: "firewall.analytics.filters.labels.wafAttackScoreClass",
						type: r.kE.select,
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						options: ["attack", "likely_attack", "likely_clean", "clean", "not_scored"],
						example: "Attack",
						urlParam: "waf-ml-score-class"
					},
					zoneVersion: {
						label: "firewall.analytics.filters.labels.zoneVersion",
						type: r.kE.string,
						example: 3,
						operators: [i.Gn.equals, i.Gn.notEquals],
						parse: k => parseInt(k, 10),
						validationMessage: "firewall.analytics.filters.errors.zoneVersion",
						validate: k => parseInt(k) >= 0,
						urlParam: "zone-version"
					},
					zoneTag: {
						label: "firewall.analytics.filters.labels.zoneTag",
						type: r.kE.string,
						example: "c40df159b74f0e1c0deedf29008ffc04",
						operators: [i.Gn.equals, i.Gn.notEquals, i.Gn.in, i.Gn.notIn],
						urlParam: "zone-id"
					}
				},
				j = (k, z, se, B, ue, X, G) => {
					const P = u({}, _);
					return k || (delete P.botScore, delete P.botScoreSrcName), z || (delete P.ja3Hash, delete P.ja4, delete P.ja4Signals), se || (delete P.wafMlAttackScore, delete P.wafMlSqliAttackScore, delete P.wafMlXssAttackScore, delete P.wafRceAttackScore), X || delete P.wafAttackScoreClass, B || delete P.zoneVersion, ue || delete P.apiGatewayMatchedEndpoint, G || delete P.zoneTag, P
				},
				L = {
					ADD_FILTER: "Add filter",
					EDIT_FILTER: "Edit filter",
					REMOVE_FILTER: "Remove filter",
					CHANGE_TIME: "Change time window",
					FEED_PAGE_FORWARD: "Activity feed next page",
					FEED_PAGE_BACKWARD: "Activity feed previous page",
					FEED_EXPAND_EVENT: "Activity feed expand event",
					FEED_CLOSE_EVENT: "Activity feed close event",
					FEED_EXPAND_MATCHES: "Activity feed expand matches",
					OPEN_DOWNLOAD_MODAL: "Activity feed open download modal",
					CANCEL_DOWNLOAD_MODAL: "Activity feed cancel download modal",
					DOWNLOAD_FROM_DOWNLOAD_MODAL: "Activity feed download from modal",
					DOWNLOAD_FEED: "Activity feed download"
				},
				f = {
					TIMESERIES: "Timeseries Chart",
					DISTRIBUTION: "Source Distribution Chart",
					TOP_N: "Top N",
					FILTER_BAR: "Filter Bar"
				},
				S = "firewall-analytics",
				h = "encrypted_matched_data",
				w = {
					botScore: "cf.bot_management.score",
					clientAsn: "ip.geoip.asnum",
					clientCountryName: "ip.geoip.country",
					clientIP: "ip.src",
					clientRequestHTTPHost: "http.host",
					clientRequestHTTPMethodName: "http.request.method",
					clientRequestHTTPProtocol: "http.request.version",
					clientRequestPath: "http.request.uri.path",
					clientRequestQuery: "http.request.uri.query",
					ja3Hash: "cf.bot_management.ja3_hash",
					ja4: "cf.bot_management.ja4",
					userAgent: "http.user_agent",
					wafMlAttackScore: "cf.waf.score",
					wafAttackScore: "cf.waf.score",
					wafRceAttackScore: "cf.waf.score.rce",
					wafMlSqliAttackScore: "cf.waf.score.sqli",
					wafSqliAttackScore: "cf.waf.score.sqli",
					wafMlXssAttackScore: "cf.waf.score.xss",
					wafXssAttackScore: "cf.waf.score.xss"
				},
				$ = {
					ARGS_GET_NAMES: "http.request.uri.args.names",
					ARGS_GET: "http.request.uri.args",
					ARGS_JSON: "http.request.body.raw",
					ARGS_NAMES: "http.request.uri.args.names or http.request.body.raw",
					ARGS_POST: "http.request.body.raw",
					ARGS: "http.request.uri.args or http.request.body.raw",
					FILES: "Matched a body multipart file",
					QUERY_STRING: "http.request.uri.query",
					REMOTE_ADDR: "ip.src",
					REMOTE_ASN: "ip.geoip.asnum",
					REMOTE_COUNTRY: "ip.geoip.country",
					REQUEST_BODY: "http.request.body.raw",
					REQUEST_FILENAME: "http.request.uri.path",
					REQUEST_HEADERS_NAMES: "http.request.headers.names",
					"REQUEST_HEADERS:HOST": "http.host",
					"REQUEST_HEADERS:REFERER": "http.referer",
					"REQUEST_HEADERS:USER-AGENT": "http.user_agent",
					REQUEST_HEADERS: "http.request.headers",
					REQUEST_LINE: "http.request.method or http.request.uri",
					REQUEST_METHOD: "http.request.method",
					REQUEST_PROTOCOL: "http.request.version",
					REQUEST_URI: "http.request.uri",
					SERVER_PORT: "cf.edge.server_port"
				},
				Y = {
					REQUEST_HEADERS_NAMES: "firewall.activity_log.matched_data.request_headers_names",
					FILES: "firewall.activity_log.matched_data.files",
					ARGS: "firewall.activity_log.matched_data.args",
					ARGS_POST_NAMES: "firewall.activity_log.matched_data.args_post_names",
					ARGS_GET_NAMES: "firewall.activity_log.matched_data.args_get_names",
					ARGS_GET: "firewall.activity_log.matched_data.args_get",
					REQUEST_HEADERS: "firewall.activity_log.matched_data.request_headers"
				},
				re = ["REQUEST_HEADERS:HOST", "REQUEST_HEADERS:REFERER", "REQUEST_HEADERS:USER-AGENT"],
				te = {
					OR: [{
						ruleId_like: "999___"
					}, {
						ruleId_like: "900___"
					}, {
						ruleId: "981176"
					}, {
						AND: [{
							ruleId_notlike: "9_____"
						}, {
							ruleId_notlike: "uri-9_____"
						}]
					}]
				},
				ee = "13335",
				J = "https://developers.cloudflare.com/ddos-protection/best-practices/respond-to-ddos-attacks/"
		},
		"../react/pages/firewall/api-shield/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Fj: function() {
					return l
				},
				kq: function() {
					return u
				},
				xr: function() {
					return E
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e);

			function c(t) {
				for (var o = 1; o < arguments.length; o++) {
					var s = arguments[o] != null ? Object(arguments[o]) : {},
						g = Object.keys(s);
					typeof Object.getOwnPropertySymbols == "function" && g.push.apply(g, Object.getOwnPropertySymbols(s).filter(function(a) {
						return Object.getOwnPropertyDescriptor(s, a).enumerable
					})), g.forEach(function(a) {
						d(t, a, s[a])
					})
				}
				return t
			}

			function d(t, o, s) {
				return o = y(o), o in t ? Object.defineProperty(t, o, {
					value: s,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[o] = s, t
			}

			function y(t) {
				var o = i(t, "string");
				return typeof o == "symbol" ? o : String(o)
			}

			function i(t, o) {
				if (typeof t != "object" || t === null) return t;
				var s = t[Symbol.toPrimitive];
				if (s !== void 0) {
					var g = s.call(t, o || "default");
					if (typeof g != "object") return g;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (o === "string" ? String : Number)(t)
			}
			let u = function(t) {
				return t.MAIN = "API Shield", t.SCHEMA_VALIDATION = "Schema Validation", t.JWT_VALIDATION = "JWT Validation", t.SEQUENCE_ANALYTICS = "Sequence Analytics", t.SEQUENCE_RULES = "Sequence Rules", t.ENDPOINT_MANAGEMENT = "Endpoint Management", t.API_DISCOVERY = "API Discovery", t.SETTINGS = "Settings", t
			}({});
			const l = {
					[u.ENDPOINT_MANAGEMENT]: {
						listOfEndpoints: "view a page of endpoints",
						deleteEndpoint: "delete an endpoint",
						detailedMetrics: "view detailed endpoint metrics with recommended rate limits",
						createEndpoint: "create an endpoint",
						deployRouting: "deploy routing",
						deleteRouting: "delete routing"
					},
					[u.API_DISCOVERY]: {
						viewDiscoveredEndpoints: "view a page of discovered endpoints",
						saveDiscoveredEndpoint: "save discovered endpoints",
						ignoreOrUnignoreDiscoveredEndpoint: "ignore or unignore discovered endpoints"
					},
					[u.SCHEMA_VALIDATION]: {
						viewSchemasList: "view a list of schemas",
						viewSchemaAdoption: "view which endpoints have adopted which schemas",
						addLearnedSchemaByEndpoint: "add a learned schema on a single endpoint",
						uploadSchema: "upload api schemas to schema validation",
						addLearnedSchemaByHostname: "add a learned schema by hostname",
						downloadSchema: "download an existing schema",
						deleteSchema: "delete an existing schema"
					},
					[u.SEQUENCE_ANALYTICS]: {
						viewSequencesPage: "view a page of sequences"
					},
					[u.SEQUENCE_RULES]: {
						listSequenceRules: "view a list of sequence rules",
						deleteSequenceRule: "delete a sequence rule",
						reorderSequenceRule: "reorder a sequence rule",
						createSequenceRule: "create a sequence rule",
						editSequenceRule: "edit a sequence rule"
					},
					[u.JWT_VALIDATION]: {
						viewJWTRules: "view a page of jwt rules",
						addJWTRule: "add a jwt rule",
						editJWTRule: "edit a jwt rule",
						deleteJWTRule: "delete a jwt rule",
						reprioritizeJWTRule: "reprioritize a jwt rule",
						viewJWTConfigs: "view jwt configs",
						addJWTConfig: "add a jwt config",
						editJWTConfig: "edit a jwt config",
						deleteJWTConfig: "delete a jwt config"
					},
					[u.SETTINGS]: {
						redirectToFirewallRulesTemplate: "redirect to firewall rules",
						redirectToPages: "redirect to uploaded developer portal on pages",
						listSessionIdentifiers: "list session identifiers",
						listRequestsContainingSessionIdentifiers: "list requests containing session identifiers",
						addOrRemoveSessionIdentifiers: "add or remove session identifiers"
					}
				},
				E = ({
					name: t,
					category: o = "user journey",
					product: s = u.MAIN,
					productName: g,
					additionalData: a
				}) => {
					r().sendEvent(t, c({
						category: o,
						product: s,
						productName: g
					}, a || {}))
				}
		},
		"../react/pages/firewall/bots/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				N3: function() {
					return e
				},
				UN: function() {
					return c
				},
				h1: function() {
					return r
				}
			});
			let e = function(d) {
					return d.INITIAL_FETCH_SCORES = "view bots scores distribution", d.FETCH_CONFIGURATION = "view bots configuration page", d.INITIAL_FETCH_TIME_SERIES = "view bots time series analytics", d.INITIAL_FETCH_ATTRIBUTES = "view bots attributes", d.UPDATE_SETTINGS = "update bots settings", d.DELETE_RULE = "delete bots ruleset", d.UPDATE_RULE = "update bots ruleset", d.FETCH_RULES = "view bots ruleset", d.CONFIGURE_BOT_MANAGEMENT = "view bots management", d.WAF_RULES_REDIRECT = "redirect waf rules", d
				}({}),
				r = function(d) {
					return d.PROVIDED_TEMPLATE = "provided template link in detection card", d.CONFIGURE_BOT_MANAGEMENT = "configure bot management link", d.USE_TEMPLATE = "use template", d.CREATE_FIREWALL_RULE = "create firewall rule", d.WAF_RULES = "waf rules", d
				}({});
			const c = "user journey"
		},
		"../react/pages/firewall/page-shield/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			const e = {
				CONFIGURE_PAGE_SHIELD: "configure page shield",
				VIEW_PAGE_SHIELD_SETTINGS: "view page shield settings",
				VIEW_DETECTED_SCRIPTS: "view detected scripts",
				VIEW_DETECTED_CONNECTIONS: "view detected connections",
				VIEW_DETECTED_COOKIES: "view detected cookies",
				MANAGE_PAGE_SHIELD_POLICY: "manage page shield policy",
				VIEW_PAGE_SHIELD_POLICIES: "view page shield policies"
			}
		},
		"../react/pages/firewall/rulesets/tracking.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				QK: function() {
					return e
				},
				dy: function() {
					return r
				},
				sO: function() {
					return c
				},
				x4: function() {
					return d
				}
			});
			let e = function(y) {
				return y.DELETE = "delete", y.CREATE = "create", y.GET = "get", y.UPDATE = "update", y
			}({});
			const r = {
					http_config_settings: "configuration",
					http_request_dynamic_redirect: "redirect",
					http_request_cache_settings: "cache",
					http_request_origin: "origin",
					http_request_late_transform: "modify request header",
					http_request_transform: "rewrite url",
					http_response_headers_transform: "modify response header",
					http_response_compression: "compression",
					http_ratelimit: "rate limiting",
					http_request_firewall_custom: "custom",
					http_request_firewall_managed: "managed"
				},
				c = (y, i) => {
					var u;
					return `${i} ${(u=r[y])!==null&&u!==void 0?u:y} rule${i===e.GET?"s":""}`
				},
				d = () => {
					var y, i;
					return (y = Object.keys(r)) === null || y === void 0 || (i = y.map(u => {
						var l;
						return (l = Object.values(e)) === null || l === void 0 ? void 0 : l.map(E => c(u, E))
					})) === null || i === void 0 ? void 0 : i.flat()
				}
		},
		"../react/pages/firewall/security-analytics/logs/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AS: function() {
					return y
				},
				Gf: function() {
					return t
				},
				IK: function() {
					return o
				},
				Ki: function() {
					return r
				},
				Lz: function() {
					return s
				},
				nT: function() {
					return u
				},
				o4: function() {
					return g
				},
				oY: function() {
					return c
				},
				qH: function() {
					return E
				},
				x3: function() {
					return i
				}
			});
			var e = n("../react/pages/firewall/analytics/constants.ts");
			const r = ["block", "challenge", "jschallenge", "managedChallenge"],
				c = ["miss", "expired", "bypass", "dynamic"],
				d = a => Object.fromEntries(Object.entries(a).map(([C, p]) => [p, C])),
				y = {
					block: "block",
					challenge: "challenge",
					jschallenge: "jschallenge",
					managed_challenge: "managedChallenge"
				},
				i = d(y),
				u = {
					asn: e.AU.ASN,
					country: e.AU.COUNTRY,
					ip: e.AU.IP,
					ipRange: e.AU.IP_RANGE,
					securityLevel: e.AU.SECURITY_LEVEL,
					validation: e.AU.VALIDATION,
					zoneLockdown: e.AU.ZONE_LOCKDOWN,
					waf: e.AU.WAF,
					rateLimit: e.AU.RATE_LIMIT,
					firewallRules: e.AU.FIREWALL_RULES,
					bic: e.AU.BIC,
					hot: e.AU.HOT,
					unknown: e.AU.UNKNOWN,
					l7ddos: e.AU.L7DOS,
					botFight: e.AU.BOT_FIGHT_MODE,
					apiShield: e.AU.API_SHIELD,
					apiShieldSchemaValidation: e.AU.API_SHIELD_SCHEMA_VALIDATION,
					apiShieldTokenValidation: e.AU.API_SHIELD_TOKEN_VALIDATION,
					firewallCustom: e.AU.FIREWALL_CUSTOM,
					firewallManaged: e.AU.FIREWALL_MANAGED,
					dlp: e.AU.DLP,
					botManagement: e.AU.BOT_MANAGEMENT,
					uaBlock: e.AU.UA_BLOCK
				},
				l = d(u),
				E = {
					"Not Computed": "not_computed",
					"Machine Learning": "machine_learning",
					Heuristics: "heuristics",
					"Behavioral Analysis": "behavioral_analysis",
					"JS Fingerprinting": "js_fingerprinting",
					"Verified Bot": "verified_bot",
					"Cloudflare Service": "cloudflare_service"
				},
				t = d(E);
			let o = function(a) {
				return a.SAMPLED = "sampled", a.RAW = "raw", a
			}({});
			const s = "security-analytics-log-explorer";
			let g = function(a) {
				return a.CLICK_ADAPTIVE_SAMPLING = 'click on "adaptive sampling"', a.CLICK_TO_LOG_EXPLORER_DESCRIPTION = 'click on "Go to Log Explorer" in the description', a.CLICK_TO_LOG_EXPLORER_BANNER = 'click on "Go to Log Explorer" in the banner"', a.CLICK_SWITCH_TO_RAW_LOGS = 'click on "Switch to raw logs"', a.CLICK_SWITCH_TO_SAMPLED_LOGS = 'click on "Switch back to sampled logs"', a
			}({})
		},
		"../react/pages/home/alerts/config.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				jk: function() {
					return _
				},
				w8: function() {
					return j
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../react/pages/home/alerts/integrations/pagerduty/routes.ts"),
				c = n("../react/pages/home/alerts/integrations/webhooks/routes.ts"),
				d = n("../react/pages/home/alerts/integrations/redux/entities.ts");

			function y(L) {
				for (var f = 1; f < arguments.length; f++) {
					var S = arguments[f] != null ? Object(arguments[f]) : {},
						h = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(S).filter(function(w) {
						return Object.getOwnPropertyDescriptor(S, w).enumerable
					})), h.forEach(function(w) {
						i(L, w, S[w])
					})
				}
				return L
			}

			function i(L, f, S) {
				return f = u(f), f in L ? Object.defineProperty(L, f, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[f] = S, L
			}

			function u(L) {
				var f = l(L, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function l(L, f) {
				if (typeof L != "object" || L === null) return L;
				var S = L[Symbol.toPrimitive];
				if (S !== void 0) {
					var h = S.call(L, f || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(L)
			}
			const E = "Notifications",
				t = "notification",
				o = (0, e.BC)`/${"accountId"}`,
				s = (0, e.BC)`${o}/notifications`,
				g = (0, e.BC)`${s}/destinations`,
				a = (0, e.BC)`${s}/create`,
				C = (0, e.BC)`${a}/${"alertType"}`,
				p = (0, e.BC)`${s}/edit/${"alertId"}`,
				_ = y({
					account: o,
					alerts: s,
					destinations: g,
					createAlert: a,
					createAlertWithSelection: C,
					editAlert: p
				}, r._j, c._j),
				j = y({
					alert: "accountAlert",
					alerts: "accountAlerts",
					availableAlerts: "availableAlerts",
					availableAlertsForProduct: "availableAlertsForProduct",
					alertsHistory: "accountAlertsHistory"
				}, d.w)
		},
		"../react/pages/home/alerts/integrations/pagerduty/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return i
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${r}/pagerduty/connect`,
				d = (0, e.BC)`${r}/pagerduty/register`,
				y = (0, e.BC)`${r}/pagerduty`,
				i = {
					pagerDutyConnect: c,
					pagerDutyRegister: d,
					pagerDutyList: y
				};
			var u = null
		},
		"../react/pages/home/alerts/integrations/redux/entities.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				w: function() {
					return e
				}
			});
			const e = {
				integrations: "accountAlertIntegrations",
				pagerDuty: "accountAlertsPagerDutyIntegrations",
				pagerDutyRequest: "accountAlertsPagerDutyIntegrationRequest",
				statuspageComponents: "accountAlertsStatuspageComponents",
				webhook: "accountAlertsWebhookIntegration",
				webhooks: "accountAlertsWebhookIntegrations",
				deliveryMechanisms: "alertAccountDeliveryMechanisms"
			}
		},
		"../react/pages/home/alerts/integrations/webhooks/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				_j: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = (0, e.BC)`/${"accountId"}/notifications`,
				c = (0, e.BC)`${r}/webhook/create`,
				d = (0, e.BC)`${r}/webhook/edit/${"webhookId"}`,
				y = {
					webhookCreate: c,
					webhookResource: d
				};
			var i = null
		},
		"../react/pages/home/alerts/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.SECONDARY_DNS_NOTIFICATION_CREATE = "create secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_UPDATE = "update secondary dns error notification", r.SECONDARY_DNS_NOTIFICATION_DELETE = "delete secondary dns error notification", r
			}({})
		},
		"../react/pages/home/configurations/lists/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_LIST = "create list", r.DELETE_LIST = "delete list", r.ADD_LIST_ITEM = "add list item", r.DELETE_LIST_ITEM = "delete list item", r
			}({})
		},
		"../react/pages/home/configurations/secondary-dns/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Y: function() {
					return e
				}
			});
			let e = function(r) {
				return r.PEER_DNS_CREATE = "create peer server", r.PEER_DNS_UPDATE = "update peer server", r.PEER_DNS_DELETE = "delete peer server", r.ZONE_TRANSFER_ENABLE = "enable outgoing zone transfer", r.ZONE_TRANSFER_DISABLE = "disable outgoing zone transfer", r.ZONE_TRANSFER_SUCCESS = "successful outgoing zone transfer", r
			}({})
		},
		"../react/pages/home/domain-registration/bulk-transfer-util.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AA: function() {
					return Ie
				},
				AN: function() {
					return et
				},
				AY: function() {
					return He
				},
				Am: function() {
					return L
				},
				B2: function() {
					return ce
				},
				BB: function() {
					return re
				},
				BF: function() {
					return it
				},
				BQ: function() {
					return K
				},
				Cs: function() {
					return tt
				},
				E8: function() {
					return bt
				},
				Fl: function() {
					return ft
				},
				Fu: function() {
					return J
				},
				G_: function() {
					return _
				},
				Gc: function() {
					return qe
				},
				IO: function() {
					return de
				},
				JK: function() {
					return ge
				},
				K: function() {
					return w
				},
				KN: function() {
					return xe
				},
				LI: function() {
					return I
				},
				LX: function() {
					return Ze
				},
				L_: function() {
					return Ee
				},
				Ly: function() {
					return Gt
				},
				MR: function() {
					return ne
				},
				Mj: function() {
					return M
				},
				NB: function() {
					return Wt
				},
				Or: function() {
					return R
				},
				P5: function() {
					return St
				},
				PE: function() {
					return Ye
				},
				Pd: function() {
					return Zt
				},
				Pk: function() {
					return Je
				},
				Pp: function() {
					return Re
				},
				Q1: function() {
					return ee
				},
				Qr: function() {
					return Ge
				},
				Qv: function() {
					return Qe
				},
				Rp: function() {
					return yt
				},
				Sh: function() {
					return dt
				},
				TZ: function() {
					return W
				},
				Tg: function() {
					return le
				},
				U$: function() {
					return ze
				},
				Uy: function() {
					return Kt
				},
				Vw: function() {
					return z
				},
				W3: function() {
					return Ne
				},
				WR: function() {
					return Ce
				},
				WX: function() {
					return Le
				},
				XF: function() {
					return lt
				},
				Xc: function() {
					return ye
				},
				ZB: function() {
					return te
				},
				Zs: function() {
					return H
				},
				_f: function() {
					return ct
				},
				_k: function() {
					return we
				},
				b4: function() {
					return fe
				},
				c2: function() {
					return F
				},
				cE: function() {
					return At
				},
				fE: function() {
					return Me
				},
				g7: function() {
					return Ue
				},
				hO: function() {
					return Fe
				},
				hV: function() {
					return Ht
				},
				hk: function() {
					return f
				},
				hr: function() {
					return x
				},
				it: function() {
					return ke
				},
				jG: function() {
					return ie
				},
				jN: function() {
					return nt
				},
				m8: function() {
					return P
				},
				nm: function() {
					return Tt
				},
				oW: function() {
					return gt
				},
				oc: function() {
					return j
				},
				pH: function() {
					return Z
				},
				pi: function() {
					return G
				},
				rI: function() {
					return me
				},
				s7: function() {
					return Pe
				},
				sO: function() {
					return Te
				},
				sg: function() {
					return at
				},
				tB: function() {
					return p
				},
				tN: function() {
					return je
				},
				vV: function() {
					return U
				},
				vc: function() {
					return Ke
				}
			});
			var e = n("../../../../node_modules/lodash/lodash.js"),
				r = n.n(e),
				c = n("../../../../node_modules/moment/moment.js"),
				d = n.n(c),
				y = n("../../../common/util/types/src/api/domain.ts"),
				i = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				u = n("../react/utils/translator.tsx"),
				l = n("../react/utils/url.ts"),
				E = n("../react/pages/home/domain-registration/config.ts"),
				t = n("../react/pages/home/domain-registration/registrar.translations.ts"),
				o = n("../react/pages/home/domain-registration/types.ts");

			function s(m) {
				for (var O = 1; O < arguments.length; O++) {
					var pe = arguments[O] != null ? Object(arguments[O]) : {},
						Se = Object.keys(pe);
					typeof Object.getOwnPropertySymbols == "function" && Se.push.apply(Se, Object.getOwnPropertySymbols(pe).filter(function(We) {
						return Object.getOwnPropertyDescriptor(pe, We).enumerable
					})), Se.forEach(function(We) {
						g(m, We, pe[We])
					})
				}
				return m
			}

			function g(m, O, pe) {
				return O = a(O), O in m ? Object.defineProperty(m, O, {
					value: pe,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : m[O] = pe, m
			}

			function a(m) {
				var O = C(m, "string");
				return typeof O == "symbol" ? O : String(O)
			}

			function C(m, O) {
				if (typeof m != "object" || m === null) return m;
				var pe = m[Symbol.toPrimitive];
				if (pe !== void 0) {
					var Se = pe.call(m, O || "default");
					if (typeof Se != "object") return Se;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (O === "string" ? String : Number)(m)
			}

			function p(m) {
				return m.filter(O => O.isSelected).reduce((O, {
					transferFee: pe,
					isZoneEntitlementPresent: Se
				}) => Se ? O : O + pe, 0)
			}

			function _(m) {
				return (m / 100).toLocaleString("en-US", {
					style: "currency",
					currency: "USD"
				})
			}

			function j(m) {
				return m.filter(O => O.registrar.toLowerCase() === "godaddy")
			}
			const L = "MMM D, YYYY";

			function f(m, O, pe, Se) {
				var We, $e, pt, Et, _t, Ot, Pt, It, Dt, wt, Lt, Mt, Rt, kt, $t, Nt, jt, Ut, vt, Bt, xt;
				const Vt = (((We = O.fees) === null || We === void 0 ? void 0 : We.registration_fee) !== "Unsupported" && (($e = O.fees) === null || $e === void 0 ? void 0 : $e.registration_fee) || 0) * 100,
					Yt = (((pt = O.fees) === null || pt === void 0 ? void 0 : pt.transfer_fee) !== "Unsupported" && ((Et = O.fees) === null || Et === void 0 ? void 0 : Et.transfer_fee) || 0) * 100,
					Qt = (((_t = O.fees) === null || _t === void 0 ? void 0 : _t.registration_fee) !== "Unsupported" && ((Ot = O.fees) === null || Ot === void 0 ? void 0 : Ot.registration_fee) || 0) * 100,
					Jt = (((Pt = O.fees) === null || Pt === void 0 ? void 0 : Pt.renewal_fee) !== "Unsupported" && ((It = O.fees) === null || It === void 0 ? void 0 : It.renewal_fee) || 0) * 100,
					Xt = (((Dt = O.fees) === null || Dt === void 0 ? void 0 : Dt.redemption_fee) !== "Unsupported" && ((wt = O.fees) === null || wt === void 0 ? void 0 : wt.redemption_fee) || 0) * 100,
					Ve = m[O.name];
				return {
					name: O.name,
					zone: Ve,
					entitlements: pe,
					registryCheck: Se,
					nameservers: O.name_servers,
					isAvailable: O.available,
					lastKnownStatus: O.last_known_status,
					authCode: O.auth_code,
					isEnterpriseZone: (Ve == null || (Lt = Ve.plan) === null || Lt === void 0 ? void 0 : Lt.legacy_id) === "enterprise",
					isActiveZone: (Ve == null ? void 0 : Ve.status) === "active",
					corResponsesPending: O.cor_responses_pending,
					isCorLocked: O.cor_locked,
					corLockedUntil: O.cor_locked_until ? d()(O.cor_locked_until).format(L) : null,
					isFullZone: (Ve == null ? void 0 : Ve.type) == o.xd.Full,
					isLocked: O.locked,
					registrar: O.current_registrar || E.JM,
					zoneId: Ve == null ? void 0 : Ve.id,
					currentExpiration: d()(O.expires_at).format(L),
					newExpiration: d()(O.expires_at).add(1, "year").format(L),
					wholesaleCost: Vt,
					transferFee: Yt,
					registrationFee: Qt,
					renewalFee: Jt,
					redemptionFee: Xt,
					lastEntitledAt: O.last_entitled_at ? new Date(O.last_entitled_at) : null,
					isZoneEntitlementPresent: Array.isArray(pe) && !!pe.find(qt => qt.id === E.g5 && qt.allocation.value === !0),
					transferAuthCode: "",
					authCodeStatus: O.transfer_in && h(O.transfer_in) || o.BJ.Pending,
					autoTransferStatus: o._n.Pending,
					transferConditions: O.transfer_conditions,
					transferApiCallStatus: o.Yh.Pending,
					transferIn: O.transfer_in,
					transferOut: O.transfer_out,
					autoRenew: O.auto_renew === !0,
					lastTransferredAt: O.last_transferred_at,
					createdAt: O.created_at,
					paymentExpiresAt: d()(O.payment_expires_at).isValid() ? d()(O.payment_expires_at) : d()(O.expires_at).isValid() ? d()(O.expires_at) : "",
					contactIds: {
						[o.l2.Administrator]: (Mt = O.contacts) === null || Mt === void 0 || (Rt = Mt.administrator) === null || Rt === void 0 ? void 0 : Rt.id,
						[o.l2.Billing]: (kt = O.contacts) === null || kt === void 0 || ($t = kt.billing) === null || $t === void 0 ? void 0 : $t.id,
						[o.l2.Registrant]: (Nt = O.contacts) === null || Nt === void 0 || (jt = Nt.registrant) === null || jt === void 0 ? void 0 : jt.id,
						[o.l2.Technical]: (Ut = O.contacts) === null || Ut === void 0 || (vt = Ut.technical) === null || vt === void 0 ? void 0 : vt.id
					},
					landing: O.landing,
					whois: O.whois,
					emailVerified: O.email_verified,
					materialChanges: $(O.material_changes),
					corChanges: O.cor_changes ? re(Object.assign(s({}, S), O.cor_changes)) : {},
					registryStatuses: O.registry_statuses ? O.registry_statuses.split(",") : null,
					domainProtectionServices: {
						status: (Bt = O.domain_protection_services) === null || Bt === void 0 ? void 0 : Bt.status
					},
					deletion: {
						isDeletable: O == null || (xt = O.deletion) === null || xt === void 0 ? void 0 : xt.is_deletable
					},
					premiumType: O == null ? void 0 : O.premiumType,
					fees: O == null ? void 0 : O.fees
				}
			}
			const S = {
				id: "",
				first_name: "",
				organization: "",
				address: "",
				city: "",
				state: "",
				zip: "",
				country: "",
				phone: "",
				email: "",
				fax: "",
				last_name: "",
				address2: "",
				email_verified: "",
				extensions: {}
			};

			function h(m) {
				switch (m.enter_auth_code) {
					case o.lW.OK:
						return o.BJ.Valid;
					case o.lW.NEEDED:
						return o.BJ.Pending;
					case o.lW.UNKNOWN:
						return o.BJ.Pending;
					case o.lW.REJECTED:
						return o.BJ.Error;
					case o.lW.TRYING:
						return o.BJ.Pending
				}
				return o.BJ.Pending
			}

			function w(m) {
				let O = m.extensions;
				(O == null ? void 0 : O.application_purpose) && (O == null ? void 0 : O.nexus_category) && (m.extensions = {
					nexusCategory: O.nexus_category,
					applicationPurpose: O.application_purpose
				});
				let pe = s({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					first_name: m.firstName,
					organization: m.organization,
					address: m.address1,
					city: m.city,
					state: m.state || "N/A",
					zip: m.zip,
					country: m.country,
					phone: m.phone,
					email: m.email,
					fax: "",
					last_name: m.lastName,
					address2: m.address2,
					email_verified: m.emailVerified
				}, m.extensions ? {
					extensions: {
						nexus_category: m.extensions.nexusCategory,
						application_purpose: m.extensions.applicationPurpose
					}
				} : {});
				return D(pe)
			}

			function $(m) {
				let O = [];
				const pe = {
					id: "",
					first_name: "firstName",
					organization: "organization",
					address: "address1",
					city: "city",
					state: "state",
					zip: "zip",
					country: "country",
					phone: "phone",
					email: "email",
					fax: "fax",
					last_name: "lastName",
					address2: "address2",
					email_verified: "emailVerified",
					extensions: null
				};
				for (const Se in m) {
					const We = m[Se],
						$e = pe[We];
					O.push($e)
				}
				return O
			}
			const Y = m => {
				if (!m) return null;
				let O = m;
				return m.includes("C31") && (O = "C31"), m.includes("C32") && (O = "C32"), O
			};

			function re(m) {
				return s({}, typeof m.id == "string" ? {
					id: m.id
				} : {}, {
					firstName: m.first_name,
					organization: m.organization,
					address1: m.address,
					city: m.city,
					state: m.state,
					zip: m.zip,
					country: m.country,
					phone: m.phone.trim(),
					email: m.email.trim(),
					lastName: m.last_name,
					address2: m.address2,
					emailVerified: m.email_verified
				}, m.extensions ? {
					extensions: {
						nexusCategory: Y(m.extensions.nexus_category),
						applicationPurpose: m.extensions.application_purpose
					}
				} : {})
			}

			function te(m = {}) {
				const O = {
					name: "",
					zoneId: "",
					zone: s({
						id: "",
						name: "",
						status: "pending",
						plan: s({
							id: "free",
							legacy_id: "free",
							name: "Free",
							price: 0,
							frequency: "monthly",
							currency: "usd",
							is_subscribed: !0,
							can_subscribe: !0,
							legacy_discount: !1,
							externally_managed: !1
						}, m.zone && m.zone.plan || {}),
						type: o.xd.Full
					}, m.zone || {}),
					emailVerified: !1,
					nameservers: [],
					isCorLocked: !1,
					corLockedUntil: null,
					corResponsesPending: 0,
					isEnterpriseZone: !1,
					autoRenew: !1,
					isActiveZone: !0,
					isFullZone: !0,
					isAvailable: !1,
					isLocked: !0,
					currentExpiration: "",
					newExpiration: "",
					wholesaleCost: 8.79,
					transferFee: 8.79,
					registrationFee: 8.79,
					renewalFee: 10.76,
					redemptionFee: 10.76,
					lastEntitledAt: null,
					isZoneEntitlementPresent: null,
					registrar: "",
					autoTransferStatus: o._n.Pending,
					transferAuthCode: "",
					authCodeStatus: o.BJ.Pending,
					transferApiCallStatus: o.Yh.Pending,
					transferConditions: s({
						exists: !0,
						supported_tld: !0,
						not_secure: !0,
						not_waiting: !0,
						not_started: !0,
						not_premium: !0
					}, m.transferConditions || {}),
					transferIn: s({
						unlock_domain: o.lW.UNKNOWN,
						disable_privacy: o.lW.UNKNOWN,
						enter_auth_code: o.lW.UNKNOWN,
						approve_transfer: o.lW.UNKNOWN,
						accept_foa: o.lW.UNKNOWN,
						can_cancel_transfer: !1
					}, m.transferIn || {}),
					lastTransferredAt: "",
					paymentExpiresAt: "",
					contactIds: {},
					landing: {
						eligible: !1,
						enabled: !1
					},
					whois: {
						raw: "",
						privacy: !0
					},
					materialChanges: [],
					corChanges: {},
					registryStatuses: null,
					deletion: {
						isDeletable: !1
					},
					premiumType: o.Vs.Not_Premium,
					fees: null
				};
				return Object.assign(O, m)
			}

			function ee(m = {}) {
				return Object.assign({
					firstName: "",
					lastName: "",
					address1: "",
					address2: "",
					city: "",
					state: "",
					zip: "",
					country: "",
					organization: "",
					phone: "",
					email: "",
					emailVerified: !1,
					extensions: void 0
				}, m)
			}

			function J(m) {
				const O = E.Py.concat(E.ui).reduce((pe, Se) => s({}, pe, {
					[Se]: []
				}), {});
				return m.forEach(pe => {
					let Se = k(pe.registrar);
					Se in O || (Se = E.ui), at(pe.name) && (Se = "uk"), O[Se].push(pe)
				}), Object.keys(O).sort((pe, Se) => pe.localeCompare(Se)).map(pe => ({
					registrar: pe,
					domains: O[pe]
				})).filter(pe => pe.domains.length > 0)
			}

			function k(m) {
				return m == null ? void 0 : m.toLowerCase().replace(/\s|,|\./g, "")
			}

			function z(m) {
				if (!m || !m.registrar) return "unknown";
				if (at(m.name)) return "uk";
				const O = k(m.registrar);
				return O in E.gM ? O : "unknown"
			}

			function se(m, O) {
				return m.filter(pe => k(pe.registrar) === k(O))
			}
			const B = [];

			function ue(m) {
				return B.some(O => m.endsWith("." + O))
			}

			function X(m) {
				return !m.isEnterpriseZone || !Array.isArray(m.entitlements) ? !1 : !!m.entitlements.find(({
					id: O,
					allocation: pe
				}) => O === E.g5 && pe.value === !0)
			}

			function G(m) {
				var O;
				const pe = [o.rj.CLIENT_HOLD, o.rj.SERVER_HOLD, o.rj.SERVER_TRANSFER_PROHIBITED, o.rj.PENDING_DELETE, o.rj.PENDING_TRANSFER, o.rj.CLIENT_TRANSFER_PROHIBITED];
				let Se = !1,
					We = null;
				return (O = m.registryStatuses) === null || O === void 0 || O.some($e => {
					pe.includes($e) && (We = $e, Se = !0)
				}), [Se, We]
			}

			function P(m, O = []) {
				var pe;
				if (!m) return [!1, t.keys.cannot_transfer_default];
				if (m.zone.status !== "active") return [!1, t.keys.cannot_transfer_zone_not_active];
				if (!m.isFullZone && !X(m)) return [!1, t.keys.cannot_transfer_zone_not_eligible];
				if (m.registrar === "Cloudflare") return [!1, t.keys.cannot_transfer_domain_on_cf];
				if (m.isAvailable) return [!1, t.keys.cannot_transfer_domain_available];
				if (!m.transferConditions) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if ((pe = m.registryCheck) === null || pe === void 0 ? void 0 : pe.premium) return [!1, t.keys.cannot_transfer_domain_premium];
				if (Z(m)) return [!1, t.keys.cannot_transfer_domain_transfer_in_progress];
				let Se;
				for (Se in m.transferConditions)
					if (!m.transferConditions[Se]) return [!1, t.keys.cannot_transfer_domain_transfer_conditions];
				if (ue(m.name) && !O.some(pt => m.name.endsWith("." + pt))) return [!1, t.keys.cannot_transfer_domain_tld_not_supported];
				const [We, $e] = G(m);
				return We && $e ? [!1, t.keys.cannot_transfer_domain_registry_status[$e]] : [!0, ""]
			}

			function Z(m) {
				var O, pe;
				return !!m.transferIn && !((O = m.transferConditions) === null || O === void 0 ? void 0 : O.not_started) && !!(at(m.name) || ((pe = m.registryStatuses) === null || pe === void 0 ? void 0 : pe.includes(o.rj.PENDING_TRANSFER)))
			}

			function Q(m) {
				return !!m.registrar && !!m.currentExpiration
			}

			function ce(m) {
				const [O] = P(m);
				return Q(m) ? xe(m) ? o.M5.InProgressOrOnCF : O ? o.M5.Supported : o.M5.Unsupported : o.M5.Unknown
			}

			function F(m) {
				return m.transferIn && [o.lW.REJECTED, o.lW.NEEDED].includes(m.transferIn.enter_auth_code) || !1
			}

			function ne(m) {
				return m.registrar === "Cloudflare"
			}

			function me(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.AUTO_RENEW_PERIOD))
			}

			function M(m) {
				return !!(m == null ? void 0 : m.includes(o.rj.PENDING_TRANSFER))
			}
			const A = "Invalid date";

			function R(m) {
				return m.newExpiration === A ? "Unavailable" : m.newExpiration
			}

			function W(m) {
				return m.currentExpiration === A ? "Unavailable" : m.currentExpiration
			}

			function oe(m) {
				const O = !!(m.lastEntitledAt && m.isZoneEntitlementPresent === null);
				return [m.newExpiration, m.currentExpiration].some(Se => Se === A) || O || m.isEnterpriseZone && !m.isFullZone && !Array.isArray(m.entitlements)
			}

			function ve(m) {
				return m.transferIn && m.transferIn.approve_transfer === EApiTransferStatus.REJECTED || !1
			}

			function De(m) {
				return m.transferIn && m.transferIn.can_cancel_transfer || !1
			}

			function Ie(m) {
				return m.substring(m.indexOf("."))
			}

			function x(m) {
				return m.map(O => O.name).map(O => Ie(O)).filter((O, pe, Se) => !Se.includes(O, pe + 1))
			}

			function fe(m) {
				if (E.no) return [!0, ""];
				if (!ne(m)) return [!1, o.ok.NotOnCF];
				if (m.isCorLocked) return [!1, m.corLockedUntil ? o.ok.CorLockedUntil : o.ok.CorLock];
				if (m.lastTransferredAt) {
					const O = d()(m.lastTransferredAt),
						pe = d().duration(d()().diff(O)).as("days"),
						Se = at(m.name);
					if (pe < (Se ? 1 : 60)) return [!1, Se ? o.ok.RecentTransferUK : o.ok.RecentTransfer]
				}
				if (m.createdAt) {
					const O = d()(m.createdAt);
					if (d().duration(d()().diff(O)).as("days") < 60) return [!1, o.ok.RecentCreation]
				}
				return [!0, ""]
			}

			function Le(m) {
				return !!(E.Bc || m.transferOut)
			}

			function xe(m) {
				return Ue(m) || ne(m)
			}

			function je(m) {
				return !Ue(m) && ne(m)
			}

			function Ue(m) {
				return !m || m.lastKnownStatus === "pendingTransfer" || m.lastKnownStatus === "transferFOAPending" || !ne(m) && m.transferConditions && !m.transferConditions.not_started || !1
			}

			function Ye(m) {
				return !(ue(m.name) || m.transferConditions && !m.transferConditions.supported_tld)
			}

			function Qe(m) {
				return (m == null ? void 0 : m.includes("/")) ? !0 : m.split("").some(O => O.charCodeAt(0) > 123)
			}

			function ot(m, O) {
				return m.filter(pe => !O.has(pe.name))
			}

			function Je(m) {
				switch (m) {
					case "1&1internetse":
						return "1&1 Ionos";
					case "enom":
						return "Enom";
					case "godaddycomllc":
						return "GoDaddy";
					case "namecheap":
						return "Namecheap";
					case "networksolutions":
						return "Network Solutions";
					case "uk":
						return "UK"
				}
			}

			function tt(m) {
				const O = k(m);
				return E.gM[O] || "unknown"
			}

			function Ke(m) {
				return d()(m.paymentExpiresAt).isBefore(d()())
			}

			function nt(m) {
				return m.transferIn && m.transferIn.enter_auth_code === o.lW.REJECTED || !1
			}

			function Xe(m) {
				return transferOnboardingRegistrarWhitelist.some(O => O === k(m.registrar))
			}

			function ge(m) {
				const O = ["CU", "KP", "IR", "SY"];
				return m.filter(pe => !O.includes(pe.code))
			}

			function le(m) {
				if (!!m) return `${m.charAt(0).toUpperCase()}${m.slice(1)}${m.charAt(m.length-1)==="."?"":"."}`
			}

			function he(m) {
				var O;
				return ((O = m.transferConditions) === null || O === void 0 ? void 0 : O.not_secure) === !1
			}

			function D(m) {
				const O = {};
				for (const [pe, Se] of Object.entries(m)) {
					if (Se && typeof Se == "string") {
						Object.assign(O, {
							[pe]: Se.trim()
						});
						continue
					}
					Object.assign(O, {
						[pe]: Se
					})
				}
				return O
			}

			function H(m) {
				return d()(m).add(40, "days")
			}

			function Ee(m) {
				const O = m.paymentExpiresAt || m.payment_expires_at,
					pe = H(O);
				return d()().isBetween(O, pe)
			}

			function Me(m) {
				var O;
				return !Array.isArray(m.registryStatuses) && !(0, e.isString)(m.registryStatuses) ? !1 : (O = m.registryStatuses) === null || O === void 0 ? void 0 : O.includes(o.rj.REDEMPTION_PERIOD)
			}

			function Re(m) {
				return [".us"].includes(m)
			}

			function ke(m) {
				return [".us"].includes(m)
			}

			function Fe(m) {
				switch (m) {
					case ".us":
						return Be();
					default:
						return []
				}
			}

			function Ne(m) {
				switch (m) {
					case ".us":
						return be;
					default:
						return {}
				}
			}
			const be = {
				[o.A9.P3]: [o.Fi.C11]
			};

			function Be() {
				return [{
					name: o.IP.application_purpose,
					label: o.rb.application_purpose,
					options: Object.entries(o.A9).map(([m, O]) => ({
						value: m,
						label: O
					})),
					display: {
						columns: 3,
						rowsOnDesktop: 3
					}
				}, {
					name: o.IP.nexus_category,
					label: o.rb.nexus_category,
					options: Object.entries(o.Fi).map(([m, O]) => ({
						value: m,
						label: O
					}))
				}]
			}

			function Ze(m, O, pe) {
				return O[O.length - 1][pe] === m[pe]
			}

			function Ge(m) {
				return Boolean(Object.keys(m).length === 0)
			}

			function it(m) {
				return d()().add(m, "year").format(L)
			}

			function ct({
				accountName: m
			}) {
				var O;
				const pe = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+/;
				return ((O = m.toLowerCase().match(pe)) === null || O === void 0 ? void 0 : O[0]) || ""
			}

			function U(m) {
				return !!m.match(i.default.email)
			}

			function ie(m) {
				return m === "Registration banned zone error"
			}

			function ye(m) {
				return m == null ? void 0 : m.startsWith("Quote error")
			}

			function Te(m) {
				return m === (0, u.ZP)(t.keys.registration_checkout_trademark_notice_error_message)
			}

			function we(m) {
				return m === "DNS conflict"
			}

			function ze(m) {
				return m === y.W7.PENDING_UPDATE
			}

			function qe(m) {
				return m ? Object.values(y.wR).filter(O => O !== y.wR.OFFBOARDED).includes(m) : !1
			}

			function Pe(m) {
				return m ? [y.wR.LOCKED, y.wR.ONBOARDED, y.wR.ONBOARDING_INITIATED, y.wR.PENDING_REGISTRY_LOCK, y.wR.PENDING_REGISTRY_UNLOCK, y.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function Ct(m) {
				return m ? y.wR.UNLOCKED === m : !1
			}

			function T(m) {
				return m ? y.wR.LOCKED === m : !1
			}

			function I(m) {
				return m ? y.wR.PENDING_REGISTRY_LOCK === m : !1
			}

			function K(m) {
				return m ? [y.wR.PENDING_REGISTRY_UNLOCK, y.wR.PENDING_UNLOCK_APPROVAL].includes(m) : !1
			}

			function de(m) {
				var O;
				return !1
			}

			function Ce(m) {
				var O;
				return !1
			}

			function et(m) {
				var O;
				return !1
			}

			function lt(m) {
				var O;
				return !1
			}

			function bt(m) {
				var O;
				return !1
			}

			function gt(m) {
				return Object.keys(y.wR).find(O => y.wR[O].toLowerCase() === m.toLowerCase())
			}

			function He(m) {
				var O;
				const pe = (O = gt(m)) === null || O === void 0 ? void 0 : O.toLowerCase();
				return pe ? t.keys.protection_status[pe] : t.keys.protection_status.unknown
			}

			function ut(m) {
				return ["com", "net"].includes(m)
			}

			function ft(m) {
				const O = (0, l.pu)(m);
				return ut(O) ? y.wR.PENDING_REGISTRY_LOCK : y.wR.LOCKED
			}

			function dt(m) {
				return (0, l.pu)(m) === "co" ? 5 : 10
			}

			function Tt(m, O) {
				return O ? 1 : (0, l.pu)(m) === "co" ? 5 : (0, l.pu)(m) === "org" ? 1 : 10
			}

			function at(m) {
				return (0, l.pu)(m) === "uk"
			}

			function At(m) {
				return (0, l.pu)(m) === "us"
			}

			function yt(m) {
				return d()(m).isValid()
			}

			function Gt(m) {
				return ["app", "boo", "channel", "dad", "day", "dev", "esq", "foo", "how", "mov", "new", "nexus", "page", "phd", "prof", "rsvp", "soy"].includes(m)
			}

			function St(m) {
				return !!(m == null ? void 0 : m.id)
			}

			function Wt(m) {
				return m ? ["restorationPending", "restorationAuthFailure", "restorationFailure", "restorationSuccess", "restorationRenewPending", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess", "restorationPendingZoneCreate", "restorationPendingZoneActivate", "restorationFailedZoneCreate", "restorationFailedZoneActivate", "restorationZoneCreateSuccess", "restorationZoneActivateSuccess", "restorationSuccessWithoutReport"].includes(m) : !1
			}

			function Zt(m) {
				return m ? ["restorationAuthFailure", "restorationFailure", "restorationRenewFailure", "restorationRenewSettleFailure", "restorationRenewSuccess"].includes(m) : !1
			}

			function Ht(m) {
				var O;
				return (m == null ? void 0 : m.lastKnownStatus) ? (O = m.lastKnownStatus) === null || O === void 0 ? void 0 : O.includes("deletionIrredeemable") : !1
			}

			function Kt(m) {
				switch (m) {
					case o.Vs.NonStandard_NonStandard:
					case o.Vs.NonStandard_Standard:
					case o.Vs.Standard_Standard:
					case o.Vs.Standard_NonStandard:
						return !0;
					case o.Vs.Not_Premium:
					default:
						return !1
				}
			}
		},
		"../react/pages/home/domain-registration/config.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Bc: function() {
					return t
				},
				Hv: function() {
					return G
				},
				JM: function() {
					return d
				},
				Py: function() {
					return u
				},
				WK: function() {
					return s
				},
				dq: function() {
					return p
				},
				g5: function() {
					return g
				},
				gM: function() {
					return i
				},
				gf: function() {
					return E
				},
				jk: function() {
					return X
				},
				no: function() {
					return o
				},
				uY: function() {
					return l
				},
				ui: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js"),
				r = n("../flags.js"),
				c = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs");
			const d = "Unknown",
				y = "unknown",
				i = {
					godaddycomllc: "godaddycomllc",
					namecheap: "namecheap",
					enom: "enom",
					networksolutions: "networksolutions",
					"1&1internetse": "1&1internetse",
					uk: "uk"
				},
				u = Object.keys(i),
				l = !0,
				E = (0, r.J8)("registrar_mock_data") || !1,
				t = (0, r.J8)("registrar_mock_transfer_out") || !1,
				o = (0, r.J8)("registrar_show_unlock_ui") || !1,
				s = 250,
				g = "cf_registrar.enabled",
				a = "registrar.transfer-onboarding",
				C = document.location.search.includes("domain_transfer_onboarding"),
				p = P => !!(C || (0, c.z1)(a)(P) || (0, r.J8)("domain_transfer_onboarding")),
				_ = null,
				j = "@abcABC1234567890123456",
				L = (0, e.BC)`/${"accountId"}`,
				f = (0, e.BC)`${L}/add-site`,
				S = (0, e.BC)`${L}/domains`,
				h = (0, e.BC)`${S}/${"zoneName"}`,
				w = (0, e.BC)`${h}/configuration`,
				$ = (0, e.BC)`${h}/contacts`,
				Y = (0, e.BC)`${S}/pricing`,
				re = (0, e.BC)`${S}/protection`,
				te = (0, e.BC)`${S}/register`,
				ee = (0, e.BC)`${te}/checkout`,
				J = (0, e.BC)`${te}/success`,
				k = (0, e.BC)`${S}/tlds`,
				z = (0, e.BC)`${S}/transfer`,
				se = (0, e.BC)`${S}/transfer/${"zoneName"}`,
				B = (0, e.BC)`/registrar/accounts/verify_email`,
				ue = (0, e.BC)`/registrar/domains/verify_email`,
				X = {
					addSite: f,
					domains: S,
					domainsDomain: h,
					domainsDomainConfiguration: w,
					domainsDomainContacts: $,
					domainsPricing: Y,
					domainsProtection: re,
					domainsRegister: te,
					domainsRegisterCheckout: ee,
					domainsRegisterSuccess: J,
					domainsTlds: k,
					domainsTransfer: z,
					domainsTransferZone: se,
					registrarAccountsVerifyEmail: B,
					registrarDomainsVerifyEmail: ue
				},
				G = {
					domains: (0, e.BC)`/accounts/${"accountId"}/registrar/domains/${"domainName"}`
				}
		},
		"../react/pages/home/domain-registration/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				J: function() {
					return o
				},
				U: function() {
					return t
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				r = n.n(e),
				c = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				d = n.n(c),
				y = n("../react/pages/home/domain-registration/bulk-transfer-util.ts");

			function i(s) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), C.forEach(function(p) {
						u(s, p, a[p])
					})
				}
				return s
			}

			function u(s, g, a) {
				return g = l(g), g in s ? Object.defineProperty(s, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = a, s
			}

			function l(s) {
				var g = E(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function E(s, g) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			let t = function(s) {
				return s.REGISTER_DOMAIN_SEARCH_SUBMIT = "search domain", s.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN = "select domain from search", s.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION = "select payment option", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE = "click complete purchase button", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT = "purchase attempt", s.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED = "purchase completed", s.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT = "Billing address country select toggle", s.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS = "verify address", s.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD = "select payment method", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS = "domain on cart has trademark claims", s.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS = "click expand trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE = "click disagree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE = "click agree trademark claims button", s.REGISTER_DOMAIN_CHECKOUT_ERROR = "error registering domain", s.TRANSFER_DOMAIN_CHANGE_STEP = "Transfer Step", s.RENEW_DOMAIN_COMPLETED = "domain renewal completed", s.RESTORE_DOMAIN_INIT = "click to open domain restore modal", s.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL = "click to close domain restore modal", s.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL = "open domain restore add payment method modal", s.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL = "close domain restore add payment method modal", s.RESTORE_DOMAIN_FAILURE = "domain restore failed", s.RESTORE_DOMAIN_COMPLETED = "domain restore completed", s.DOMAIN_DELETE_INIT = "click to begin domain delete", s.DOMAIN_DELETE_COMPLETED = "domain deletion completed sucessfully", s.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS = "domain deletion failed because user does not have permissions", s.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE = "domain deletion failed because user submitted invalid confirmation code", s.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON = "domain deletion failed for unknown reason", s.DOMAIN_DELETE_CONFIRM_DELETE = "click to delete domain", s.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL = "click cancel and closes confirm modal", s.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE = "click to re-send confirmation code", s.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL = "click cancel and closes verification modal", s.DOMAIN_DELETE_WARNING_MODAL_CONTINUE = "click to continue with domain deletion", s.DOMAIN_DELETE_CLOSE_WARNING_MODAL = "click cancel and closes warning modal", s
			}({});

			function o(s, g, a) {
				if (!(g == null ? void 0 : g.name)) return null;
				d().sendEvent(s, i({
					domain: {
						name: g.name,
						premium: (0, y.Uy)(g == null ? void 0 : g.premiumType),
						paymentExpiresAt: r()(g == null ? void 0 : g.paymentExpiresAt).format()
					},
					category: "registrar"
				}, a))
			}
		},
		"../react/pages/home/domain-registration/types.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				$F: function() {
					return p
				},
				A9: function() {
					return E
				},
				BJ: function() {
					return y
				},
				Fi: function() {
					return l
				},
				IP: function() {
					return t
				},
				Kh: function() {
					return _
				},
				M5: function() {
					return g
				},
				Vs: function() {
					return L
				},
				Yh: function() {
					return d
				},
				_n: function() {
					return c
				},
				l2: function() {
					return s
				},
				lW: function() {
					return e
				},
				ok: function() {
					return a
				},
				pT: function() {
					return j
				},
				rb: function() {
					return o
				},
				rj: function() {
					return C
				},
				xd: function() {
					return r
				}
			});
			let e = function(f) {
					return f.OK = "ok", f.NEEDED = "needed", f.PENDING = "pending", f.TRYING = "trying", f.UNKNOWN = "unknown", f.REJECTED = "rejected", f
				}({}),
				r = function(f) {
					return f.Full = "full", f.Partial = "partial", f
				}({}),
				c = function(f) {
					return f.Pending = "pending", f.Error = "error", f.InProgress = "in-progress", f.AuthCodeAcquired = "auth-code-acquired", f
				}({}),
				d = function(f) {
					return f.Success = "success", f.Pending = "pending", f.Error = "error", f.AuthCodeFailed = "auth-code-failed", f.AuthCodeRequired = "auth-code-required", f
				}({}),
				y = function(f) {
					return f.Valid = "valid", f.Invalid = "fail", f.Error = "error", f.Pending = "pending", f.Loading = "loading", f
				}({}),
				i = function(f) {
					return f.C11 = "C11", f.C21 = "C21", f.C31 = "C31", f.C32 = "C32", f
				}({}),
				u = function(f) {
					return f.P1 = "P1", f.P2 = "P2", f.P3 = "P3", f.P4 = "P4", f.P5 = "P5", f
				}({}),
				l = function(f) {
					return f.C11 = "I am a US citizen, permanent resident of the US, or my primary domicile is in the US", f.C21 = "I represent a US corporation", f.C31 = "I represent a non-US corporation that has an office in the US or regularly conducts business in the US", f
				}({}),
				E = function(f) {
					return f.P1 = "Business for profit", f.P2 = "Business not for profit", f.P3 = "Personal", f.P4 = "Education", f.P5 = "Civic or Government", f
				}({}),
				t = function(f) {
					return f.nexus_category = "nexus_category", f.application_purpose = "application_purpose", f
				}({}),
				o = function(f) {
					return f.nexus_category = "Which of the below best describes you?", f.application_purpose = "What this domain will be used for?", f
				}({}),
				s = function(f) {
					return f.Registrant = "registrant", f.Administrator = "administrator", f.Technical = "technical", f.Billing = "billing", f
				}({}),
				g = function(f) {
					return f.Supported = "supported", f.Unsupported = "unsupported", f.Unknown = "unknown", f.InProgressOrOnCF = "in progress or on CF", f
				}({}),
				a = function(f) {
					return f.CorLock = "Pending change of registrant", f.CorLockedUntil = "Transfer Locked until %LOCKED_UNTIL_DATE%. Reason: Recent change to the registrant contact.", f.NotOnCF = "Domain not on Cloudflare", f.RecentCreation = "Domain created within 60 days", f.RecentTransfer = "Domain transferred within 60 days", f.RecentTransferUK = "UK domain transferred within 24 hours", f
				}({}),
				C = function(f) {
					return f.OK = "ok", f.PENDING_TRANSFER = "pendingtransfer", f.CLIENT_TRANSFER_PROHIBITED = "clienttransferprohibited", f.SERVER_TRANSFER_PROHIBITED = "servertransferprohibited", f.CLIENT_RENEW_PROHIBITED = "clientrenewprohibited", f.SERVER_RENEW_PROHIBITED = "serverrenewprohibited", f.CLIENT_UPDATE_PROHIBITED = "clientupdateprohibited", f.CLIENT_HOLD = "clienthold", f.SERVER_HOLD = "serverhold", f.PENDING_DELETE = "pendingdelete", f.ADD_PERIOD = "addperiod", f.AUTO_RENEW_PERIOD = "autorenewperiod", f.RENEW_PERIOD = "renewperiod", f.TRANSFER_PERIOD = "transferperiod", f.REDEMPTION_PERIOD = "redemptionperiod", f.PENDING_RESTORE = "pendingrestore", f
				}({}),
				p = function(f) {
					return f.SUCCESS = "success", f.PENDING = "pending", f.ERROR = "error", f
				}({}),
				_ = function(f) {
					return f.RESTORATION_PENDING = "restorationPending", f.RESTORATION_AUTH_FAILURE = "restorationAuthFailure", f.RESTORATION_FAILURE = "restorationFailure", f.RESTORATION_SUCCESS = "restorationSuccess", f.RESTORATION_RENEW_PENDING = "restorationRenewPending", f.RESTORATION_RENEW_FAILURE = "restorationRenewFailure", f.RESTORATION_RENEW_SETTLE_FAILURE = "restorationRenewSettleFailure", f.RESTORATION_RENEW_SUCCESS = "restorationRenewSuccess", f.RESTORATION_PENDING_ZONE_CREATE = "restorationPendingZoneCreate", f.RESTORATION_PENDING_ZONE_ACTIVATE = "restorationPendingZoneActivate", f.RESTORATION_FAILED_ZONE_CREATE = "restorationFailedZoneCreate", f.RESTORATION_FAILED_ZONE_ACTIVATE = "restorationFailedZoneActivate", f.RESTORATION_ZONE_CREATE_SUCCESS = "restorationZoneCreateSuccess", f.RESTORATION_ZONE_ACTIVATE_SUCCESS = "restorationZoneActivateSuccess", f.RESTORATION_SUCCESS_WITHOUT_REPORT = "restorationSuccessWithoutReport", f
				}({}),
				j = function(f) {
					return f.TransferInWaitingFOA = "DomainStatus:TransferInWaitingFoa", f.RegistrationPendingAuthorization = "DomainStatus:RegistrationPendingAuthorization", f.RegistrationPendingZoneCreate = "DomainStatus:RegistrationPendingZoneCreate", f.RegistrationPendingRegister = "DomainStatus:RegistrationPendingRegister", f.RegistrationPendingZoneActivate = "DomainStatus:RegistrationPendingZoneActivate", f.RegistrationPendingSettlement = "DomainStatus:RegistrationPendingSettlement", f.RegistrationFailedAuthorization = "DomainStatus:RegistrationFailedAuthorization", f.RegistrationFailedQuote = "DomainStatus:RegistrationFailedQuote", f.RegistrationFailedRegister = "DomainStatus:RegistrationFailedRegister", f.RegistrationFailedZoneCreate = "DomainStatus:RegistrationFailedZoneCreate", f.RegistrationFailedZoneActivate = "DomainStatus:RegistrationFailedZoneActivate", f.RegistrationFailedSettlement = "DomainStatus:RegistrationFailedSettlement", f.RegistrationActive = "DomainStatus:RegistrationActive", f.DomainRedemptionPeriod = "DomainStatus:RedemptionPeriod", f.Expired = "DomainStatus:Expired", f.ExpiredParked = "DomainStatus:ExpiredParked", f.PendingDelete = "DomainStatus:PendingDelete", f.DeletionInitiated = "DomainStatus:DeletionInitiated", f.DeletionIrredeemable = "DomainStatus:DeletionIrredeemable", f.DomainTerminated = "DomainStatus:DomainTerminated", f.DomainLocked = "DomainStatus:DomainLocked", f.PendingTransfer = "DomainStatus:PendingTransfer", f.PendingRenewal = "DomainStatus:PendingRenewal", f.Unknown = "Unknown", f
				}({}),
				L = function(f) {
					return f.NonStandard_NonStandard = "nonstandard_nonstandard", f.NonStandard_Standard = "nonstandard_standard", f.Standard_Standard = "standard_standard", f.Standard_NonStandard = "standard_nonstandard", f.Not_Premium = "not_premium", f
				}({})
		},
		"../react/pages/home/rulesets/ddos/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				F: function() {
					return e
				}
			});
			let e = function(r) {
				return r.TOGGLE_TCP_PROTECTION = "toggle advanced tcp protection", r.CREATE_SYN_PROTECTION_RULE = "create syn protection rule", r.UPDATE_SYN_PROTECTION_RULE = "update syn protection rule", r.CREATE_TCP_FLOW_PROTECTION_RULE = "create tcp flow protection rule", r.UPDATE_TCP_FLOW_PROTECTION_RULE = "update tcp flow protection rule", r.CREATE_SYN_PROTECTION_FILTER = "create syn protection filter", r.UPDATE_SYN_PROTECTION_FILTER = "update syn protection filter", r.CREATE_TCP_FLOW_PROTECTION_FILTER = "create tcp flow protection filter", r.UPDATE_TCP_FLOW_PROTECTION_FILTER = "update tcp flow protection filter", r
			}({})
		},
		"../react/pages/hyperdrive/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				KO: function() {
					return u
				},
				L9: function() {
					return t
				},
				N3: function() {
					return E
				},
				zE: function() {
					return l
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e);

			function c(o) {
				for (var s = 1; s < arguments.length; s++) {
					var g = arguments[s] != null ? Object(arguments[s]) : {},
						a = Object.keys(g);
					typeof Object.getOwnPropertySymbols == "function" && a.push.apply(a, Object.getOwnPropertySymbols(g).filter(function(C) {
						return Object.getOwnPropertyDescriptor(g, C).enumerable
					})), a.forEach(function(C) {
						d(o, C, g[C])
					})
				}
				return o
			}

			function d(o, s, g) {
				return s = y(s), s in o ? Object.defineProperty(o, s, {
					value: g,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : o[s] = g, o
			}

			function y(o) {
				var s = i(o, "string");
				return typeof s == "symbol" ? s : String(s)
			}

			function i(o, s) {
				if (typeof o != "object" || o === null) return o;
				var g = o[Symbol.toPrimitive];
				if (g !== void 0) {
					var a = g.call(o, s || "default");
					if (typeof a != "object") return a;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (s === "string" ? String : Number)(o)
			}
			let u = function(o) {
					return o.PURCHASE_WORKERS_PAID = "navigate to workers plan page", o.LIST_CONFIGS = "list hyperdrive configs", o.CREATE_HYPERDRIVE_CONFIG = "create hyperdrive config", o.VIEW_CONFIG_DETAILS = "view hyperdrive config details", o.UPDATE_CACHING_SETTINGS = "update hyperdrive config caching settings", o.DELETE_HYPERDRIVE_CONFIG = "delete hyperdrive config", o.CLICK_HYPERDRIVE_DOCUMENTATION = "click hyperdrive documentation", o.CLICK_GET_STARTED_GUIDE = "click hyperdrive get started guide", o.CLICK_CONNECTIVITY_GUIDES = "click hyperdrive connectivity guides", o.CLICK_QUICK_LINK = "click hyperdrive quick link", o
				}({}),
				l = function(o) {
					return o[o["connection string"] = 0] = "connection string", o[o.manual = 1] = "manual", o
				}({}),
				E = function(o) {
					return o[o.success = 0] = "success", o[o.failure = 1] = "failure", o
				}({});
			const t = (o, s = {}) => {
				r().sendEvent(o, c({}, s, {
					category: "Hyperdrive"
				}))
			}
		},
		"../react/pages/magic/network-monitoring/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				_u: function() {
					return r
				},
				bK: function() {
					return e
				},
				lC: function() {
					return c
				}
			});
			const e = {
					VIEW_RULES: "view rules list",
					CREATE_RULE: "create rule",
					UPDATE_RULE: "update rule",
					DELETE_RULE: "delete rule",
					VIEW_CONFIGURATION: "view configuration",
					CREATE_CONFIGURATION: "create configuration",
					UPDATE_CONFIGURATION: "update configuration",
					DELETE_CONFIGURATION: "delete configuration"
				},
				r = "Magic network monitoring",
				c = "user journey"
		},
		"../react/pages/magic/overview/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				lC: function() {
					return c
				},
				r8: function() {
					return e
				},
				wp: function() {
					return r
				}
			});
			const e = {
					VIEW_ALERTS: "view alerts",
					VIEW_ALERTS_HISTORY: "view alerts history",
					MAGIC_OVERVIEW_ANALYTICS: "load magic overview analytics"
				},
				r = "Magic overview",
				c = "user journey"
		},
		"../react/pages/magic/packet-captures/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				W_: function() {
					return r
				},
				X: function() {
					return e
				},
				lC: function() {
					return c
				}
			});
			const e = {
					VIEW_BUCKETS_LIST: "view buckets list",
					CREATE_BUCKET: "create bucket",
					VALIDATE_BUCKET: "validate bucket",
					DELETE_BUCKET: "delete bucket",
					VIEW_CAPTURES_LIST: "view captures list",
					CREATE_SIMPLE_CAPTURE: "create simple capture",
					CREATE_FULL_CAPTURE: "create full capture",
					VIEW_FULL_CAPTURE: "view full capture",
					DOWNLOAD_SIMPLE_CAPTURE: "download simple capture"
				},
				r = "Magic packet captures",
				c = "user journey"
		},
		"../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				gb: function() {
					return t
				},
				iP: function() {
					return $
				},
				xL: function() {
					return j
				},
				rD: function() {
					return re
				},
				oT: function() {
					return a
				},
				i2: function() {
					return te
				},
				x1: function() {
					return i
				},
				lW: function() {
					return l
				},
				UA: function() {
					return h
				},
				K5: function() {
					return s
				},
				Ii: function() {
					return f
				},
				PJ: function() {
					return Y
				},
				bK: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/style-container/es/index.js"),
				d = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAACGCAYAAADevGYoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABQKSURBVHgB7Z1djBzVlcdPdfeMxx2jDB7YxWBkY9mOyEMWg8co2l2zBgWCtKs1Jo5AK+KxRaJ9AWOUiIXd1Y4/WPZhZeywD/nYDY4deUb+SKxoMXkC40ghH048TpCtOBD3YAQEPJ7GY8/0TE/XzT3Vfbtu13RXV3dVdd26dX5Sa6q73ePxuP99zz3nf841AFl/urc7a24FBgMAbCkQBKEYLDczlVmVwcvu+aXXuVjvAIIg1KRkbINjq/KpeV/+1VP8LomVIBSFAeydObT6GF5nzLSxyag88e8PL4J/e/hmIAiilvy1WRi9NANnRqfgTG4S3v24fD16aRpahTGDizDNr1L8VoKUUXL707lPTWUG85V7Rvejp5h4avrgXUAQSSZIYfb1ZuCWm7qhpycN83syMDmVgp/9pggGzEIqNcO/lsAwmOv3SLH0bYXhVTlxP8PFnuev6cU7J89OwNrPXgcEoTs5LsAzuSl4l4sz99E0/JaL8rejk5CfLLX8vYQwF16fgcU3zbOu+/j1/J6U9fxkwYTjr12BX4x8AplUY5EuuaHb+rCoYrDthSFbrNZDXY+e2sND4q3igcfW9lmh8ZIb5wFBxB1ZmLhi4mr57sfTbQtz+dIeS5h9vV1zhCmDIv3duWvwi9NX4b0PZ2CK36/H2tsXwD18kUTdfWHXeRj9WAiWZ4WH+m9z/vlMmhX3mEb3P4pyzoGTY9YN97JfWbuQhEvEgqCEmeXiW1hZMRcv4qumJMxmtCNSoa+dRz+oihWj3rSZWVfvtVa+qeeRN5eakB4EI7VJfnLJjd3wxBf/Ep548C+AIKJG3l+OcjHiG/zk2att7S/9CFPGj0gFb5ybgPt3nq/e5ympbdND/XvqfR9DvpN55Fd/lzJSLzvNEyjc8orbBwQRNkEmflCYKMRbuCgxpG1XmDJBiFSAHzw1oTAz9s0M37W50d9t1Huw65FTA4Zh/AcJlwiTMDKyjRI/fglSpDKPfytnbUHLsFyKZdbJWWEnhts3ayTctbdfB//92GL4q6VZIIhmdDIjGyRhiVSAQkXBCnhtdqA4tOr7bq9xFazFwOne7sLsU+X9ba1wKaNMyESVkQ2SsEUqaDUUFjQXbIVGiSmEhJssVMjIBkmnRCqzcfc78ONTwr/EctmpzKr8sVX5Zq/zLFiBm3CpFKQPKmZkgyQKkQpe+slH8PX9F6v3TcbWzQ73n/Dy2pYFK7CEy7pehBSslx+nUlC8UD0jGyRRilSAH35rnj1nRyMG2z5zsH/Q6+vbFqyASkHxIE4Z2SBRQaQyK7f+rqmbyQ3fghVQKUgN4pqRDRLVRCpAN9Ouo+9X7zuN/V4ITLACt1LQ//7zEtrfBoQOGdkgUVWkAgyFV259y36gxVC4+jIIAyoFBYZuGdkgUV2kAtyOrHnunO0VZnCiOLx6XTvfKxzBVqBSkDd0z8gGSVxEKvP1A+/BS6/+qXKvuZvJjVAFK6BSUJkkZWSDJI4iFbTjZnKjI4IVuJWCdEpMJTUjGyRxFqmgXTeTGx0VrECXUhBlZINFB5HKtGrs90IkghXEpRREGdnw0E2kAmcoDCV4SEw+9EOkghWoUgqijGxn0FWkAqebCceUFodWPwUBoIRgLTpUCqKMbDToLlKZ/mfPWtujMt6N/V5QR7AVgioFUUY2epIkUkEQbiY3lBOswGspiDKyapFEkQqCcjO5oaxgBY1KQb3ZtPWVMrLRk2SRyvg19ntB+ZiuMPz5HP/ykLMU1EyoGMaiAOWMLF5n56dImAFAIq3F65hSvyi/wjpxZpTxnBJcHVcsnUeJn5AhkdanlTGlfomdYAWpL7+1j0H3JsZS8Pf39cA/3DcfiOAhkboThpvJjdguQybrPsFlayWkxsZNIIKDROodORS23EyQ3g4hEuO4sWsE7SPIex+0nngiaiGRto441kbAIDMYZAmnHvEVbLqQh1KXdUkrbHuQSNsHQ+GdUr0VQ+HicPtdOF6Jr2CHb8/BxrfRPdI7WWCAt2xPbLfkHYNEGgzY4yqHwtlCetsMhE/cU6mWYPFi7LIJ2ZvTQMyFRBosOKbUnimMiyt7KCjrYTPiLVgGIzzPvRQvL344C7eSYKuQSMMBQ2F5pjC6mYoH14xAh4i7YEdFYWpqikHSIZGGD5ZwbFguaOthM+ItWIPlRCn5YkIzxSTSzlFbwkFjfzhuJjdivsIauSSusCTSzoOhsNyFg6FwYSjcEk494i3YruKIKO1c/FDvFZZEGh3YESaHwtaY0qHOhsKCeAu20JOHrrJQdazFkkjVYNcPP6wp4aQhs7kI0RBvwR67Lc9rsTl+tRTvomj7ro93Jw6JVC3QyWTPFO6Mm8mN+Le0MF6LrexjMfEUR8GSSNUkKjeTGxr0oJlneL7uDryaLMQnLCaRqk+njf1e0ECwPFNcQfXSDok0PjiN/VAythUORRcKC+IvWKkWq2Jph0QaP5xuJmtMaQAzhYNAgxVWvTY7Emm8+dLud6QRRCzHSziBzBQOgvgLtgg5KJdiIy3tkEj1APet9kzhaNxMbsRfsOXSTiRtdiRSvVDFzeSGHpPKGKBF0coUh91mRyLVl6iN/V7QZbRgjt8swYbRZkci1Z9OjSn1iy4rbLXNLqh9LIk0OeCY0trjNXgoPKxWKCzQQ7Apk2eKyw6nIAR7+JUJ+OVIHgrTs3WfJ5HqA+5bvyofC8mMfdPDq0OZKRwEeozAN1PV8Rxjef+CfZd/2E5cy0LJ7Kn7PIqUxKoHc91MqcjdTG7oIVhss6sQxAqL34PxXw0Kdv3fLoIH7v50zfPogMEEBf5nE/ElijGlftFDsDhBsUIggpVW6a0be+Ff/ulmGBpcDncsz1Yfx09l3PfgAUj7ZQsbEQvqGvuHojX2e0GnU6Fy4sKPaOXXLuqzs803LeyCF59cAs9w8eK1AIWLeyASbryYO6Y0tQ1igD6CxQmKFfw0AVySBHtT39zy0Bd5eIyrbSPhfmHneevTm1CXKMeU+kWjFdb8RFyNjbcv2MvSaxe4HEsphLvpwRtrhHuSlwjwUN/HuXhJuOoR9ZhSv2gkWKP6S7/kI1Msv3bFrc2rXgMP3mCFyvUSUyhcfHOQcNUhDm4mN/QRrMGqIc3ly8HsYRfM9/brwRVWJKacwsXwC98ktL+NHhXGlPpFoxW2y97D+pigKAt2xa1d0ApCuN99ZhklphSjrrFf8RJOPfQRbNHOEvtpZJ8q2K+9rs2un+W3zHNNTKFw0Q5HdIZ6Y0rjFgoL9BEsttmVD8eyWuzaLe3UlHVu8NdE4JZRvp9nkykx1RnmjilNh3ZCetjoVIctt9lVmGxjlRX9tAjuX73uYZuBwsXEFGaUZURiioQbHqqNKfWLXoK1JiiWwTa7VmlkmggCXGExo1wvMYVvqjXPniOrY8DE1c3khmYrrNQE0EZILNdvF2TDmVohZ5T/+nPXVR/HGUJkdQyWuBn7vaCXYK02uzLtCdYOo1fc0lqGuFVQuLseX2ztbxc1SEx9/40xoEM02wPLaXPGlMY4FBboJVipza6dCYpj+fBXWCe4vz1YSUw5hfu1b+es5FTuo2kSbgtYJZwjdiiMY0pnFBlT6he9BCu12U0WWn+Lyz7iFYvDXWGdCOFiYmqRw+r4mafeslZdEq435o4pXa3MmFK/6CVYR5tdq6KV67cLstH8ajAxtbtidZTXeAzvULjf2H/REi5RH9XHlPpFsyyxRU5ctGqgqMkSLwxv8mIzRGLqYCWjLAsX92b3P38evvnqR2gAICR0cTO5oZ9gfbTZyY3rQZd12kEI9zvPLONJMHscDe5vv3HgIl9xK4kpEq5F3I39XtBRsKPispU2uzBrsH5BqyOKtlFiCoV74uxEove3zjGluoXCAv0Eax2OVaaVNrtmjesq4JZRfoCvLklNTJ2I0ZhSv2i4wtrHT7bSZue1cV0FULi7K1bHeokpIdwkkOP71q85x5QO9Ss7ptQv+glWKu200mbXauN61AirY73EFAr37ufOwQ4eJo5fVfvMXL/sPFLjZrqgg5vJDf0EW+hpy57YTuO6CsgZZbQ6CuFiHfJ5Hibe/a9ntU1MoYXzBz+tGVOqbSgs0E+w5Ta7nLjrVbR+GtdVQFgdd/Bbo8SUTlbHnLOEw4yX427s94KOdVj8qK2usl5LO0E0rqvA3/BVVnerI0YLX/3WaE0onC2knoYEoKdgpTa7yULrK6zfxnUVEBnlh+/p429w+7857lZH/HnRPHJSmtjBDLYhLmNK/aKpYO1MsZcVNqzG9SjBf82h167B/79pwmxpAZhmt3jYIq4ZZfxZ0TRSgcVtTKlf9BSsVIv1Yk9U2TTRDleumfDNI1dgL79NTDLrnKBZMzs+W8o+DczcBw7hxsXqiD/fA8/XuJku6OhmckPTFdaeoOilza4Tjeud4v1LJXhy72VrdZW4AMXineahz+6ZGV6zOcWKy/h7/zRUhBsHqyP+SI4xpSzFMvdBwtBTsOlCS6WdTjauhwX+C944U4At//Ux/OG9ov0wrqjFiTvhmN3JVBj+PLac3cmFuYWHIxdAEq6qVkcMhZ//YY2xf4fuJZx66CnYcptddYJisza7KBrXgwRXRAyBn/v2uBUCVxjnTzwNR1ZuhgYJmeLw6n0zQ3ctk4RroZrVcfzqbE0ozH/e15MWCgs0DYkt7FW2iUUxysZ1v7w/VoIn9o7NDYHBvBeOrPBk0UPhptjMvVwJ6BJSKjGFH0aOMaUX0pDeAglFX8HKbXZNJiiq0LjeDr/+/TQ8uWcMTp+393VgwI+sEPjwypYypxgmzwz3D+L+tl5iCoWLVsdOCxf/7v/5SXVMKYv7mFK/6CzYaptds0yxKo3rXsFV53uvTFjJpQ/GquE8s0LgQ8s3gI+aZFm45cSUU7hodcSMcqcSU/jhsMvet7LKmNL9kGD0FaxU2mlWi1Wtcd0NLNlgCPx/r1yVH77AFeQ5BPaCEK6J37dBYgq9vGHpFj8Q6owp3QEJR+MV1jZPuK2wcarBnr9Y5FngS3IIjDJ6nZdsUKwnIARmh/tPNEpM4d42DKujcDNJxn5m8r8/yaGwQF/Bemyzi0PjunAtbX7hkjME3g5Hlt8rl2zCAhNTXDbLyokpW7hhWB1HsYRjG/txsd2LHxxAaCxYxwTFRqjeuI4hMJZr0LUkMV4JgQehg/CkFHqmBssZZRM7Y+pnlH2cE4Tq3PhizZjSC7xmvA0IC53LOkhOXDQSrcqN6yIEPnmmID3KTqNrKawQuBl8b2vtb1NQGqgkpuYI935ew8X9Z6uJKeFmksaUJtLN5EZiBNso8aRi47oIgZ/kyaWaENg098DhFXd2IgRuhlO4eOYqSIkp7FWtJqY8CtfhZmI6jin1i96CZWbTCYqqNa47jfsVxvltCxxdqVxoKITLL9fVszpiiIzC/fGpvOv+toGxX+txL+2g+QprZ4obTVBUqXEdjfsYAte6lioh8OHl+0BheFLKSkwxxupmlDfufqdhYspp7GcGjFMoXB+9BSvVYhtNUFShcR3fsMffnLSM+3NC4OLVe1UIgb2Cwk1D0ZPVkVWefOPsRE0orPOYUr+oPx7QF9hmVxbAWJ0VVoXGdcu4f/SK0wuMWeAdPASO5bhODJM5uZ5H3hzkitxnQnoQjNRX+GNWCIPCxdtja/vgc0uyNdZDa0zp8Oq9QNRFb8EWedKpsi2tlyWO2jSBIfBz3xmX2+EQNO5vgCMrYz9FQRLuALDSYD3h8v8F6RXoZkon3s3kht4hcXmCYsM2uygb19G437B39XD8xSojElMmGANOq2MFhkkmnM1EobA7mofEgG+FHP88vwMvsc0ue7O9kkbRuI4h8MvHJ5xeYFbpXdV2Yj0yO9yPX06kHz21jH9dnzHhHmYYn+ab1pFPTWb2J2WQmh/0F6w1QTFlCRbb7G6VBdvhxnXsXf3PA/laL7BGIbBXSkOr8csx/tuvnopOSvVGAlbYVF6Mw3fuYzvZuI4h8As/+ETOApeN+7MTvtrhiGShv2BT5ojYqjsF24nGdQyBD79+zekFZlYWuMNeYCL+6C9Yk6+wFS06JyiG3bhuGfe/Oz43BGZsS1ReYCLe6C9YbLMrlcPdOVniEBvX0biPJZu5IXBxS5yMEIRa6C9YbLPb+LZ1iSsqijbbY4RWg8WPhMOv1QmBTXOvil5gIl4kIEtskeO3pXiB+1YUbBiN6xgCv3T0Chz/+ZT88DiYpS1w9DPHgCB8kgzB4gRFoyxYbLPruz4VeON6eeL+WG0IbBn3ZzdQCEwERUJWWPMTO1OMguoKrHFdhMDfOz4ht8OVQ+DSte1UsiGCJCGCNdCUsAmvhFCDaFzHEPjlV6/ONe4DPM33q/uAIAImGYI1WL7iN6+22fltXG9o3McJhhQCEyGRkBXWbrMTExTbbVzHV+GMpRcO5GtDYJxtNHttG4XARJgkQ7BSm51wN7XTuO7au6q5cZ9QA92HsJVxtNmh46nVxnUMgf0eOkUQfkmGYBEmTVB83y69eDFNiN7VIA6dIgg/JMU4AXKb3cg529vr1lbn2rt6mFZVovMkSLD2BMXzf7SPn2zUuE7GfUJFkiNYa4JieTWVmwDqrbCNe1fJuE9ES4JWWLu0IyM3rjc07lPvKqEIyRFsupAXbXYyonEdQ2BcVWvPsbFKNhsoBCZUITlZ4vJpdnNMDdi4ruKhUwRRjwSFxBYo2F75gZ9ykdY17lPvKqEg0R4m02m+9PaP+L94vcufKBv3FT/HhkguyVphGYw2/oii3lVCfZKzh0Wkw7EkYnnoFJFMErbCGjnHChvrQ6eI5JEswUoTFCGBE/eJ+JOskLjQg1libQ+dIgj92Pj2ABBETPkz3wbhzpWGUaIAAAAASUVORK5CYII=",
				y = n("../../../../node_modules/@cloudflare/elements/es/index.js");
			const i = () => r().createElement(u, null, r().createElement("svg", {
					width: "94",
					height: "5",
					viewBox: "0 0 94 5",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M48.416 2.2002L1.99976 2.20021",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.3115 2.2002L59.3767 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M78.7949 2.2002L76.021 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.2773 2.2002L88.5034 2.20019",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				u = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "58px",
						left: "8%",
						right: "85%"
					}
				})),
				l = () => r().createElement(E, null, r().createElement("svg", {
					width: "211",
					height: "71",
					viewBox: "0 0 211 71",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("circle", {
					cx: "175.5",
					cy: "35.5",
					r: "35.5",
					fill: "#044096"
				}), r().createElement("path", {
					d: "M48.7492 28L2.33298 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M66.6457 28L59.7109 28",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M79.1281 28L76.3542 28",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M91.6106 28.0005L88.8366 28.0005",
					stroke: "#E2F5FA",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M164.092 28.2002L100.767 28.2002",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				E = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					top: "20px",
					left: "15%",
					right: "85%",
					desktop: {
						top: "45px",
						left: "22%",
						right: "78%"
					}
				})),
				t = () => r().createElement(o, null, r().createElement(y.Ei, {
					alt: "airplane",
					src: d,
					width: "85%"
				})),
				o = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					width: "90px",
					top: "90px",
					left: "65%",
					right: "35%",
					zIndex: "2",
					desktop: {
						width: "235px"
					}
				})),
				s = () => r().createElement(g, null, r().createElement("svg", {
					width: "104",
					height: "23",
					viewBox: "0 0 104 23",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M93.7248 0H90.2837V7.74245H93.7248V0Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M103.187 9.4624H95.4448V12.9035H103.187V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M93.7248 14.6245H90.2837V22.367H93.7248V14.6245Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M88.5632 9.4624H80.8208V12.9035H88.5632V9.4624Z",
					fill: "white"
				}), r().createElement("path", {
					d: "M36.0259 10.627L2.00024 10.627",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M56.8198 10.627L44.5328 10.627",
					stroke: "#6ECCE5",
					strokeWidth: "4",
					strokeLinecap: "square"
				}), r().createElement("path", {
					d: "M72.8872 10.627L65.326 10.627",
					stroke: "#C3E9F3",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				g = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "130px",
						left: "88%",
						right: "12%"
					}
				})),
				a = () => r().createElement(C, null, r().createElement("svg", {
					width: "13",
					height: "13",
					viewBox: "0 0 13 13",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("ellipse", {
					cx: "6.33672",
					cy: "6.34376",
					rx: "6.33672",
					ry: "6.34376",
					fill: "#086FFF"
				}))),
				C = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					top: "90px",
					left: "20%",
					right: "80%",
					desktop: {
						top: "156px",
						left: "23%",
						right: "77%"
					}
				})),
				p = () => r().createElement(_, null, r().createElement("svg", {
					width: "15",
					height: "15",
					viewBox: "0 0 15 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M7.05981 -0.000243833L0 7.05957L7.05981 14.1194L14.1196 7.05957L7.05981 -0.000243833Z",
					fill: "#6ECCE5"
				}))),
				_ = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					top: "38px",
					left: "83%",
					right: "17%",
					desktop: {
						top: "64px",
						left: "44%",
						right: "56%"
					}
				})),
				j = () => r().createElement(L, null, r().createElement("svg", {
					width: "22",
					height: "22",
					viewBox: "0 0 22 22",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.6922 0H9.30762V7.61541H12.6922V0Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.0002 9.30762H14.3848V12.6922H22.0002V9.30762Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M12.6922 14.3848H9.30762V22.0002H12.6922V14.3848Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M7.61542 9.30762H0V12.6922H7.61542V9.30762Z",
					fill: "#C5EBF5"
				}))),
				L = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "-25px",
						left: "30%",
						right: "70%"
					}
				})),
				f = () => r().createElement(S, null, r().createElement("svg", {
					width: "32",
					height: "32",
					viewBox: "0 0 32 32",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M18.0868 0H13.2637V10.852H18.0868V0Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M31.35 13.2637H20.498V18.0868H31.35V13.2637Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M18.0868 20.498H13.2637V31.35H18.0868V20.498Z",
					fill: "#FBAD41"
				}), r().createElement("path", {
					d: "M10.852 13.2637H0V18.0868H10.852V13.2637Z",
					fill: "#FBAD41"
				}))),
				S = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "70%",
						right: "30%"
					}
				})),
				h = () => r().createElement(w, null, r().createElement("svg", {
					width: "48",
					height: "15",
					viewBox: "0 0 48 15",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M40.25 3.0781e-07L33.1902 7.05981L40.25 14.1196L47.3098 7.05981L40.25 3.0781e-07Z",
					fill: "#6ECCE5"
				}), r().createElement("path", {
					d: "M20.9031 6.61694L1.99994 6.61694",
					stroke: "#0055DC",
					strokeWidth: "4",
					strokeLinecap: "square"
				}))),
				w = (0, c.createComponent)(({
					theme: ee
				}) => ({
					position: "absolute",
					display: "none",
					desktop: {
						display: "block",
						top: "160px",
						left: "20%",
						right: "70%"
					}
				})),
				$ = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 40",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M12.4025 16.0001L10.265 13.8927L8.015 16.1427C8.86952 12.6096 10.8668 9.45753 13.6967 7.17612C16.5265 4.8947 20.0305 3.6116 23.6645 3.52609C27.2984 3.44059 30.8589 4.55747 33.7929 6.70326C36.3879 8.60112 38.3644 11.2099 39.492 14.2014L40.339 13.9224L41.5646 13.5186L42.4174 13.2377C41.0751 9.5683 38.6567 6.37586 35.4641 4.08759C31.9041 1.53603 27.5888 0.257281 23.2134 0.457383C18.838 0.657484 14.6574 2.32478 11.3452 5.19063C8.03295 8.05648 5.78199 11.954 4.955 16.2551L2.63 13.9151L0.5 16.0001L6.5 22.0001L12.4025 16.0001Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M47.5646 24.0049L41.5646 18.0049L35.6471 24.0049L37.7846 26.1124L40.0346 23.8624C39.1898 27.4009 37.1992 30.561 34.3725 32.851C31.5458 35.1411 28.0415 36.4328 24.4048 36.5252C20.768 36.6176 17.2027 35.5055 14.2634 33.3619C11.5162 31.3585 9.45991 28.559 8.36721 25.3515L7.54721 25.6183L6.37385 26.0001L5.5 26.2845C6.79997 30.1536 9.28442 33.5247 12.6114 35.9135C16.1663 38.4659 20.4765 39.7483 24.8486 39.5544C29.2206 39.3605 33.4003 37.7015 36.7153 34.8443C40.0303 31.9872 42.2878 28.098 43.1246 23.8024L45.4346 26.1199L47.5646 24.0049Z",
					fill: "#C5EBF5"
				})),
				Y = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 39 41",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M31.1271 6.20742L32.7396 3.67992C25.4571 -1.00008 13.5396 -1.00008 6.17465 3.67992L7.74965 6.21492C14.2521 2.11242 24.7221 2.11242 31.1271 6.20742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3896 4.67742C15.6941 4.70925 12.0606 5.63105 8.79679 7.36478C5.533 9.09851 2.73499 11.5931 0.639648 14.6374L3.16715 16.2499C5.00538 13.6448 7.43278 11.5105 10.2518 10.0209C13.0708 8.53125 16.2017 7.7283 19.3896 7.67742C28.3896 7.67742 34.1496 13.2724 35.9496 16.2274L38.4996 14.6749C36.4146 11.2174 29.7171 4.67742 19.3896 4.67742Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M19.3971 9.31242C13.4646 9.31242 8.46965 11.8849 5.34215 16.5574C3.6804 19.123 2.6668 22.0539 2.38852 25.0979C2.11024 28.142 2.57563 31.2081 3.74465 34.0324L6.51965 32.8924C5.53401 30.5237 5.1385 27.951 5.36713 25.3956C5.59576 22.8402 6.44168 20.3786 7.83215 18.2224C9.10397 16.3409 10.8316 14.8121 12.8539 13.7787C14.8762 12.7453 17.1272 12.2408 19.3971 12.3124C29.8296 12.3124 32.6421 20.8699 32.8446 24.1699C33.0771 28.0399 30.8646 28.4974 30.4446 28.5424L30.2046 28.5874C29.0973 28.8301 27.9393 28.6509 26.9571 28.0849C26.1096 27.4924 25.5846 26.4049 25.4046 24.8599C24.9171 20.6224 21.6546 18.8599 18.8796 19.0249C15.8271 19.2049 12.5421 21.6724 12.5421 26.6824C12.5421 33.9049 19.1721 39.7174 25.2921 40.9324L25.8921 37.9924C21.5646 37.1449 15.5421 32.7499 15.5421 26.6824C15.5421 23.5999 17.3046 22.1224 19.0521 22.0249C20.4246 21.9424 22.1421 22.7299 22.4271 25.2049C22.7121 27.6799 23.6721 29.4649 25.2771 30.5674C26.9271 31.5879 28.9083 31.9293 30.8046 31.5199C32.7547 31.3024 36.1746 29.4799 35.8372 24.0199C35.5896 19.9024 32.1471 9.31242 19.3971 9.31242Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M11.0346 23.1199C12.2496 19.2499 15.0771 16.9474 18.6471 16.9474C27.0396 16.9474 27.6921 24.1774 27.6921 26.3899H30.6921C30.6921 20.6524 27.5421 13.9474 18.6471 13.9474C13.7646 13.9474 9.75215 17.1274 8.14715 22.1974C7.17854 25.4217 7.25631 28.8699 8.3693 32.0471C9.4823 35.2244 11.5733 37.9674 14.3421 39.8824L16.0296 37.3999C13.7995 35.8488 12.116 33.6332 11.2191 31.069C10.3222 28.5048 10.2576 25.7229 11.0346 23.1199Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M22.9371 31.3399C22.1161 30.5273 21.4749 29.5512 21.055 28.475C20.6351 27.3988 20.4459 26.2464 20.4996 25.0924H17.4996C17.4514 26.6502 17.7256 28.2012 18.3051 29.648C18.8846 31.0948 19.7568 32.4062 20.8671 33.4999C23.4992 35.8335 26.9209 37.0778 30.4371 36.9799C30.7071 36.9799 30.9846 36.9799 31.2546 36.9799L31.1121 33.9799C27.8421 34.1299 24.8571 33.1699 22.9371 31.3399Z",
					fill: "#C5EBF5"
				})),
				re = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 48 28",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M24.0165 14.6841C25.4257 14.6841 26.8032 14.2662 27.9749 13.4833C29.1466 12.7004 30.0598 11.5876 30.5991 10.2857C31.1384 8.98378 31.2795 7.55118 31.0046 6.16907C30.7296 4.78695 30.051 3.5174 29.0546 2.52095C28.0581 1.5245 26.7886 0.84591 25.4065 0.57099C24.0244 0.29607 22.5918 0.437169 21.2898 0.976444C19.9879 1.51572 18.8751 2.42895 18.0922 3.60065C17.3093 4.77235 16.8915 6.14989 16.8915 7.55908C16.893 9.44827 17.6442 11.2596 18.9801 12.5955C20.3159 13.9313 22.1273 14.6825 24.0165 14.6841ZM24.0165 3.43783C24.8323 3.43783 25.6298 3.67976 26.3082 4.13302C26.9865 4.58628 27.5153 5.23052 27.8275 5.98427C28.1397 6.73801 28.2214 7.56741 28.0622 8.36758C27.903 9.16775 27.5102 9.90276 26.9333 10.4796C26.3564 11.0565 25.6214 11.4494 24.8212 11.6086C24.021 11.7677 23.1916 11.686 22.4379 11.3738C21.6841 11.0616 21.0399 10.5329 20.5866 9.85456C20.1334 9.17621 19.8915 8.37868 19.8915 7.56283C19.8915 6.46882 20.3261 5.41961 21.0996 4.64602C21.8732 3.87243 22.9224 3.43783 24.0165 3.43783Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M9.03896 17.7928C10.0773 17.7928 11.0923 17.4849 11.9557 16.9081C12.8191 16.3312 13.492 15.5112 13.8893 14.5519C14.2867 13.5926 14.3907 12.537 14.1881 11.5186C13.9855 10.5002 13.4855 9.56475 12.7513 8.83052C12.017 8.0963 11.0816 7.59628 10.0632 7.39371C9.04478 7.19114 7.98918 7.29511 7.02987 7.69247C6.07056 8.08983 5.25062 8.76273 4.67374 9.62609C4.09687 10.4894 3.78896 11.5045 3.78896 12.5428C3.79035 13.9348 4.34392 15.2693 5.32818 16.2536C6.31245 17.2379 7.647 17.7914 9.03896 17.7928ZM9.03896 10.2928C9.48397 10.2928 9.91898 10.4248 10.289 10.672C10.659 10.9193 10.9474 11.2707 11.1177 11.6818C11.288 12.0929 11.3325 12.5453 11.2457 12.9818C11.1589 13.4182 10.9446 13.8192 10.63 14.1338C10.3153 14.4485 9.91437 14.6628 9.47791 14.7496C9.04146 14.8364 8.58906 14.7919 8.17792 14.6216C7.76679 14.4513 7.41539 14.1629 7.16815 13.7929C6.92092 13.4229 6.78896 12.9878 6.78896 12.5428C6.78956 11.9465 7.02687 11.3748 7.44876 10.9533C7.87066 10.5318 8.44261 10.2951 9.03896 10.2951V10.2928Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M40.5112 18.5751H37.4865C36.3725 18.5741 35.2726 18.8238 34.2682 19.3056C33.2866 18.1392 32.0619 17.2014 30.6798 16.5581C29.2977 15.9147 27.7917 15.5813 26.2672 15.5811H21.7327C20.2109 15.5814 18.7076 15.9137 17.3275 16.5549C15.9474 17.1961 14.7238 18.1308 13.7422 19.2936C12.7413 18.8193 11.6473 18.5739 10.5397 18.5751H7.51571C5.5307 18.5773 3.62759 19.3667 2.22384 20.7701C0.820079 22.1736 0.0302906 24.0766 0.02771 26.0616L1.52771 27.5616H46.5L48 26.0616C47.9976 24.0764 47.2077 22.1732 45.8038 20.7697C44.3998 19.3661 42.4964 18.5769 40.5112 18.5751ZM7.51571 21.5751H10.5397C11.083 21.5778 11.6213 21.6794 12.1282 21.8751C11.7558 22.7322 11.5008 23.6356 11.37 24.5608H3.28571C3.59698 23.6878 4.17049 22.9323 4.92771 22.3978C5.68493 21.8634 6.58885 21.576 7.51571 21.5751ZM14.4007 24.5623C14.7489 22.8744 15.6681 21.358 17.0036 20.2685C18.3391 19.1791 20.0092 18.5831 21.7327 18.5811H26.2672C27.9907 18.5829 29.6609 19.1787 30.9966 20.268C32.3322 21.3573 33.2516 22.8736 33.6 24.5616L14.4007 24.5623ZM36.63 24.5623C36.4999 23.6397 36.2462 22.7389 35.8755 21.8841C36.3887 21.6824 36.935 21.5776 37.4865 21.5751H40.5112C41.4382 21.576 42.3422 21.8636 43.0993 22.3984C43.8564 22.9332 44.4297 23.689 44.7405 24.5623H36.63Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M39.0105 17.7928C40.0488 17.7928 41.0638 17.4849 41.9272 16.9081C42.7906 16.3312 43.4635 15.5112 43.8608 14.5519C44.2582 13.5926 44.3622 12.537 44.1596 11.5186C43.957 10.5002 43.457 9.56475 42.7228 8.83052C41.9885 8.0963 41.0531 7.59628 40.0347 7.39371C39.0163 7.19114 37.9607 7.29511 37.0014 7.69247C36.0421 8.08983 35.2221 8.76273 34.6452 9.62609C34.0684 10.4894 33.7605 11.5045 33.7605 12.5428C33.7619 13.9348 34.3154 15.2693 35.2997 16.2536C36.284 17.2379 37.6185 17.7914 39.0105 17.7928ZM39.0105 10.2928C39.4555 10.2928 39.8905 10.4248 40.2605 10.672C40.6305 10.9193 40.9189 11.2707 41.0892 11.6818C41.2595 12.0929 41.304 12.5453 41.2172 12.9818C41.1304 13.4182 40.9161 13.8192 40.6014 14.1338C40.2868 14.4485 39.8859 14.6628 39.4494 14.7496C39.013 14.8364 38.5606 14.7919 38.1494 14.6216C37.7383 14.4513 37.3869 14.1629 37.1397 13.7929C36.8924 13.4229 36.7605 12.9878 36.7605 12.5428C36.7611 11.9465 36.9984 11.3748 37.4203 10.9533C37.8422 10.5318 38.4141 10.2951 39.0105 10.2951V10.2928Z",
					fill: "#C5EBF5"
				})),
				te = () => r().createElement("svg", {
					width: "50",
					height: "46",
					viewBox: "0 0 40 46",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, r().createElement("path", {
					d: "M26.4256 15.404C26.4243 15.3512 26.4193 15.2986 26.4106 15.2465C26.4031 15.1415 26.3956 15.0365 26.3806 14.939C26.38 14.9109 26.3749 14.8831 26.3656 14.8565C26.3665 14.8288 26.364 14.8011 26.3581 14.774C26.2831 13.9865 26.1781 13.214 26.0731 12.4715C26.0656 12.4715 26.0506 12.479 26.0506 12.4865C25.1206 12.839 24.1756 13.244 23.2081 13.6865C23.2606 14.084 23.3131 14.504 23.3581 14.9315L23.3656 14.939C23.388 15.0806 23.403 15.2233 23.4106 15.3665C23.4406 15.6065 23.4631 15.8465 23.4856 16.094C23.4931 16.214 23.5156 16.334 23.5156 16.4615C23.5156 16.589 23.5381 16.7165 23.5456 16.8365L23.5606 16.829C24.5581 16.349 25.5256 15.929 26.4406 15.5615H26.4481C26.4406 15.509 26.4331 15.464 26.4256 15.404ZM22.0531 16.3565C21.8356 16.229 21.6181 16.109 21.3931 15.9965C20.9731 15.764 20.5531 15.539 20.1256 15.329C20.0814 15.2982 20.0335 15.273 19.9831 15.254C19.9831 15.239 19.9831 15.239 19.9756 15.2465C18.9181 15.794 17.8581 16.3765 16.7956 16.994H16.7656C16.7131 17.0315 16.6531 17.0615 16.5931 17.099C16.5331 17.1365 16.4656 17.174 16.4131 17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856C12.2581 19.784 11.2756 20.444 10.3381 21.1115C9.46812 21.734 8.63562 22.3565 7.86312 22.9865C6.68838 23.9077 5.56424 24.8916 4.49562 25.934C1.00812 29.354 -0.199384 32.0765 0.918116 34.0115H0.925616C2.03562 35.939 4.99062 36.2465 9.70061 34.9415C10.4806 34.724 11.2981 34.469 12.1456 34.169C11.9956 33.1865 11.8606 32.1815 11.7481 31.124C7.11312 32.8115 4.08312 33.104 3.52062 32.519C3.49539 32.0868 3.62281 31.6594 3.88062 31.3115C4.70562 29.894 6.85062 27.5615 10.3306 24.854C10.6606 24.6065 10.9831 24.3515 11.3356 24.104C11.4481 24.014 11.5681 23.9315 11.6881 23.849C11.8831 23.7065 12.0781 23.564 12.2806 23.4215C12.3856 23.3465 12.4981 23.264 12.6106 23.1815C12.7006 23.114 12.7981 23.0465 12.8881 22.979C12.9931 22.904 13.0981 22.8365 13.1956 22.7615L13.2031 22.769C14.1331 22.124 15.1456 21.464 16.2181 20.804C16.8181 20.444 17.4481 20.069 18.0931 19.694C18.7381 19.319 19.3681 18.974 19.9831 18.6365C21.0931 18.0365 22.1731 17.4965 23.2006 16.994C22.8181 16.775 22.4356 16.5665 22.0531 16.3565ZM16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C15.4306 29.624 14.4706 30.0515 13.5556 30.419C13.5516 30.4231 13.5463 30.4257 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C13.9306 33.509 13.9306 33.5015 13.9456 33.5015C14.8681 33.1415 15.8131 32.7365 16.7806 32.2865C16.7356 31.889 16.6756 31.475 16.6306 31.049ZM39.0781 11.975H39.0706C37.9606 10.04 34.9981 9.72502 30.2881 11.03C29.5081 11.2475 28.6981 11.5025 27.8506 11.8025V11.8175C28.0006 12.7925 28.1356 13.805 28.2481 14.855C32.8531 13.1825 35.8756 12.8975 36.4756 13.475C36.7006 14.39 34.4431 17.405 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006C27.0031 23.06 26.8981 23.1275 26.7931 23.2025C25.8631 23.8475 24.8506 24.5 23.7706 25.175C23.1706 25.5425 22.5481 25.91 21.9031 26.285C21.2581 26.66 20.6206 27.005 20.0056 27.3425C18.8881 27.9425 17.8156 28.4975 16.7881 28.985C17.1631 29.2025 17.5381 29.4125 17.9131 29.615C18.0781 29.7125 18.2431 29.8025 18.4081 29.885C18.4883 29.9342 18.5709 29.9793 18.6556 30.02C19.0381 30.23 19.4206 30.4325 19.7956 30.6275C19.8631 30.665 19.9306 30.695 19.9981 30.725L20.0056 30.7325C21.0631 30.1925 22.1281 29.6 23.2006 28.9925L23.2156 28.985L23.2231 28.9775L23.5831 28.7675V28.76L23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1856 27.1925 26.4031 27.0575 26.6131 26.915L26.6956 26.855H26.7031C26.7707 26.8195 26.8359 26.7794 26.8981 26.735C27.3331 26.4575 27.7531 26.1725 28.1731 25.8875C28.3006 25.805 28.4281 25.715 28.5556 25.625C28.8031 25.46 29.0431 25.295 29.2831 25.1225C29.3956 25.0475 29.5006 24.965 29.6131 24.89L29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23C33.3003 22.0761 34.4244 21.0897 35.4931 20.045C36.6912 18.9223 37.7357 17.6463 38.5996 16.25C39.0383 15.5378 39.329 14.7445 39.4546 13.9175C39.5395 13.2464 39.4076 12.5658 39.0781 11.975Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M26.7931 22.784V22.775C26.7931 22.34 26.7856 21.9125 26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13V19.115C26.6956 19.04 26.6956 18.965 26.6881 18.89C26.6868 18.8198 26.6818 18.7497 26.6731 18.68C26.6656 18.545 26.6581 18.41 26.6581 18.275C26.6281 17.795 26.5981 17.33 26.5606 16.865C26.5531 16.775 26.5456 16.685 26.5381 16.6025C26.5156 16.3475 26.4931 16.1075 26.4706 15.86L26.4481 15.6125C26.442 15.5983 26.4394 15.5829 26.4406 15.5675L26.4481 15.56C26.4406 15.5075 26.4331 15.4625 26.4256 15.4025C26.4243 15.3497 26.4193 15.2971 26.4106 15.245C26.4031 15.14 26.3956 15.035 26.3806 14.9375C26.3799 14.9094 26.3749 14.8816 26.3656 14.855C26.3665 14.8273 26.364 14.7996 26.3581 14.7725C26.2831 13.985 26.1781 13.2125 26.0731 12.47C25.8559 10.9959 25.5631 9.534 25.1956 8.09002C23.9731 3.35752 22.2256 0.95752 19.9981 0.95752C17.7706 0.95752 16.0156 3.36502 14.7931 8.09752C14.5906 8.88502 14.4106 9.71752 14.2381 10.6025C15.1681 10.9625 16.1131 11.3525 17.0806 11.78C17.4032 9.38634 18.0991 7.05805 19.1431 4.88002C19.4581 4.34002 19.7506 4.03252 19.9981 3.96502C20.9056 4.22002 22.3831 7.68502 23.2081 13.685C23.2606 14.0825 23.3131 14.5025 23.3581 14.93L23.3656 14.9375C23.388 15.0791 23.403 15.2218 23.4106 15.365C23.4406 15.605 23.4631 15.845 23.4856 16.0925C23.4931 16.2125 23.5156 16.3325 23.5156 16.46C23.5156 16.5875 23.5381 16.715 23.5456 16.835C23.5531 16.955 23.5681 17.0825 23.5831 17.21V17.2175C23.6731 18.3575 23.7406 19.5575 23.7706 20.825C23.7856 21.53 23.8006 22.25 23.8006 22.9925C23.8006 23.735 23.7931 24.4625 23.7706 25.175C23.7331 26.435 23.6806 27.6275 23.5831 28.76V28.7675C23.6506 28.73 23.7181 28.685 23.7856 28.6475C24.0931 28.4675 24.3931 28.295 24.6931 28.1075C24.8581 28.0175 25.0156 27.92 25.1731 27.815C25.2568 27.7712 25.337 27.721 25.4131 27.665C25.6006 27.5525 25.7881 27.44 25.9681 27.3275C26.1481 27.215 26.3356 27.1025 26.5081 26.99C26.5444 26.9668 26.5794 26.9418 26.6131 26.915L26.6956 26.855H26.7031C26.7631 25.67 26.7931 24.455 26.7931 23.2175L26.7931 23.2025C26.7995 23.1302 26.802 23.0576 26.8006 22.985V22.7975L26.7931 22.784ZM25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144L23.5531 29.1515C23.4631 30.269 23.3431 31.3115 23.2156 32.2865C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494L26.0731 33.4865C26.2231 32.504 26.3506 31.4765 26.4481 30.404C26.0746 30.2615 25.6996 30.104 25.3081 29.9315ZM25.7506 35.384C24.8281 35.024 23.8831 34.634 22.9231 34.2065C22.0606 39.0665 20.7931 41.819 20.0131 42.0215C19.1056 41.804 17.6056 38.339 16.7806 32.2865C16.7356 31.889 16.6756 31.4765 16.6306 31.049C16.5556 30.4415 16.4956 29.8115 16.4431 29.1515C16.4281 29.024 16.4206 28.8965 16.4056 28.769C16.3156 27.629 16.2556 26.429 16.2181 25.1615C16.2031 24.4565 16.1956 23.7365 16.1881 22.9865C16.1806 22.2365 16.2031 21.5165 16.2181 20.804C16.2556 19.5515 16.3156 18.359 16.4131 17.2265V17.204C15.3331 17.8265 14.2981 18.464 13.2931 19.1165H13.2856L13.2931 19.1315C13.2331 20.3165 13.1956 21.524 13.1956 22.7615L13.2031 22.769C13.2011 22.769 13.1992 22.7698 13.1978 22.7712C13.1964 22.7726 13.1956 22.7745 13.1956 22.7765C13.1919 22.8465 13.1919 22.9166 13.1956 22.9865V23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864C13.3381 28.0865 13.4281 29.2715 13.5406 30.4265C13.6456 31.4915 13.7731 32.519 13.9306 33.509C14.1329 34.982 14.4209 36.442 14.7931 37.8815C16.0081 42.6215 17.7706 45.0215 19.9906 45.0215H19.9996C21.3346 45.0215 22.4821 44.1665 23.4646 42.4715C24.2378 41.0254 24.8202 39.485 25.1971 37.889C25.3996 37.094 25.5946 36.2615 25.7596 35.384H25.7506ZM15.3406 13.064L14.6206 12.7715C14.3881 12.674 14.1556 12.5765 13.9231 12.4865L13.9156 12.494C13.7731 13.4765 13.6531 14.504 13.5481 15.569C13.9156 15.7265 14.2906 15.884 14.6881 16.0565H14.6956C15.2581 16.2965 15.8356 16.5665 16.4356 16.8515V16.829C16.5331 15.7115 16.6456 14.6765 16.7806 13.7015C16.2931 13.475 15.8206 13.274 15.3406 13.064Z",
					fill: "#C5EBF5"
				}), r().createElement("path", {
					d: "M35.4331 25.904C34.8706 25.3415 34.2631 24.7865 33.6031 24.209H33.5956C32.8231 24.8315 32.0206 25.4465 31.1731 26.069L31.1656 26.0765C31.1581 26.0765 31.1581 26.084 31.1506 26.0915C34.8856 29.219 36.6181 31.6715 36.4006 32.444C35.7631 33.119 32.0506 32.6915 26.4481 30.404C26.0731 30.2615 25.6981 30.104 25.3081 29.9315C24.7381 29.6915 24.1606 29.4215 23.5606 29.144C23.4406 29.084 23.3356 29.0315 23.2231 28.979L23.2156 28.9865C22.1881 28.4915 21.1231 27.944 20.0056 27.344C19.3756 27.0065 18.7456 26.654 18.0931 26.279C17.4406 25.904 16.8181 25.529 16.2181 25.1615C15.1456 24.494 14.1406 23.8415 13.2031 23.204L13.1956 23.1965C13.1881 24.434 13.2256 25.6565 13.2856 26.849V26.864L13.3006 26.8565C14.2981 27.5065 15.3331 28.144 16.4056 28.769L16.7881 28.9865C17.1631 29.204 17.5381 29.414 17.9131 29.6165C18.0781 29.714 18.2431 29.804 18.4081 29.8865C18.4883 29.9357 18.5709 29.9808 18.6556 30.0215C19.0381 30.2315 19.4206 30.434 19.7956 30.629C19.8631 30.6665 19.9306 30.6965 19.9981 30.7265L20.0056 30.734C20.0731 30.7715 20.1406 30.809 20.2081 30.839C20.6656 31.079 21.1231 31.304 21.5806 31.5215C22.1131 31.784 22.6456 32.0315 23.1631 32.2715C23.1791 32.2731 23.1944 32.2782 23.2081 32.2865H23.2156C23.7556 32.534 24.2956 32.7665 24.8281 32.9915C25.2406 33.164 25.6606 33.3365 26.0656 33.494C26.4256 33.6365 26.7856 33.7715 27.1381 33.899C27.4906 34.0265 27.8356 34.1465 28.1806 34.2665C28.2068 34.2695 28.2322 34.2771 28.2556 34.289C28.5931 34.4015 28.9231 34.514 29.2381 34.604C29.5756 34.7165 29.9056 34.814 30.2356 34.904C30.5281 34.9865 30.8131 35.054 31.0906 35.1215C31.3681 35.189 31.6531 35.2565 31.9156 35.309C32.2081 35.369 32.4931 35.429 32.7706 35.474C33.3256 35.564 33.8506 35.6315 34.3306 35.6615C35.2141 35.7338 36.1035 35.6603 36.9631 35.444C37.2573 35.3636 37.5416 35.2504 37.8106 35.1065C38.301 34.8394 38.7084 34.4424 38.9881 33.959C40.1056 32.0315 38.9056 29.324 35.4331 25.904ZM10.3531 21.125H10.3456V21.1175L10.3381 21.11C9.46812 21.7325 8.63562 22.355 7.86312 22.985L7.88561 23C8.65811 23.615 9.46812 24.23 10.3306 24.8525C10.6606 24.605 10.9831 24.35 11.3356 24.1025C11.4481 24.0125 11.5681 23.93 11.6881 23.8475C11.8831 23.705 12.0781 23.5625 12.2806 23.42C12.3781 23.3525 12.4756 23.2775 12.5806 23.21C12.6856 23.1425 12.7756 23.0675 12.8806 22.9925C12.8826 22.9925 12.8845 22.9917 12.8859 22.9903C12.8873 22.9889 12.8881 22.987 12.8881 22.985V22.9775C11.9746 22.3415 11.1331 21.734 10.3531 21.125ZM26.7781 21.485V21.4775C26.7781 21.29 26.7706 21.11 26.7631 20.9225C26.7631 20.825 26.7631 20.7275 26.7556 20.6375C26.7481 20.3 26.7406 19.9625 26.7181 19.6325C26.7181 19.5425 26.7181 19.445 26.7106 19.355C26.7096 19.2798 26.7046 19.2047 26.6956 19.13C25.6981 18.4775 24.6556 17.8475 23.5906 17.2175H23.5831V17.21L23.2006 16.9925C22.8181 16.775 22.4356 16.565 22.0531 16.355C21.8356 16.2275 21.6181 16.1075 21.3931 15.995C20.9731 15.7625 20.5531 15.5375 20.1256 15.3275C20.0814 15.2967 20.0335 15.2715 19.9831 15.2525C19.9831 15.2375 19.9831 15.2375 19.9756 15.245C19.4506 14.9675 18.9331 14.7125 18.4156 14.465C17.8681 14.195 17.3281 13.94 16.7881 13.7H16.7806C16.2931 13.475 15.8206 13.2725 15.3406 13.0625L14.6206 12.77C14.3881 12.6725 14.1556 12.575 13.9231 12.485C13.1956 12.2 12.4831 11.9375 11.7856 11.7125C11.0881 11.4725 10.4056 11.2625 9.75311 11.075C9.46811 11 9.17562 10.925 8.90562 10.865C8.62062 10.7975 8.34311 10.73 8.07311 10.67C7.60812 10.5725 7.16562 10.4975 6.73812 10.4375C6.34812 10.385 5.96562 10.3475 5.61312 10.325C5.31312 10.3025 5.02062 10.3025 4.75062 10.3025C4.48981 10.3046 4.22935 10.3221 3.97062 10.355L3.96312 10.3475C3.63076 10.3889 3.30223 10.4566 2.98062 10.55C2.86812 10.5875 2.75562 10.625 2.65062 10.6625C2.47191 10.7314 2.29888 10.8141 2.13312 10.91C1.89763 11.04 1.68278 11.2043 1.49562 11.3975C1.3031 11.5844 1.1366 11.7963 1.00062 12.0275C-0.116884 13.955 1.08312 16.6625 4.55562 20.0825C5.13312 20.6375 5.74062 21.2075 6.40812 21.77C7.18062 21.1475 7.98312 20.5325 8.83062 19.91C8.83812 19.91 8.83812 19.9025 8.84562 19.9025C5.13312 16.7825 3.39312 14.33 3.59562 13.5275C4.27062 12.875 7.97562 13.3025 13.5481 15.5675C13.9156 15.725 14.2906 15.8825 14.6881 16.055H14.6956C15.2581 16.295 15.8356 16.565 16.4356 16.85C16.5481 16.895 16.6531 16.9475 16.7656 16.9925C16.7697 16.9966 16.7749 16.9992 16.7806 17C17.8081 17.495 18.8756 18.04 19.9831 18.635C20.6131 18.9725 21.2431 19.3325 21.8881 19.7C22.5331 20.0675 23.1631 20.45 23.7706 20.825C24.8506 21.4925 25.8581 22.145 26.7931 22.7825L26.7931 22.775C26.7931 22.3415 26.7856 21.914 26.7781 21.4865L26.7781 21.485ZM32.1106 22.985C31.3381 22.37 30.5131 21.7475 29.6506 21.125C29.3356 21.3725 29.0056 21.6275 28.6606 21.8675C28.6606 21.8695 28.6598 21.8714 28.6584 21.8728C28.657 21.8742 28.6551 21.875 28.6531 21.875C28.1656 22.2425 27.6556 22.6175 27.1081 22.9925H27.1006L27.1081 23C28.0156 23.6375 28.8631 24.26 29.6356 24.8675L29.6431 24.875C29.6474 24.8711 29.6501 24.8658 29.6506 24.86L29.6581 24.8525C30.0856 24.545 30.5056 24.23 30.9181 23.93C30.9706 23.885 31.0231 23.8475 31.0756 23.81C31.4431 23.5475 31.7881 23.27 32.1256 23L32.1106 22.985Z",
					fill: "#C5EBF5"
				}))
		},
		"../react/pages/onboarding/components/AppleLogin/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				A2: function() {
					return u
				},
				He: function() {
					return y
				},
				N$: function() {
					return i
				},
				Qq: function() {
					return c
				},
				ST: function() {
					return d
				},
				wM: function() {
					return r
				}
			});
			var e = n("../react/pages/onboarding/components/AppleLogin/Images/Graphics.tsx");
			const r = {
					PAGE: "apple-login"
				},
				c = "login-apple-jwt",
				d = "cf-test",
				y = {
					"1": "https://gateway.icloud.com/maildomainws/v1/ios/domain/purchaseAdd",
					"2": "https://gateway.icloud.com/maildomainws/v1/domain/purchaseAdd"
				},
				i = l => [{
					title: "apple.sign_in_with_apple.automatic_setup.title",
					description: "apple.sign_in_with_apple.automatic_setup.description",
					icon: e.iP
				}, {
					title: l ? "apple.sign_in_with_apple.customers_first.title" : "apple.sign_in_with_apple.privacy.title",
					description: l ? "apple.sign_in_with_apple.customers_first.description" : "apple.sign_in_with_apple.privacy.description",
					icon: l ? e.rD : e.PJ
				}, {
					title: "apple.sign_in_with_apple.impact.title",
					description: "apple.sign_in_with_apple.impact.description",
					icon: e.i2
				}],
				u = {
					apple: "applejwt",
					cf: "cfjwt"
				}
		},
		"../react/pages/pages/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				_j: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					root: (0, e.BC)`/${"accountId"}/pages`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					newProject: (0, e.BC)`/${"accountId"}/pages/new`,
					newProjectAssetUpload: (0, e.BC)`/${"accountId"}/pages/new/upload`,
					newProjectAssetUploadProjectCreatedNoDeployment: (0, e.BC)`/${"accountId"}/pages/new/upload/${"projectName"}`,
					newProjectStepName: (0, e.BC)`/${"accountId"}/pages/new/project`,
					newProjectWranglerGuide: (0, e.BC)`/${"accountId"}/pages/new/wrangler-guide`,
					newProjectProvider: (0, e.BC)`/${"accountId"}/pages/new/provider/${"provider"}`,
					projectDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}`,
					projectAnalyticsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics`,
					projectAnalytics: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/analytics/${"deploymentType"}(preview|production)`,
					projectDomains: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/domains`,
					projectIntegrationsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations`,
					projectIntegrations: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)`,
					projectIntegrationsSetupFlow: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/integrations/${"deploymentType"}(preview|production)/${"integrationId"}/integrations-setup`,
					projectSettingsRoot: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings`,
					projectSettings: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/${"environment"}(preview|production)`,
					projectBuild: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/build`,
					projectManage: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage`,
					projectSettingsBuildDeployment: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/builds-deployments`,
					projectSettingsEnvironmentVariables: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/environment-variables`,
					projectSettingsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/settings/functions`,
					deploymentCreate: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/deployments/new`,
					deploymentDetails: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}`,
					deploymentDetailsFiles: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/files`,
					deploymentDetailsFunctions: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/functions`,
					deploymentDetailsRedirects: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/redirects`,
					deploymentDetailsHeaders: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/${"deploymentId"}/headers`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					verifyEmail: (0, e.BC)`/${"accountId"}/pages/verify-email`,
					access: (0, e.BC)`/${"accountId"}?zone=access`,
					members: (0, e.BC)`/${"accountId"}/members`,
					zoneOnboarding: (0, e.BC)`/${"accountId"}/add-site`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					signUp: (0, e.BC)`/sign-up/pages`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/pages/default-usage-model`,
					webAnalyticsEnable: (0, e.BC)`/${"accountId"}/pages/view/${"projectName"}/manage#web_analytics_section`,
					webAnalyticsDashboard: (0, e.BC)`/${"accountId"}/web-analytics/overview?siteTag~in=${"siteTag"}`
				},
				c = {
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/pages/account-settings`,
					checkMissing: (0, e.BC)`/pages/assets/check-missing`,
					metrics: (0, e.BC)`/accounts/${"accountId"}/pages/metrics`,
					projects: (0, e.BC)`/accounts/${"accountId"}/pages/projects`,
					projectDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}`,
					purgeCache: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/purge_build_cache`,
					projectDomains: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains`,
					projectDomain: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/domains/${"domainName"}`,
					projectUploadFile: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/file`,
					deploymentCreateTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails`,
					deploymentDeleteTail: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments`,
					deploymentDetails: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/?force=true`,
					deploymentBuildMetadata: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/build_metadata`,
					deploymentFunctions: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/functions`,
					deploymentCancel: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/cancel`,
					deploymentRetry: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/retry`,
					rollbackDeployment: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/rollback`,
					deploymentLogs: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/history/logs`,
					deploymentLiveLogsJWT: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployments/${"deploymentId"}/live`,
					deploymentLiveLogsWS: (0, e.BC)`wss://${"apiHost"}/logs/ws/get?startIndex=${"startIndex"}&jwt=${"jwt"}`,
					deploymentLiveLogsHTTP: (0, e.BC)`https://${"apiHost"}/logs?jwt=${"jwt"}`,
					getDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}`,
					setDeploymentConfig: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deployment_configs/${"environment"}/envs`,
					gitConnections: (0, e.BC)`/accounts/${"accountId"}/pages/connections`,
					gitConnectionsProvider: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}`,
					gitRepos: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos`,
					gitRepo: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}`,
					gitBranches: (0, e.BC)`/accounts/${"accountId"}/pages/connections/${"provider"}/${"username"}/repos/${"repo"}/branches`,
					domainCheck: (0, e.BC)`/accounts/${"accountId"}/pages/domain_check`,
					getSubdomain: (0, e.BC)`/accounts/${"accountId"}/pages/get_subdomain`,
					deployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks`,
					changeDeployHooks: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/deploy_hooks/${"hookId"}`,
					accessApps: (0, e.BC)`/accounts/${"accountId"}/access/apps`,
					accessIdPs: (0, e.BC)`/accounts/${"accountId"}/access/identity_providers`,
					accessOrg: (0, e.BC)`/accounts/${"accountId"}/access/organizations`,
					accessPolicies: (0, e.BC)`/accounts/${"accountId"}/access/apps/${"appId"}/policies`,
					accountMembers: (0, e.BC)`/accounts/${"accountId"}/members?per_page=50&page=${"page"}&direction=desc`,
					bootstrap: (0, e.BC)`/system/bootstrap`,
					zones: (0, e.BC)`/zones`,
					zone: (0, e.BC)`/zones/${"zoneId"}`,
					zoneDNSRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					zoneDNSRecord: (0, e.BC)`/zones/${"zoneId"}/dns_records/${"recordId"}`,
					uploadFiles: (0, e.BC)`/pages/assets/upload`,
					upsertHashes: (0, e.BC)`/pages/assets/upsert-hashes`,
					uploadToken: (0, e.BC)`/accounts/${"accountId"}/pages/projects/${"projectName"}/upload-token`,
					webAnalyticsSiteInfo: (0, e.BC)`/accounts/${"accountId"}/rum/site_info`,
					webAnalyticsSiteTag: (0, e.BC)`/accounts/${"accountId"}/rum/site_info/${"siteTag"}`,
					docsRoot: "https://developers.cloudflare.com",
					buildImageVersions: "https://developers.cloudflare.com/pages/platform/language-support-and-tools.json",
					buildPresets: "https://developers.cloudflare.com/pages/platform/build-configuration.json",
					compatibilityDates: "https://developers.cloudflare.com/workers/platform/compatibility-dates.json"
				},
				d = y => `${y.subdomain}.pages.dev`
		},
		"../react/pages/r2/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return c
				},
				Jg: function() {
					return i
				},
				_j: function() {
					return r
				},
				pZ: function() {
					return u
				},
				vF: function() {
					return y
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
					root: (0, e.BC)`/${"accountId"}/r2`,
					overview: (0, e.BC)`/${"accountId"}/r2/overview`,
					cliQuickStart: (0, e.BC)`/${"accountId"}/r2/cli`,
					createBucket: (0, e.BC)`/${"accountId"}/r2/new`,
					bucketDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}`,
					bucketDetailsSettings: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/settings`,
					bucketDetailsCors: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/cors/${"op"}`,
					bucketMetrics: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/metrics`,
					objectDetails: (0, e.BC)`/${"accountId"}/r2/${"jurisdiction"}/buckets/${"bucketName"}/objects/${"objectKey"}/details`,
					apiTokens: (0, e.BC)`/${"accountId"}/r2/api-tokens`,
					createApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/create`,
					editApiToken: (0, e.BC)`/${"accountId"}/r2/api-tokens/${"tokenId"}`,
					apiTokenSuccess: (0, e.BC)`/${"accountId"}/r2/api-tokens/success`,
					plans: (0, e.BC)`/${"accountId"}/r2/plans`,
					signUp: (0, e.BC)`/sign-up/r2`,
					verifyEmail: (0, e.BC)`/${"accountId"}/r2/verify-email`,
					profile: (0, e.BC)`/profile/api-tokens`,
					billing: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					zoneDNS: (0, e.BC)`/${"accountId"}/${"zoneName"}/dns`,
					migrator: (0, e.BC)`/${"accountId"}/r2/slurper`
				},
				c = {
					canUnsubscribe: (0, e.BC)`/accounts/${"accountId"}/r2/canUnsubscribe`,
					buckets: (0, e.BC)`/accounts/${"accountId"}/r2/buckets`,
					bucket: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}`,
					objects: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects`,
					object: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/objects/${"objectKey"}`,
					bucketUsage: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/usage`,
					bucketAccess: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/policy`,
					bucketCustomDomains: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains`,
					bucketCustomDomain: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/custom_domains/${"domainName"}`,
					bucketCors: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/cors`,
					bucketEventConfig: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration`,
					bucketEventConfigQueue: (0, e.BC)`/accounts/${"accountId"}/event_notifications/r2/${"bucketName"}/configuration/queues/${"queueId"}`,
					bucketLifecycle: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/lifecycle`,
					bucketMultipartUploads: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/uploads`,
					bucketSippy: (0, e.BC)`/accounts/${"accountId"}/r2/buckets/${"bucketName"}/sippy`,
					apiTokens: (0, e.BC)`/user/tokens`,
					apiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					rollApiToken: (0, e.BC)`/user/tokens/${"tokenId"}/value`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					zones: (0, e.BC)`/zones`
				},
				d = t => {
					const o = "r2.cloudflarestorage.com";
					switch (t) {
						case "default":
							return o;
						case "eu":
							return `eu.${o}`
					}
				},
				y = (t, o) => {
					const s = d(o);
					return `https://${t}.${s}`
				},
				i = (t, o, s) => `${y(t,o)}/${s}`,
				u = () => "r2.dev",
				l = t => {
					const o = u();
					return `https://${t}.${o}`
				},
				E = (t, o) => `${l(t)}/${o}`
		},
		"../react/pages/security-center/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				R: function() {
					return e
				},
				v: function() {
					return r
				}
			});
			let e = function(c) {
				return c.LOAD_SCAN_INFO = "load url scan information", c.INITIATE_URL_SCAN = "initiate url scan", c
			}({});
			const r = {
				MANAGE_INSIGHT: "manage security insight",
				EXPAND_INSIGHT_ROW: "expand security issue row",
				CLICK_RESOLVE_BUTTON: "click resolve security issue button",
				FOLLOW_RESOLVE_URL: "follow security issue resolve url",
				CLICK_SCAN_NOW: "run security scan",
				CLICK_EXPORT_INSIGHTS: "click export insights"
			}
		},
		"../react/pages/spectrum/tracking.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.IP_ADDRESS = "create spectrum app using IP address", r.CNAME = "create spectrum app using cname record", r.LB = "create spectrum app using load balancer", r.UPDATE_IP_ADDRESS = "update spectrum app using IP address", r.UPDATE_CNAME = "update spectrum app using cname record", r.UPDATE_LB = "update spectrum app using load balancer", r.DISABLE = "disable spectrum app", r
			}({})
		},
		"../react/pages/traffic/argo/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				V: function() {
					return e
				}
			});
			let e = function(r) {
				return r.ARGO_ENABLEMENT = "change argo enablement", r.ARGO_GEO_ANALYTICS_FETCH = "get argo geo analytics", r.ARGO_GLOBAL_ANALYTICS_FETCH = "get argo global analytics", r
			}({})
		},
		"../react/pages/traffic/load-balancing/tracking.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE_AND_DEPLOY = "create load balancer", r.ANALYTICS = "read analytics", r
			}({})
		},
		"../react/pages/traffic/waiting-rooms/tracking.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				N: function() {
					return e
				}
			});
			let e = function(r) {
				return r.CREATE = "create waiting room", r.UPDATE = "update waiting room", r.EVENTS = "view waiting rooms events", r.ANALYTICS = "view waiting room analytics", r.GENERATE_PREVIEW = "generate waiting room preview link", r
			}({})
		},
		"../react/pages/welcome/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				d: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = {
				default: (0, e.BC)`/${"accountId"}/`,
				addSite: (0, e.BC)`/${"accountId"}/add-site`,
				root: (0, e.BC)`/${"accountId"}/welcome`
			}
		},
		"../react/pages/workers/entityTypes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				D: function() {
					return e
				}
			});
			const e = {
				route: "workersRoute",
				routes: "workersRoutes"
			}
		},
		"../react/pages/zoneless-workers/constants.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				IS: function() {
					return u
				},
				L7: function() {
					return y
				},
				Oj: function() {
					return s
				},
				QV: function() {
					return g
				},
				X$: function() {
					return _
				},
				X6: function() {
					return E
				},
				fE: function() {
					return l
				},
				im: function() {
					return C
				},
				rL: function() {
					return t
				},
				wW: function() {
					return i
				}
			});

			function e(L) {
				for (var f = 1; f < arguments.length; f++) {
					var S = arguments[f] != null ? Object(arguments[f]) : {},
						h = Object.keys(S);
					typeof Object.getOwnPropertySymbols == "function" && h.push.apply(h, Object.getOwnPropertySymbols(S).filter(function(w) {
						return Object.getOwnPropertyDescriptor(S, w).enumerable
					})), h.forEach(function(w) {
						r(L, w, S[w])
					})
				}
				return L
			}

			function r(L, f, S) {
				return f = c(f), f in L ? Object.defineProperty(L, f, {
					value: S,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : L[f] = S, L
			}

			function c(L) {
				var f = d(L, "string");
				return typeof f == "symbol" ? f : String(f)
			}

			function d(L, f) {
				if (typeof L != "object" || L === null) return L;
				var S = L[Symbol.toPrimitive];
				if (S !== void 0) {
					var h = S.call(L, f || "default");
					if (typeof h != "object") return h;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (f === "string" ? String : Number)(L)
			}
			const y = {
					documentation: {
						workersAPI: "https://developers.cloudflare.com/api/operations/worker-script-list-workers",
						root: "https://workers.cloudflare.com/docs",
						configuration: "https://developers.cloudflare.com/workers/configuration",
						compatibilityDates: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/",
						compatibilityFlags: "https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags",
						installWrangler: "https://developers.cloudflare.com/workers/wrangler/install-and-update/",
						wranglerDocs: "https://developers.cloudflare.com/workers/wrangler/",
						wranglerCommands: "https://developers.cloudflare.com/workers/wrangler/commands/",
						starters: "https://developers.cloudflare.com/workers/starters",
						eggheadCourse: "https://egghead.io/courses/introduction-to-cloudflare-workers-5aa3",
						tutorials: "https://developers.cloudflare.com/workers/tutorials",
						examples: "https://developers.cloudflare.com/workers/examples",
						durableObjects: "https://developers.cloudflare.com/workers/learning/using-durable-objects",
						writingWorkers: "https://developers.cloudflare.com/workers/get-started/guide/#5-write-code",
						kv: "https://developers.cloudflare.com/workers/learning/how-kv-works",
						kvBindings: "https://developers.cloudflare.com/workers/runtime-apis/kv#kv-bindings",
						kvNamespaces: "https://developers.cloudflare.com/workers/reference/storage/namespaces/",
						envVars: "https://developers.cloudflare.com/workers/reference/apis/environment-variables/",
						api: "https://workers.cloudflare.com/docs/reference/tooling/api",
						scheduledEventListener: "https://developers.cloudflare.com/workers/runtime-apis/add-event-listener#scheduled-listener",
						errors: "https://developers.cloudflare.com/workers/platform/limits",
						cpuLimits: "https://developers.cloudflare.com/workers/platform/limits/#cpu-runtime",
						pagesFunctionsPricing: "https://developers.cloudflare.com/pages/functions/pricing/",
						pricing: "https://developers.cloudflare.com/workers/platform/pricing",
						computeSetting: "https://developers.cloudflare.com/workers/platform/cron-triggers#green-compute",
						usageModels: "https://developers.cloudflare.com/workers/platform/pricing#usage-models",
						usageModelCLIDocs: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#keys",
						wrangler: "https://developers.cloudflare.com/workers/wrangler/",
						pagesDirectUploadCLI: "https://developers.cloudflare.com/pages/get-started/direct-upload/#wrangler-cli",
						bindings: {
							index: "https://developers.cloudflare.com/workers/runtime-apis/bindings",
							ai: "https://developers.cloudflare.com/workers-ai",
							analyticsEngine: "https://developers.cloudflare.com/analytics/analytics-engine",
							browserRendering: "https://developers.cloudflare.com/browser-rendering",
							d1: "https://developers.cloudflare.com/d1",
							dispatchNamespace: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/get-started/configuration",
							durableObjects: "https://developers.cloudflare.com/durable-objects",
							hyperdrive: "https://developers.cloudflare.com/hyperdrive",
							kv: "https://developers.cloudflare.com/kv/api",
							mTLS: "https://developers.cloudflare.com/workers/runtime-apis/bindings/mtls",
							queues: "https://developers.cloudflare.com/queues/configuration/javascript-apis",
							r2: "https://developers.cloudflare.com/r2/api/workers/workers-api-reference",
							rateLimiting: "https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit",
							service: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings",
							vectorize: "https://developers.cloudflare.com/vectorize/reference/client-api",
							versionMetadata: "https://developers.cloudflare.com/workers/runtime-apis/bindings/version-metadata"
						},
						modules: "https://developers.cloudflare.com/workers/cli-wrangler/configuration#modules",
						routes: "https://developers.cloudflare.com/workers/platform/routes/#matching-behavior",
						routesAndDomains: "https://developers.cloudflare.com/workers/configuration/routing",
						routesDNS: "https://developers.cloudflare.com/workers/platform/triggers/routes/#subdomains-must-have-a-dns-record",
						customDomains: "https://developers.cloudflare.com/workers/platform/routing/custom-domains",
						fetchEvent: "https://developers.cloudflare.com/workers/runtime-apis/fetch-event",
						scheduledWorkers: "https://developers.cloudflare.com/workers/configuration/cron-triggers",
						emailWorkers: "https://developers.cloudflare.com/email-routing/email-workers/",
						cronSyntax: "https://developers.cloudflare.com/workers/platform/cron-triggers#supported-cron-expressions",
						scheduledEvents: "https://developers.cloudflare.com/workers/runtime-apis/scheduled-event",
						languages: "https://developers.cloudflare.com/workers/platform/languages",
						durableObjectsChatExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#websockets-in-durable-objects",
						durableObjectsCounterExample: "https://developers.cloudflare.com/workers/learning/using-durable-objects#example---counter",
						services: "https://developers.cloudflare.com/workers/platform/services",
						serviceBindings: "https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/",
						metrics: {
							root: "https://developers.cloudflare.com/workers/about/metrics",
							requestsTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#requests",
							cpuTimeTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#cpu-time-per-execution",
							durationTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#duration-per-execution",
							requestDurationTimeseries: "https://developers.cloudflare.com/workers/learning/metrics-and-analytics/#request-duration",
							dataEgressTimeseries: "https://developers.cloudflare.com/workers/about/metrics/#data-egress",
							invocationStatuses: "https://developers.cloudflare.com/workers/about/metrics/#invocation-statuses"
						},
						logpush: {
							generalDocs: "https://developers.cloudflare.com/workers/platform/logpush",
							createJob: "https://developers.cloudflare.com/workers/platform/logpush/#create-a-logpush-job"
						},
						mtlsCertificates: "https://developers.cloudflare.com/workers/runtime-apis/mtls",
						uploadMtlsCertificates: "https://developers.cloudflare.com/workers/wrangler/commands#mtls-certificate",
						smartPlacement: "https://developers.cloudflare.com/workers/platform/smart-placement/",
						smartPlacementStatus: "https://developers.cloudflare.com/workers/configuration/smart-placement/#placement-status",
						smartPlacementHowItWorks: "https://developers.cloudflare.com/workers/configuration/smart-placement/#understand-how-smart-placement-beta-works",
						smartPlacementBackendServices: "https://developers.cloudflare.com/workers/configuration/smart-placement/#unsupported-back-end-services",
						integrations: "https://developers.cloudflare.com/workers/databases/connecting-to-databases/",
						tailWorkers: "https://developers.cloudflare.com/workers/platform/tail-workers",
						dispatchNamespaces: "https://developers.cloudflare.com/cloudflare-for-platforms/workers-for-platforms/platform/outbound-workers",
						invalidCORSPolicy: "https://developers.cloudflare.com/r2/buckets/cors/#common-issues",
						createCloudflare: "https://www.npmjs.com/package/create-cloudflare",
						userCpuLimits: "https://developers.cloudflare.com/workers/platform/pricing/#standard-usage-model",
						versions: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments",
						gradualRollouts: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/gradual-deployments",
						rollbacks: "https://developers.cloudflare.com/workers/configuration/versions-and-deployments/rollbacks",
						moduleSyntax: "https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#migrate-from-service-workers-to-es-modules",
						configureQueues: "https://developers.cloudflare.com/queues/configuration/configure-queues/"
					},
					serverlist: "https://blog.cloudflare.com/tag/serverlist/",
					discord: "https://discord.cloudflare.com/",
					community: "https://community.cloudflare.com/tag/workers",
					billing: "https://developers.cloudflare.com/workers/platform/pricing",
					network: "https://www.cloudflare.com/network",
					builtWithWorkers: "https://workers.cloudflare.com/built-with/",
					workersSupplementalTerms: "https://www.cloudflare.com/supplemental-terms/#CFWorkers",
					freeKvBlogPost: "https://blog.cloudflare.com/workers-kv-free-tier/",
					durableObjectsSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSfJeZKlM_InqG7thczqGCaxEOqwsJm1Xdv8Kz0zd4zp3VNvMg/viewform",
					durableObjectsBetaBlogPost: "https://blog.cloudflare.com/durable-objects-open-beta/",
					usageModelSurvey: "https://docs.google.com/forms/d/e/1FAIpQLSeOKaVp9pC-sXvEQsgmKZc1b-BxdDRcIoL0jpOQWCHlAR9SiA/viewform",
					workersUnboundBlogPost: "https://blog.cloudflare.com/workers-unbound-ga/",
					cloudflareSubscriptionTerms: "https://www.cloudflare.com/terms",
					integrationsFeedback: "https://forms.gle/cMkH8G78MpGFP7Yo6",
					workersStandardPricing: "https://blog.cloudflare.com/workers-pricing-scale-to-zero"
				},
				i = 800,
				u = "40rem",
				l = {
					pricing: {
						requests: .15,
						duration: 12.5,
						egress: .045,
						storage: .2,
						read_units: .2,
						write_units: 1,
						delete: 1,
						currency: "USD"
					}
				},
				E = {
					d1_included_capacity: 5e9,
					d1_included_read_count: 25e9,
					d1_included_write_count: 5e7,
					pricing: {
						storage: .75,
						read_units: .001,
						write_units: 1
					}
				},
				t = {
					price: 5,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .5,
					ubb_price_ent: .6,
					additional_million_requests_price: .15,
					additional_million_requests_price_ent: .18,
					additional_million_standard_requests_price: .3,
					additional_million_standard_cpu_time_price: .02,
					additional_million_gb_duration_price: 12.5,
					additional_million_gb_duration_price_ent: 15,
					additional_egress_gb_transfer_price: .045,
					additional_egress_gb_transfer_price_ent: .054,
					kv_storage_modify_price: 5,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6,
					trace_logs: 1e7,
					additional_million_trace_logs_price: .05,
					trace_logs_frequency: 1e6
				},
				o = {
					price: 0,
					currency: "USD",
					frequency: "monthly",
					requests_included: 1e7,
					ubb_frequency: 1e6,
					ubb_price: .6,
					kv_storage_modify_price: 6,
					kv_storage_included_capacity: 1e9,
					kv_storage_read_count: 1e7,
					kv_storage_modify_count: 1e6
				},
				s = {
					free: {
						rateLimit: 1e3,
						maximumRequests: 1e5,
						maximumRequestsRuntimeCutoff: 12e4,
						limits: {
							Threshold1: .75,
							Threshold2: .9,
							Exceeded: 1
						}
					},
					paid: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, t),
					ent_ss: e({
						ubbRequests: 1e6,
						maximumRequests: 1e7
					}, o),
					unbound: {
						bundledRequests: 10,
						unboundRequests: 1,
						unboundDuration: 4e5,
						unboundEgress: 5,
						kvMonthlyRead: 10,
						kvMonthlyWrite: 1
					},
					standard: {
						requests: 10,
						cpuTimeMilliseconds: 30
					}
				},
				g = {
					enableWorkers: "enable workers",
					setupSubdomain: "set up subdomain",
					selectPlan: "select workers plan",
					selectTemplate: "select workers template",
					verifyEmail: "verify email",
					clickApplicationName: "click application name",
					clickChangeComputeSetting: "click change compute setting",
					clickChangeSubdomain: "click change subdomain",
					clickConnectToGit: "click connect to git",
					clickCreateProjectSuccessResource: "click create project success resource",
					clickCreateProjectSuccessNextStep: "click create project success next step",
					clickSetupAE: "click setup AE",
					clickUploadAssets: "click upload assets",
					clickWorkerEditCode: "click worker edit code",
					clickWorkersManageNotificationsAlerts: "click workers manage notifications and alerts",
					clickWorkersManageAccountMembers: "click workers manage account members",
					clickWorkersResource: "click workers resource",
					createApplicationClickWorkersDocs: "create application click workers docs",
					createApplicationClickPagesDocs: "create application click pages docs",
					createApplicationCreateWithCLI: "create application click create with CLI",
					createApplicationSelectWorkers: "create application select workers",
					createApplicationSelectPages: "create application select pages",
					createService: "create service",
					createPlaygroundWorker: "create worker from playground",
					createWorkerSelectFilter: "create worker select filter",
					cancelCreatePlaygroundWorker: "cancel create worker from playground",
					deployWorkerScript: "deploy worker script",
					setupCustomDomain: "set up custom domain",
					addWorkersRoute: "add workers route",
					editWorkersRoute: "edit workers route",
					addCronTrigger: "add cron trigger",
					editCronTrigger: "edit cron trigger",
					beginLogStream: "begin log stream",
					editEnvVariables: "edit service environment variables",
					encryptVariable: "encrypt variable",
					editNamespaceBindings: "edit service kv bindings",
					editR2Bindings: "edit service r2 bindings",
					editQueueBindings: "edit service queue bindings",
					editConstellationBindings: "edit service constellation bindings",
					editHyperdriveBindings: "edit service hyperdrive bindings",
					editAiBindings: "edit service ai bindings",
					editVectorizeBindings: "edit service vectorize bindings",
					editServiceBindings: "edit service to service bindings",
					renameService: "rename service",
					deleteService: "delete service",
					sortServices: "sort services",
					searchServices: "search services",
					paginateServices: "paginate services",
					createKVNamespace: "create kv namespace",
					deleteKVNamespace: "delete kv namespace",
					listKVNamespaces: "list kv namespaces",
					searchKVNamespaces: "search kv namespaces",
					paginateKVNamespaces: "paginate kv namespaces",
					addKVKeyValue: "add kv key-value",
					editKVKeyValue: "edit kv key-value",
					deleteKVKeyValue: "delete kv key-value",
					readKVKeyValue: "read kv key-value",
					listKVKeyValues: "list kv key-values",
					searchKVKeyValues: "search kv key-values",
					paginateKVKeyValues: "paginate kv key-values",
					editMtlsCertificateBindings: "edit service mtls certificate bindings",
					quickEditHttpTab: "quick edit http tab",
					quickEditPreviewTab: "quick edit preview tab",
					quickEditScheduleTab: "quick edit schedule tab",
					quickEditWranglerTab: "quick edit wrangler tab",
					rollbackDeployment: "rollback deployment",
					editTailConsumers: "edit service tail consumers",
					editDispatchNamespaceBindings: "edit dispatch namespace bindings",
					clickedDownloadAnalytics: "clicked Workers download analytics",
					clickedPrintAnalytics: "clicked Workers print analytics",
					clickedDiscordLink: "clicked sidebar Discord link",
					clickedCommunityLink: "clicked sidebar Community Forum link",
					clickDetailTab: "click worker detail tab",
					clickedBundledUsageModel: "Workers:Clicked Bundled Usage Model",
					clickedUnboundUsageModel: "Workers:Clicked Unbound Usage Model",
					clickedGreenComputeSetting: "Workers:Clicked Green Compute Setting",
					clickedGlobalComputeSetting: "Workers:Clicked Global Compute Setting"
				},
				a = "workers.dev",
				C = "YYYY-MM-DD HH:mm:SS ZZ",
				p = "active",
				_ = ["bundled", "unbound", "standard"],
				j = null
		},
		"../react/pages/zoneless-workers/routes.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Hv: function() {
					return u
				},
				L: function() {
					return c
				},
				Q9: function() {
					return d
				},
				_j: function() {
					return y
				},
				ky: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-routes/es/index.js");
			const r = l => `${l}.workers.dev`,
				c = (l, E, t) => `${t?`${t}.`:""}${l}.${r(E)}`,
				d = (l, E, t) => `https://${c(l,E,t)}`,
				y = {
					workersOverview: (0, e.BC)`/${"accountId"}/workers/overview`,
					zoneRoot: (0, e.BC)`/${"accountId"}/${"zoneName"}/workers`,
					root: (0, e.BC)`/${"accountId"}/workers`,
					onboarding: (0, e.BC)`/${"accountId"}/workers-and-pages/create`,
					overview: (0, e.BC)`/${"accountId"}/workers/overview`,
					subdomain: (0, e.BC)`/${"accountId"}/workers/subdomain`,
					defaultUsageModel: (0, e.BC)`/${"accountId"}/workers/default-usage-model`,
					computeSetting: (0, e.BC)`/${"accountId"}/workers/compute-setting`,
					cli: (0, e.BC)`/${"accountId"}/workers/cli`,
					kvRoot: (0, e.BC)`/${"accountId"}/workers/kv`,
					kvStore: (0, e.BC)`/${"accountId"}/workers/kv/namespaces`,
					d1Store: (0, e.BC)`/${"accountId"}/workers/d1`,
					plans: (0, e.BC)`/${"accountId"}/workers/plans`,
					purchase: (0, e.BC)`/${"accountId"}/workers/plans/purchase`,
					standardOptIn: (0, e.BC)`/${"accountId"}/workers/standard/opt-in`,
					kvNamespace: (0, e.BC)`/${"accountId"}/workers/kv/namespaces/${"namespaceId"}`,
					d1Database: (0, e.BC)`/${"accountId"}/workers/d1/databases/${"databaseId"}`,
					editServiceScript: (0, e.BC)`/${"accountId"}/workers/services/edit/${"serviceId"}/${"environmentName"}`,
					durableObjectDetails: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}`,
					durableObjectDetailsSettings: (0, e.BC)`/${"accountId"}/workers/durable-objects/view/${"namespaceId"}/settings`,
					manageSubscriptions: (0, e.BC)`/${"accountId"}/billing/subscriptions`,
					manageNotifications: (0, e.BC)`/${"accountId"}/notifications`,
					servicesRoot: (0, e.BC)`/${"accountId"}/workers/services`,
					createService: (0, e.BC)`/${"accountId"}/workers/services/new`,
					manageService: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					renameService: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/rename`,
					serviceDetailsRoot: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}`,
					serviceDetails: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}`,
					serviceDetailsDeployments: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/deployments`,
					serviceDetailsIntegrationsFlow: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/${"integrationId"}/integrations-setup`,
					serviceDetailsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/triggers`,
					serviceDetailsIntegrations: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/integrations`,
					serviceDetailsSettings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings`,
					serviceDetailsSettingsGeneral: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/general`,
					serviceDetailsSettingsBindings: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/bindings`,
					serviceDetailsSettingsTriggers: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/settings/triggers`,
					serviceDetailsLogs: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs`,
					serviceDetailsLogsLive: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/live`,
					serviceDetailsLogpush: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/logpush`,
					serviceDetailsLogsCron: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/logs/cron`,
					serviceDetailsManage: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/manage`,
					serviceDetailsRename: (0, e.BC)`/${"accountId"}/workers/services/view/${"serviceId"}/${"environmentName"}/rename`,
					createDeployment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deploy-version`,
					deploymentHistory: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/deployment-history`,
					createEnvironment: (0, e.BC)`/${"accountId"}/workers/services/${"serviceId"}/${"environmentName"}/environment/new`,
					apiKey: (0, e.BC)`/profile/api-tokens`,
					signUp: (0, e.BC)`/sign-up/workers`,
					dns: (0, e.BC)`/${"accountId"}/${"zoneId"}/dns`,
					ssl: (0, e.BC)`/${"accountId"}/${"zoneId"}/ssl-tls/edge-certificates`,
					analyticsEngine: (0, e.BC)`/${"accountId"}/workers/analytics-engine`,
					emailRouting: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes`,
					emailRoutingRule: (0, e.BC)`/${"accountId"}/${"zoneName"}/email/routing/routes/${"ruleId"}`,
					zones: (0, e.BC)`/${"accountId"}`,
					developerPlatform_workers_create: (0, e.BC)`/${"accountId"}/developer-platform/workers/onboarding`,
					developerPlatform_workers_success: (0, e.BC)`/${"accountId"}/developer-platform/workers/success`,
					logpush: (0, e.BC)`/${"accountId"}/logs`,
					members: (0, e.BC)`/${"accountId"}/members`
				},
				i = "https://cron-triggers.cloudflareworkers.com",
				u = {
					accountMtlsCertificates: (0, e.BC)`/accounts/${"accountId"}/mtls_certificates`,
					accountSettings: (0, e.BC)`/accounts/${"accountId"}/workers/account-settings`,
					certificates: (0, e.BC)`/zones/${"zoneId"}/ssl/certificate_packs/${"certId"}`,
					createApiToken: (0, e.BC)`/user/tokens`,
					createTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails`,
					deleteApiToken: (0, e.BC)`/user/tokens/${"tokenId"}`,
					deleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/tails/${"tailId"}`,
					deployments: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/deployments`,
					describeCron: `${i}/describe`,
					dnsRecords: (0, e.BC)`/zones/${"zoneId"}/dns_records`,
					dnsRoute: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records/${"recordId"}`,
					dnsRouteChangeset: (0, e.BC)`/accounts/${"accountId"}/workers/domains/changeset`,
					dnsRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/domains/records`,
					durableObjectNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}`,
					durableObjectNamespaces: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces`,
					durableObjectsInNamespace: (0, e.BC)`/accounts/${"accountId"}/workers/durable_objects/namespaces/${"namespaceId"}/objects`,
					edgePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/edge-preview`,
					edgePreviewInit: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/edge-preview`,
					edgePreviewZoneInit: (0, e.BC)`/zones/${"zone"}/workers/edge-preview`,
					enableDurableObjects: (0, e.BC)`/accounts/${"accountId"}/flags/products/edgeworker/changes`,
					featureFlagSettings: (0, e.BC)`/accounts/${"accountId"}/workers/settings`,
					integrations: {
						getIntegrations: (0, e.BC)`/accounts/${"accountId"}/integrations`,
						getManifest: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}`,
						invokeGetDataAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-data/${"action"}`,
						invokeGetOptionsAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/get-options/${"action"}`,
						invokeSubmitFormAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-form/${"action"}`,
						invokeSubmitTokenAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/submit-token/${"action"}`,
						invokeUninstallAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/uninstall/${"action"}`,
						invokeRefAction: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/ref/${"action"}`,
						integrationsPreviewWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/preview/${"action"}`,
						integrationsDeployWorker: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/invoke/deploy/${"action"}`,
						oauthAuthorize: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/oauth/${"oauthProviderId"}/authorize`,
						oauthCallback: (0, e.BC)`/oauth/callback`,
						resourceStates: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states`,
						resourceState: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/resource-states/${"resourceName"}`,
						asset: (0, e.BC)`/accounts/${"accountId"}/integrations/${"integrationId"}/manifests/${"version"}/assets`
					},
					kvNamespace: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces/${"namespaceId"}`,
					kvNamespaces: (0, e.BC)`/accounts/${"accountId"}/storage/kv/namespaces`,
					kvRequestMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics`,
					kvStorageMetrics: (0, e.BC)`/accounts/${"accountId"}/storage/analytics/stored`,
					newVersions: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/versions`,
					nextCron: `${i}/next`,
					outboundDispatchers: (0, e.BC)`/accounts/${"accountId"}/workers/dispatch_outbounds/by-outbound/${"serviceId"}/environment/${"environmentName"}`,
					permissionGroups: (0, e.BC)`/user/tokens/permission_groups`,
					promoteDeployment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"sourceEnv"}/promote/${"targetEnv"}`,
					queues: (0, e.BC)`/accounts/${"accountId"}/workers/queues`,
					service: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}`,
					serviceBindings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/bindings`,
					serviceBindingsReferences: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/references`,
					serviceCopyEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/copy/${"toEnvironmentName"}`,
					services: (0, e.BC)`/accounts/${"accountId"}/workers/services`,
					serviceSettings: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/settings`,
					scriptsByHandler: (0, e.BC)`/accounts/${"accountId"}/workers/scripts?handlers=${"handler"}`,
					scriptSettingsV2: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"serviceId"}/script-settings`,
					serviceCreateTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails`,
					serviceDeleteTail: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/tails/${"tailId"}`,
					serviceEmailTriggers: (0, e.BC)`/accounts/${"accountId"}/email/routing/rules`,
					serviceEnvironment: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}`,
					servicePreview: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/preview`,
					serviceRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/routes`,
					serviceSchedules: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/schedules`,
					serviceScript: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content`,
					serviceScriptRoutes: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/routes/${"routeId"}`,
					serviceScriptV2: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/content/v2?omit=sourcemaps`,
					serviceSubdomain: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/subdomain`,
					serviceUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/services/${"serviceId"}/environments/${"environmentName"}/usage-model`,
					spectrum: (0, e.BC)`/zones/${"zoneId"}/spectrum/apps/dns`,
					standard: (0, e.BC)`/accounts/${"accountId"}/workers/standard`,
					subdomain: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain`,
					subdomainCertStatus: (0, e.BC)`/accounts/${"accountId"}/workers/subdomain/ssl`,
					subdomainDeployed: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/subdomain`,
					tailsByConsumer: (0, e.BC)`/accounts/${"accountId"}/workers/tails/by-consumer/${"serviceId"}/environment/${"environment"}`,
					validateCron: `${i}/validate`,
					versions: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}`,
					version: (0, e.BC)`/accounts/${"accountId"}/workers/deployments/by-script/${"scriptTag"}/detail/${"versionTag"}`,
					workersScript: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}`,
					workerScriptContent: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/content`,
					workerScriptSettings: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"scriptName"}/settings`,
					workerUsageModel: (0, e.BC)`/accounts/${"accountId"}/workers/scripts/${"workerId"}/usage-model`,
					zones: (0, e.BC)`/zones`
				}
		},
		"../react/shims/focus-visible.js": function() {
			(function(V, v) {
				v()
			})(this, function() {
				"use strict";

				function V() {
					var n = !0,
						e = !1,
						r = null,
						c = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0
						};

					function d(p) {
						return !!(p && p !== document && p.nodeName !== "HTML" && p.nodeName !== "BODY" && "classList" in p && "contains" in p.classList)
					}

					function y(p) {
						var _ = p.type,
							j = p.tagName;
						return !!(j == "INPUT" && c[_] && !p.readOnly || j == "TEXTAREA" && !p.readOnly || p.isContentEditable)
					}

					function i(p) {
						p.getAttribute("is-focus-visible") !== "" && p.setAttribute("is-focus-visible", "")
					}

					function u(p) {
						p.getAttribute("is-focus-visible") === "" && p.removeAttribute("is-focus-visible")
					}

					function l(p) {
						d(document.activeElement) && i(document.activeElement), n = !0
					}

					function E(p) {
						n = !1
					}

					function t(p) {
						!d(p.target) || (n || y(p.target)) && i(p.target)
					}

					function o(p) {
						!d(p.target) || p.target.hasAttribute("is-focus-visible") && (e = !0, window.clearTimeout(r), r = window.setTimeout(function() {
							e = !1, window.clearTimeout(r)
						}, 100), u(p.target))
					}

					function s(p) {
						document.visibilityState == "hidden" && (e && (n = !0), g())
					}

					function g() {
						document.addEventListener("mousemove", C), document.addEventListener("mousedown", C), document.addEventListener("mouseup", C), document.addEventListener("pointermove", C), document.addEventListener("pointerdown", C), document.addEventListener("pointerup", C), document.addEventListener("touchmove", C), document.addEventListener("touchstart", C), document.addEventListener("touchend", C)
					}

					function a() {
						document.removeEventListener("mousemove", C), document.removeEventListener("mousedown", C), document.removeEventListener("mouseup", C), document.removeEventListener("pointermove", C), document.removeEventListener("pointerdown", C), document.removeEventListener("pointerup", C), document.removeEventListener("touchmove", C), document.removeEventListener("touchstart", C), document.removeEventListener("touchend", C)
					}

					function C(p) {
						p.target.nodeName.toLowerCase() !== "html" && (n = !1, a())
					}
					document.addEventListener("keydown", l, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("focus", t, !0), document.addEventListener("blur", o, !0), document.addEventListener("visibilitychange", s, !0), g(), document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
				}

				function v(n) {
					var e;

					function r() {
						e || (e = !0, n())
					} ["interactive", "complete"].indexOf(document.readyState) >= 0 ? n() : (e = !1, document.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", r, !1))
				}
				typeof document != "undefined" && v(V)
			})
		},
		"../react/utils/api.ts": function(V, v, n) {
			"use strict";
			n.r(v), n.d(v, {
				attachAtokHeader: function() {
					return _
				},
				attachErrorHandler: function() {
					return f
				},
				authyAuthConfirmNumber: function() {
					return B
				},
				authyAuthPutSave: function() {
					return ue
				},
				basePath: function() {
					return C
				},
				fetchCertificateApiKey: function() {
					return ee
				},
				fetchUserServiceKey: function() {
					return re
				},
				performLogout: function() {
					return Y
				},
				prependApiRoute: function() {
					return j
				},
				sendCookies: function() {
					return L
				},
				twoFacDisableDelete: function() {
					return se
				},
				twoFacGoogleAuthEnablePost: function() {
					return k
				},
				twoFacGoogleAuthQRCodeGet: function() {
					return z
				},
				updateCertificateApiKey: function() {
					return J
				},
				updateUserServiceKey: function() {
					return te
				},
				validateOptions: function() {
					return p
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-http/@cloudflare/util-http"),
				r = n.n(e),
				c = n("../react/app/providers/storeContainer.js"),
				d = n("../react/common/actions/notificationsActions.ts"),
				y = n("../react/utils/translator.tsx"),
				i = n("../../../../node_modules/@cloudflare/util-cache/es/index.js"),
				u = n("../react/pages/onboarding/components/AppleLogin/constants.ts"),
				l = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				E = n.n(l),
				t = n("../../../../node_modules/@sentry/core/esm/exports.js");

			function o(X) {
				for (var G = 1; G < arguments.length; G++) {
					var P = arguments[G] != null ? Object(arguments[G]) : {},
						Z = Object.keys(P);
					typeof Object.getOwnPropertySymbols == "function" && Z.push.apply(Z, Object.getOwnPropertySymbols(P).filter(function(Q) {
						return Object.getOwnPropertyDescriptor(P, Q).enumerable
					})), Z.forEach(function(Q) {
						s(X, Q, P[Q])
					})
				}
				return X
			}

			function s(X, G, P) {
				return G = g(G), G in X ? Object.defineProperty(X, G, {
					value: P,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : X[G] = P, X
			}

			function g(X) {
				var G = a(X, "string");
				return typeof G == "symbol" ? G : String(G)
			}

			function a(X, G) {
				if (typeof X != "object" || X === null) return X;
				var P = X[Symbol.toPrimitive];
				if (P !== void 0) {
					var Z = P.call(X, G || "default");
					if (typeof Z != "object") return Z;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (G === "string" ? String : Number)(X)
			}
			const C = "/api/v4",
				p = X => {
					X.url.charAt(0) !== "/" && (X.url = `/${X.url}`)
				},
				_ = X => {
					n.g.bootstrap && n.g.bootstrap.atok && (X.headers = o({}, X.headers, {
						"X-ATOK": n.g.bootstrap.atok
					}))
				},
				j = X => {
					X.url = C + X.url
				},
				L = X => {
					X.credentials = "same-origin"
				},
				f = X => {
					const G = X.callback;
					X.callback = (P, Z) => {
						P && !X.hideErrorAlert && S(P, X), G && G(P, Z)
					}
				},
				S = (X, G) => {
					const P = X.body && X.body.errors;
					(P ? w(G, P) : $(G, X)).forEach(Q => {
						(0, c.bh)().dispatch(d.IH("error", typeof Q == "string" ? Q : Q.message)), E().sendEvent("error notification shown", {
							errorCode: typeof Q == "string" ? void 0 : Q.code
						}), {
							REDUX_LOGGER: void 0
						}.TESTING && n.g.logAppError(typeof Q == "string" ? Q : Q.message)
					})
				};

			function h(X, G) {
				return !!(G.code === 1001 && X.url && X.url.match(/subscription/gi) || G.code === 10042 && X.url && X.url.match(/r2/gi))
			}
			const w = (X, G) => G.filter(P => !h(X, P)).map(({
					message: P,
					code: Z,
					error_chain: Q
				}) => {
					switch (Z) {
						case 9300:
						case 9301:
						case 9303:
							Y();
						default:
							break
					}
					const ce = P.split(" ").length > 1,
						F = P.split(".").length > 1,
						ne = !ce && F;
					let me = P;
					if (ne) try {
						me = (0, y.ZP)(P)
					} catch {}
					if (P.startsWith("billing.")) return {
						message: `Error while processing payment: ${me}.`,
						code: Z
					};
					const M = Array.isArray(Q) ? Q.map(A => A.message).join(". ") : "";
					return {
						message: `${me}${typeof Z!="undefined"?` (Code: ${Z})`:""} ${M}`,
						code: Z
					}
				}),
				$ = (X, G) => [`API Request Failed: ${X.method} ${X.url} (${G.status})`];
			e.beforeSend(p), e.beforeSend(_), e.beforeSend(j), e.beforeSend(L), e.beforeSend(f);
			const Y = X => e.del("/user/sessions/current").then(G => {
				if (i.E.remove(u.Qq), X) window.location.href = X;
				else {
					var P, Z;
					const Q = (P = (Z = G.body.result) === null || Z === void 0 ? void 0 : Z.redirect_uri) !== null && P !== void 0 ? P : "/login";
					window.location.href = Q
				}
			}).catch(G => {
				console.error("Failed to logout", G), t.Tb(G)
			});

			function re(X) {
				return e.get("/user/service_keys/" + X)
			}

			function te(X, G) {
				return e.put("/user/service_keys/" + X, {
					body: G
				})
			}

			function ee(X) {
				return e.post("/user/service_keys/certificateapi", {
					body: X
				})
			}

			function J(X) {
				return e.put("/user/service_keys/certificateapi", {
					body: X
				})
			}
			const k = function(X, G) {
					var P = {
						google_auth_code: X
					};
					return e.post("/user/two_factor_authentication/google_authenticator/enable", {
						body: P
					}, G)
				},
				z = function(X) {
					return e.get("/user/two_factor_authentication/google_authenticator/qr_code", void 0, X)
				},
				se = function(X, G) {
					var P = {
						auth_token: X
					};
					return e.del("/user/two_factor_authentication", {
						body: P
					}, G)
				},
				B = function(X, G) {
					return e.post("/user/two_factor_authentication", {
						body: X
					}, G)
				},
				ue = function(X, G) {
					return e.put("/user/two_factor_authentication", {
						body: X
					}, G)
				}
		},
		"../react/utils/bootstrap.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				$8: function() {
					return r
				},
				Ak: function() {
					return e
				},
				Hk: function() {
					return d
				},
				gm: function() {
					return c
				}
			});
			const e = () => {
					var y, i, u;
					return (y = window) === null || y === void 0 || (i = y.bootstrap) === null || i === void 0 || (u = i.data) === null || u === void 0 ? void 0 : u.security_token
				},
				r = () => {
					var y, i, u;
					return !!((y = n.g.bootstrap) === null || y === void 0 || (i = y.data) === null || i === void 0 || (u = i.user) === null || u === void 0 ? void 0 : u.id)
				},
				c = () => {
					var y, i;
					return !!((y = n.g.bootstrap) === null || y === void 0 || (i = y.data) === null || i === void 0 ? void 0 : i.is_kendo)
				},
				d = () => {
					var y, i, u, l;
					return (y = window) === null || y === void 0 || (i = y.bootstrap) === null || i === void 0 || (u = i.data) === null || u === void 0 || (l = u.user) === null || l === void 0 ? void 0 : l.primary_account_tag
				}
		},
		"../react/utils/cookiePreferences.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				O5: function() {
					return d
				},
				Xm: function() {
					return c
				},
				kT: function() {
					return u
				},
				wV: function() {
					return l
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var t;
					return ((t = window) === null || t === void 0 ? void 0 : t.OnetrustActiveGroups) || ""
				},
				c = () => (r() || "").indexOf("C0002") !== -1,
				d = () => (r() || "").indexOf("C0003") !== -1,
				y = () => (r() || "").indexOf("C0004") !== -1,
				i = () => (r() || "").indexOf("C0005") !== -1,
				u = t => {
					const o = ".cloudflare.com";
					document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;domain=${o}`
				},
				l = () => {
					var t;
					const o = (t = window.OneTrust) === null || t === void 0 ? void 0 : t.getGeolocationData();
					return (o == null ? void 0 : o.country) || ""
				},
				E = () => parse(document.cookie)
		},
		"../react/utils/i18n.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				AI: function() {
					return _
				},
				S8: function() {
					return p
				},
				ZW: function() {
					return i
				},
				ay: function() {
					return j
				},
				fh: function() {
					return L
				},
				ly: function() {
					return l
				},
				th: function() {
					return y
				},
				ti: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/moment/moment.js"),
				r = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../common/util/types/src/utils/index.ts");
			const y = "cf-sync-locale-with-cps",
				i = c.Q.en_US,
				u = "en_US",
				l = "cf-locale",
				E = w => (0, d.Yd)(c.Q).find($ => c.Q[$] === w) || u,
				t = [],
				o = [],
				s = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.fr_FR, c.Q.it_IT, c.Q.pt_BR, c.Q.ko_KR, c.Q.ja_JP, c.Q.zh_CN, c.Q.zh_TW],
				g = [c.Q.de_DE, c.Q.en_US, c.Q.es_ES, c.Q.es_CL, c.Q.es_EC, c.Q.es_MX, c.Q.es_PE, c.Q.fr_FR, c.Q.it_IT, c.Q.ja_JP, c.Q.ko_KR, c.Q.pt_BR, c.Q.zh_CN, c.Q.zh_TW],
				a = {
					test: [...s, ...o, ...t],
					development: [...s, ...o, ...t],
					staging: [...s, ...o, ...t],
					production: [...s, ...o]
				},
				C = {
					test: [...g, ...o, ...t],
					development: [...g, ...o, ...t],
					staging: [...g, ...o, ...t],
					production: [...g, ...o]
				},
				p = (w, $) => {
					const Y = c.Q[$];
					return w ? a.production.includes(Y) : C.production.includes(Y)
				},
				_ = w => Object.keys(c.Q).filter($ => p(w, $)),
				j = w => {
					const $ = c.Q[w];
					return o.includes($)
				},
				L = (w, $) => w ? f[$] : S[$],
				f = {
					de_DE: "Deutsch",
					en_US: "English",
					es_CL: "Espa\xF1ol",
					es_EC: "Espa\xF1ol",
					es_ES: "Espa\xF1ol",
					es_MX: "Espa\xF1ol",
					es_PE: "Espa\xF1ol",
					fr_FR: "Fran\xE7ais",
					it_IT: "Italiano",
					pt_BR: "Portugu\xEAs",
					ko_KR: "\uD55C\uAD6D\uC5B4",
					ja_JP: "\u65E5\u672C\u8A9E",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u7E41\u9AD4\u4E2D\u6587"
				},
				S = {
					de_DE: "Deutsch",
					en_US: "English (US)",
					es_CL: "Espa\xF1ol (Chile)",
					es_EC: "Espa\xF1ol (Ecuador)",
					es_ES: "Espa\xF1ol (Espa\xF1a)",
					es_MX: "Espa\xF1ol (Mexico)",
					es_PE: "Espa\xF1ol (Peru)",
					fr_FR: "Fran\xE7ais (France)",
					ja_JP: "\u65E5\u672C\u8A9E",
					ko_KR: "\uD55C\uAD6D\uC5B4(\uB300\uD55C\uBBFC\uAD6D)",
					it_IT: "Italiano (Italia)",
					pt_BR: "Portugu\xEAs (Brasil)",
					zh_CN: "\u7B80\u4F53\u4E2D\u6587",
					zh_TW: "\u4E2D\u6587 (\u53F0\u7063)"
				},
				h = r().locale();
			r().defineLocale("es-cl", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-ec", {
				parentLocale: "es",
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				}
			}), r().defineLocale("es-mx", {
				parentLocale: "es",
				longDateFormat: {
					LT: "h:mm a",
					LTS: "h:mm:ss a",
					L: "D/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY h:mm a",
					LLLL: "dddd, D [de] MMMM [de] YYYY h:mm a"
				}
			}), r().defineLocale("es-pe", {
				parentLocale: "es",
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY HH:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
				}
			}), r().locale(h)
		},
		"../react/utils/translator.tsx": function(V, v, n) {
			"use strict";
			n.d(v, {
				QT: function() {
					return g
				},
				Vb: function() {
					return u
				},
				Yi: function() {
					return E
				},
				ZP: function() {
					return i
				},
				_m: function() {
					return t
				},
				cC: function() {
					return o
				},
				oc: function() {
					return s
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				r = n("../../../common/intl/intl-core/src/Translator.ts"),
				c = n("../../../common/intl/intl-react/src/index.ts");
			const d = n("../flags.js").J8,
				y = new r.Z({
					pseudoLoc: d("is_pseudo_loc")
				});

			function i(a, ...C) {
				return y.t(a, ...C)
			}
			const u = y;

			function l(a, ...C) {
				return markdown(i(a, C))
			}

			function E(a) {
				if (Number(a) !== 0) {
					if (a % 86400 == 0) return i("time.num_days", {
						smart_count: a / 86400
					});
					if (a % 3600 == 0) return i("time.num_hours", {
						smart_count: a / 3600
					});
					if (a % 60 == 0) return i("time.num_minutes", {
						smart_count: a / 60
					})
				}
				return i("time.num_seconds", {
					smart_count: a
				})
			}

			function t(a, C) {
				return a in C ? C[a] : void 0
			}
			const o = c.cC,
				s = c.oc,
				g = c.QT
		},
		"../react/utils/url.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Ct: function() {
					return L
				},
				Fl: function() {
					return Z
				},
				KT: function() {
					return ce
				},
				NF: function() {
					return a
				},
				Nw: function() {
					return _
				},
				Pd: function() {
					return p
				},
				Uh: function() {
					return X
				},
				Y_: function() {
					return g
				},
				e1: function() {
					return j
				},
				el: function() {
					return te
				},
				hW: function() {
					return J
				},
				pu: function() {
					return Q
				},
				qR: function() {
					return re
				},
				td: function() {
					return C
				},
				uW: function() {
					return z
				}
			});
			var e = n("../../../../node_modules/query-string/query-string.js"),
				r = n.n(e),
				c = n("../../../../node_modules/@cloudflare/util-regex/es/index.js"),
				d = n("../react/pages/r2/routes.ts"),
				y = n("../react/pages/zoneless-workers/routes.ts"),
				i = n("../react/pages/pages/routes.ts");

			function u(F) {
				for (var ne = 1; ne < arguments.length; ne++) {
					var me = arguments[ne] != null ? Object(arguments[ne]) : {},
						M = Object.keys(me);
					typeof Object.getOwnPropertySymbols == "function" && M.push.apply(M, Object.getOwnPropertySymbols(me).filter(function(A) {
						return Object.getOwnPropertyDescriptor(me, A).enumerable
					})), M.forEach(function(A) {
						l(F, A, me[A])
					})
				}
				return F
			}

			function l(F, ne, me) {
				return ne = E(ne), ne in F ? Object.defineProperty(F, ne, {
					value: me,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : F[ne] = me, F
			}

			function E(F) {
				var ne = t(F, "string");
				return typeof ne == "symbol" ? ne : String(ne)
			}

			function t(F, ne) {
				if (typeof F != "object" || F === null) return F;
				var me = F[Symbol.toPrimitive];
				if (me !== void 0) {
					var M = me.call(F, ne || "default");
					if (typeof M != "object") return M;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (ne === "string" ? String : Number)(F)
			}
			const {
				endsWithSlash: o
			} = c.default, s = (F, ne) => {
				const me = F.replace(o, "").split("/");
				return me.slice(0, 2).concat([ne]).concat(me.slice(3)).join("/")
			}, g = () => window.location.hostname.includes("dash.staging.cloudflare") || window.location.hostname.includes("dash.cloudflare"), a = F => `/${F.replace(o,"").replace(/^\//,"")}`, C = F => _("add-site", F), p = F => _("billing", F), _ = (F, ne) => ne ? `/${ne}${F?`/${F}`:""}` : `/?to=/:account/${F}`, j = () => {
				const F = location ? location.pathname.match(/^\/([0-9a-f]{32})/) || location.pathname.match(/^\/a\/([0-9a-f]{32})/) : null;
				return F ? F[1] : null
			}, L = (F, ne) => r().stringify(u({}, r().parse(F), ne)), f = (F = "") => F.toString().replace(/([\/]{1,})$/, ""), S = ["/login", "/sign-up", "/two-factor", "/forgot-password", "/forgot-email", "/login-help", "/profile", "/zones"], h = /^\/(\w*)\/(([^./]*\.[^./]*))+(\/.*)?/, w = /^\/(\w{32,})(\/[^.]*)?/, $ = F => S.includes(F), Y = F => !$(F), re = F => !$(F) && w.test(F), te = F => !$(F) && h.test(F), ee = F => h.exec(F), J = F => {
				if (te(F)) return F.split("/").filter(ne => ne.length > 0)[1]
			}, k = F => w.exec(F), z = F => {
				if (re(F)) {
					const ne = k(F);
					if (ne) return ne[1]
				}
			}, se = F => re(F) && F.split("/")[2] === "register-domain", B = F => se(F) ? F.split("/") : null, ue = F => {
				if (te(F)) {
					const [, , , ne, me, M, A, R] = F.split("/");
					return ne === "traffic" && me === "load-balancing" && M === "pools" && A === "edit" && R
				}
			}, X = F => {
				const ne = B(F);
				if (ne) return ne[3]
			}, G = (F, ne) => {
				var me, M;
				return ((me = F.pattern.match(/\:/g)) !== null && me !== void 0 ? me : []).length - ((M = ne.pattern.match(/\:/g)) !== null && M !== void 0 ? M : []).length
			}, P = [...Object.values(d._j), ...Object.values(y._j), ...Object.values(i._j)].sort(G);

			function Z(F) {
				if (!Y(F)) return F;
				for (const R of P)
					if (R.expression.test(F)) return R.pattern;
				const ne = B(F);
				if (ne) {
					const [, , R, , ...W] = ne;
					return `/:accountId/${R}/:domainName/${W.join("/")}`
				}
				if (ue(F)) return "/:accountId/:zoneName/traffic/load-balancing/pools/edit/:poolId";
				const M = ee(F);
				if (M) {
					const [, , , , R] = M;
					return `/:accountId/:zoneName${R||""}`
				}
				const A = k(F);
				if (A) {
					const [, , R] = A;
					return `/:accountId${R||""}`
				}
				return F
			}

			function Q(F) {
				if (!!F) try {
					const me = F.split(".").pop();
					if (me && me.length > 0) return me
				} catch {}
			}

			function ce(F, ne = document.location.href) {
				try {
					const me = new URL(F),
						M = new URL(ne);
					if (me.origin === M.origin) return `${me.pathname}${me.search}${me.hash}`
				} catch {}
			}
		},
		"../react/utils/zaraz.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				tg: function() {
					return e.tg
				},
				yn: function() {
					return e.yn
				}
			});
			var e = n("../utils/zaraz.ts")
		},
		"../utils/getDashVersion.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				p: function() {
					return c
				},
				t: function() {
					return r
				}
			});
			var e = n("../../../../node_modules/cookie/index.js");
			const r = () => {
					var d, y;
					return (d = window) === null || d === void 0 || (y = d.build) === null || y === void 0 ? void 0 : y.dashVersion
				},
				c = () => {
					var d;
					return ((0, e.parse)((d = document) === null || d === void 0 ? void 0 : d.cookie) || {}).CF_dash_version !== void 0
				}
		},
		"../utils/initSparrow.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Wi: function() {
					return Xe
				},
				IM: function() {
					return nt
				},
				yV: function() {
					return tt
				},
				Ug: function() {
					return Je
				},
				v_: function() {
					return Ke
				}
			});
			var e = n("webpack/sharing/consume/default/@cloudflare/util-sparrow/@cloudflare/util-sparrow"),
				r = n.n(e),
				c = n("../react/utils/bootstrap.ts"),
				d = n("../react/app/providers/storeContainer.js"),
				y = n("../react/common/selectors/languagePreferenceSelector.ts"),
				i = n("../flags.js"),
				u = n("../../../../node_modules/cookie/index.js"),
				l = n("../react/utils/url.ts"),
				E = n("../react/common/selectors/zoneSelectors.ts"),
				t = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js"),
				o = n("../../../../node_modules/lodash-es/memoize.js"),
				s = n("../../../../node_modules/@cloudflare/gates-redux/dist/index.mjs"),
				g = n("../utils/getDashVersion.ts"),
				a = n("../react/common/selectors/accountSelectors.ts");

			function C(ge) {
				for (var le = 1; le < arguments.length; le++) {
					var he = arguments[le] != null ? Object(arguments[le]) : {},
						D = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(he).filter(function(H) {
						return Object.getOwnPropertyDescriptor(he, H).enumerable
					})), D.forEach(function(H) {
						p(ge, H, he[H])
					})
				}
				return ge
			}

			function p(ge, le, he) {
				return le = _(le), le in ge ? Object.defineProperty(ge, le, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ge[le] = he, ge
			}

			function _(ge) {
				var le = j(ge, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function j(ge, le) {
				if (typeof ge != "object" || ge === null) return ge;
				var he = ge[Symbol.toPrimitive];
				if (he !== void 0) {
					var D = he.call(ge, le || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ge)
			}
			const L = t.eg.exact(t.eg.object({
					_ga: t.eg.string.optional
				})),
				f = (0, o.Z)(ge => {
					try {
						return L.assertDecode((0, u.parse)(ge))
					} catch (le) {
						return console.error(le), {}
					}
				}),
				S = ge => (le, he, D) => {
					try {
						const ke = window.location.pathname,
							Fe = (0, d.bh)().getState(),
							Ne = f(document.cookie),
							be = C({
								page: (0, l.Fl)(D.page || window.location.pathname),
								dashVersion: (0, g.t)()
							}, Ne);
						if (le === "identify") {
							var H, Ee;
							const Be = {
								gates: (0, s.T2)(Fe) || {},
								country: (H = n.g) === null || H === void 0 || (Ee = H.bootstrap) === null || Ee === void 0 ? void 0 : Ee.ip_country
							};
							return ge(le, he, C({}, be, Be, D))
						} else {
							const Be = {
								accountId: (0, l.uW)(ke),
								zoneName: (0, l.hW)(ke),
								domainName: (0, l.Uh)(ke)
							};
							if ((0, l.qR)(ke)) {
								var Me;
								const Ze = (0, a.D0)(Fe);
								Be.isEntAccount = Ze == null || (Me = Ze.meta) === null || Me === void 0 ? void 0 : Me.has_enterprise_zones
							}
							if ((0, l.el)(ke)) {
								var Re;
								const Ze = (0, E.nA)(Fe);
								Be.zoneId = Ze == null ? void 0 : Ze.id, Be.plan = Ze == null || (Re = Ze.plan) === null || Re === void 0 ? void 0 : Re.legacy_id
							}
							return ge(le, he, C({}, be, Be, D))
						}
					} catch (ke) {
						return console.error(ke), ge(le, he, D)
					}
				},
				h = ge => async (le, he, D) => {
					try {
						return await ge(le, he, D)
					} catch (H) {
						if (console.error(H), !Ke()) throw H;
						return {
							status: "rejected",
							reason: H
						}
					}
				};
			var w = n("../react/common/middleware/sparrow/errors.ts"),
				$ = n("../react/pages/firewall/bots/tracking.ts"),
				Y = n("../react/pages/caching/tracking.tsx"),
				re = n("../react/pages/magic/packet-captures/constants.ts"),
				te = n("../react/pages/firewall/page-shield/tracking.ts"),
				ee = n("../react/pages/firewall/rulesets/tracking.tsx"),
				J = n("../react/pages/traffic/waiting-rooms/tracking.tsx"),
				k = n("../react/pages/spectrum/tracking.tsx"),
				z = n("../react/pages/home/rulesets/ddos/tracking.ts"),
				se = n("../react/pages/security-center/tracking.ts"),
				B = n("../react/pages/firewall/api-shield/tracking.ts"),
				ue = n("../react/pages/home/configurations/lists/tracking.ts"),
				X = n("../react/pages/traffic/load-balancing/tracking.ts"),
				G = n("../react/pages/home/alerts/tracking.ts"),
				P = n("../react/pages/dns/dns-records/tracking.ts"),
				Z = n("../react/pages/home/configurations/secondary-dns/tracking.ts"),
				Q = n("../react/pages/traffic/argo/tracking.ts"),
				ce = n("../react/pages/magic/network-monitoring/constants.ts"),
				F = n("../react/pages/firewall/security-analytics/logs/constants.ts"),
				ne = n("../react/pages/magic/overview/tracking.ts"),
				me = n("../react/pages/hyperdrive/tracking.ts"),
				M = n("../react/pages/home/domain-registration/tracking.ts"),
				A = n("../react/pages/zoneless-workers/constants.ts");
			const W = ((ge, le, ...he) => t.eg.union([t.eg.literal(ge), t.eg.literal(le), ...he.map(D => t.eg.literal(D))]))("abort import", "Access Click", "Access click", "Access Promo Banner Click", "ack queue message", "ACM Purchase Success", "activate coveo recommended resource TSF (3.0)", "activate helperbot diagnostic TSF (3.0)", "Activity feed cancel download modal", "Activity feed close event", "Activity feed download from modal", "Activity feed download", "Activity feed expand event", "Activity feed expand matches", "Activity feed next page", "Activity feed open download modal", "Activity feed previous page", "Add API Discovery authorization headers", "Add column", "Add Configuration Rule Settings", "add cron trigger", "Add filter", "add jwt credentials", "add jwt configuration location", "add kv key-value", "Add insight", "Add cache rule setting", "add payment method", "Add site click", "add workers route", "added api shield schema", "Addon Purchase Success", "Advanced Certificate Manager click", "agree to terms", "Analytics Secondary Nav - Tab Click", "Analytics Time Period Change", "anonymizers found", "API documentation click", "apply recommendation", "argo enabled", "argo click", "argo smart routing click", "argo tiered caching click", "argo cancel modal submit feedback clicked", "argo cancel modal open state", "argo cancel modal clicked cancel", "Attempt TOTP reconfigure", "begin deployment log stream", "begin import flow", "begin log stream", "begin zone activation flow", "Billing address country select toggle", "Billing click", "Billing email update failure", "Billing email update success", "Billing invoice download failed", "Billing invoice download success", "brand protection", "bulk delete images", "bulk export images", "Button click", "Cache settings click", "Can not display filter - Unparsable filter", "Can not display filter - Unsupported Fields", "cancel add records later", "cancel addon purchase of automatic platform optimization", "cancel disable totalTLS", "cancel import flow", "cancel form", "cancel notification create", "cancel notification delete", "cancel notification edit", "cancel notification test", "cancel onboarding flow", "cancel resizing after bundle buy", "cancel snippet form", "cancel source deletion", "cancel variant edit", "Canceled rule form", "Canceled subscription", "Certificate Patch click", "change api shield sequence rule config option", "change brand pattern filter", "change certificate authority totalTLS", "change chart time horizon", "Change dataset", "change default action api shield sv", "change DNS file upload error visibility", "change DNS setup method", "Change limit", "change metadata boundary", "change pagination page shield", "Change Plan Frequency", "change priority submitted", "change SSL recommender", "change tab", "Change time window", "change zone setting", "Change zone setup confirmation", "Change zone status confirmation", "change zone status", "chat submission form submit click", "check nameservers", "choose plan", "copy script url page shield", "copy trace json", "Cipher Suites Link Click", "claim yubico promo offer", "click 2fa support token link", "click Account Home TSF (3.0)", "click add settings", "click add sources", "click api shield upsell link", "click api shield enable product button", "click api shield feedback link", "click api shield route", "click API snippet drawer", "click back to all policies link", "click block ai bots", "Click BM bots JS detection", "Click BM bot templates", "Click BM create firewall rule", "Click BM welcome card", "click cancel downgrade", "click cache reserve purchase", "click chat button", "click chat close modal", "click chat start", "click close callback request form", "click configure 2fa support app link", "click continue quick scan", "click continue to support TSF (3.0)", "click coveo recommended resource TSF (3.0)", "click create ai gateway", "click create load balancer", "click create project success resource", "click create project success next step", "Click Create Rule", "click create policy form link", "click create token from sidebar", "click deflect community TSF (3.0)", "Click Deploy Rule", "click dns completion wizard suggestion", "click dns email security configure", "click dns email security wizard record type", "click documentation link", "click edit policy", "click edge traffic visualisation link", "click enable argo button", "click end stream button", "click expand known issue", "click expand maintenance view", "click helperbot diagnostic report TSF (3.0)", "click Hide Self Help Flow", "click learn more link", "click link to waf migration documentation", "click link", "click load more coveo content TSF (3.0)", "click load balancer step", "click login help forgot email selection", "click login help forgot password selection", "click login help lost two factor selection", "click multi-sku confirmation", "click on edit snippet", "click on expand one sequence on api gateway sequences", "click on filter one sequence on api gateway sequences", "click on main filter api gateway sequences", "click on view endpoint on api gateway sequences", "click Open a Ticket TSF (3.0)", "click open callback request form", "click payment details", "click plan documentation link", "click purchase ACM - totalTLS", "click refresh suggestions", "Click refresh transfer status", "click Request Live Chat TSF (3.0)", "click save whois", "click scan again", "click select known issue", "click Self Help Flow Answer", "click Self Help Flow Close", "click Start Over TSF (3.0)", "click Start Self Help Flow", "click start stream button", "click submit callback request form", "click submit domain categorization feedback", "click submit feedback TSF (3.0)", "click subscribe system status", "click ticket submission form search result", "click ticket submission form suggestion", "click to create api shield portal", "click to create rate limiting rule for endpoint", "click to Trace link", "click Top N investigate", "click investigate icon", "click trace feedback form", "click TSF (2.0) community more help", "click TSF (2.0) new category", "click TSF (2.0) search result", "click TSF (2.0) step", "click TSF (2.0) suggested help link", "click TSF (2.0) suggestion", "Click query logs", "Click use custom sql", "Click use basic editor", "click Upgrade to Business Close", "click Upgrade to Business Start", "click Upgrade to Business Zone Selected", "Click view details", "click waf upgrade banner", "click domain registration link", "click Workers & Pages link", "click worker edit code", "click workers plan icon", "click full DNS setup docs link", "click partial DNS setup docs link", "click secondary DNS setup docs link", "click settings first deploy cta", "click custom domain first deploy cta", "click web analytics first deploy cta", "click start quick scan", "Click", "create migration", "create or update queue consumer", "create trace", "create queue", "create sink", "create trace", "enter summary TSF (3.0)", "reach chat end TSF (3.0)", "submit login help form submission", "toggle TSF (3.0)", "toggle snippet status", "close abort import modal", "close account select dropdown", "close bulk delete image modal", "close configuration switcher sidemodal", "close delete image modal", "close delete variant modal", "close domain switcher sidemodal", "close rename source modal", "close script modal page shield", "close zone select dropdown", "close support dropdown", "collapse row", "collapse sidebar nav", "Collapse top N", "Community page link click", "complete addon purchase of automatic platform optimization", "complete plan change from automatic platform optimization card", "Configuration Rules Link Click", "confirm add records later", "confirm api shield sequence rule config", "confirm auth code", "confirm disable totalTLS", "confirm DNS records", "confirm domain transfer purchase", "confirm source deletion", "confirm zone removal", "Confirm", "contentful banner displayed", "contentful banner dismissed", "continue billing flow", "continue import flow", "continue onboarding flow", "continue to final step", "continue to review step", "continue to overview", "continue to js snippet", "Continue", "Contract SS - Approver contact details cancel", "Contract SS - Approver contact details submit success", "Contract SS - Legal agreement cancel", "Contract SS - Legal agreement submit success", "Contract SS - Payment type cancel", "Contract SS - Payment type selected success", "Contract SS - Purchase cancel", "Contract SS - Purchase flow enter", "Contract SS - Purchase success", "copy account hash", "copy account id", "copy API snippet from drawer", "copy curl command", "copy delivery url", "copy image delivery url", "copy image id", "copy script url page shield", "copy snippet", "Create Bulk Redirect Rule", "create clone", "create application click workers docs", "create application click pages docs", "create application click create with CLI", "create application select workers", "create application select pages", "create default environments", "create environment", "create job", "create kv namespace", "create migration", "Create New Rule", "create new magic firewall rule", "create notification", "create pages deployment", "create pages deployment", "create pages project", "create pages project", "create r2 api token", "create r2 api token", "create r2 bucket", "create rate limiting rule", "create regional hostname", "create rule", "Create Rule (Save)", "Create Rule as Draft (Save as Draft)", "create service", "create worker from playground", "create worker select filter", "cancel create worker from playground", "create sink", "create source", "create snippet", "create snippet", "create user", "create variant", "create worker", "create zone", "Create, Update or Edit Save Failures (Builder)", "Create, Update or Edit Save Failures (Editor)", "CT Alerting Change", "Custom Hostname create click", "Custom Hostname create success", "Custom Hostname delete click", "Custom Hostname delete success", "Custom Hostname edit click", "Custom Hostname edit success", "Custom Hostname fallback origin add click", "Custom Hostname fallback origin delete click", "Custom Hostname fallback origin delete success", "Custom Hostname fallback origin edit click", "Custom Hostname fallback origin refresh", "Custom Hostname refresh click", "Custom Trust Store delete click", "Custom Trust Store delete success", "Custom Trust Store upload click", "Custom Trust Store upload success", "customer click URL in support ai chat", "customer close support ai chat", "Dashboard search closed", "Dashboard search opened", "Dashboard search result selected", "Dashboard search results empty", "Dedicated Certificates click", "Deep Link Cancel", "Deep Link Success", "delete api shield route", "delete brand pattern", "Delete click", "Delete confirmation", "delete custom error pages", "delete environment", "delete image", "delete kv key-value", "delete kv namespace", "delete notification", "delete pages project", "delete policy", "delete queue", "delete r2 api token", "delete r2 bucket", "delete r2 objects", "Delete Rule", "delete service", "delete site", "delete snippet", "delete snippet", "delete source", "delete variant", "deploy api shield portal", "deploy api shield route", "deploy policy", "deploy worker script", "deploy worker script", "deploy version", "Details click", "Dev Mode change confirm", "Dev Mode change", "develop with wrangler cli", "Diagnostic failure", "Diagnostic result", "disable page shield", "disable pages web analytics", "Disable Rule", "disable sidebar nav", "disable totalTLS", "dislike redirect in the same window", "dismiss notification", "dismiss recommendation", "dismiss yubico promo banner", "display recommendation module", "display recommendation", "display record wizard notification", "display self help flow", "display yubico promo banner", "display support ai chat", "DNS settings click", "download file", "download progress log", "download r2 object", "download tax doc", "draft new worker script", "edge traffic visualisation is shown", "edit contact information", "edit cron trigger", "edit environment", "Edit filter", "edit image", "edit kv key-value", "edit notification", "edit plan", "edit r2 api token", "edit registration details", "edit service environment variables", "edit service kv bindings", "edit service r2 bindings", "edit service to service bindings", "edit service mtls certificate bindings", "edit service tail consumers", "edit dispatch namespace bindings", "edit variant", "edit workers route", "Edit/Update Rule (Save)", "Enable automatic https rewrites click", "Enable Optimization", "enable or disable api shield sv", "enable page shield", "enable pages access policy", "enable pages web analytics", "Enable Rule", "enable sidebar nav", "enable totalTLS", "enable policy toggle", "enable versioning", "enable workers", "encrypt variable", "end WAF migration v2", "environment migrate forward", "environment migrate back", "enter domain search value", "enter icloud registrar", "enter summary TSF (3.0)", "Error adding or removing records", "Error Analytics link click", "Error when retrieving conflicting records", "error creating snippet", "Event Names", "exit onboarding guide", "expand account select dropdown", "expand directive", "expand domain details", "Expand measurement details", "expand row", "expand sidebar nav account selector", "expand sidebar nav zone selector", "expand sidebar nav", "Expand top N", "expand trace accordion", "expand zone select dropdown", "Explore demo button click", "export instant logs", "export single image", "export trace results", "fail addon purchase of automatic platform optimization", "Failed to Switch to Editor", "failed pre-flight check", "Fetched template", "Filter rules", "filter search page shield", "filter search view all page shield", "filter snippet", "filter trace results", "Filter used", "filter workers and pages", "finish import flow", "finish loading gates and microfrontends", "finish onboarding guide later", "finish onboarding guide", "Firewall settings click", "Flow authorize", "Flow cancel", "follow contentful banner link", "follow docs link", "follow link to investigate external", "follow link to investigate", "follow link", "follow policy link", "follow recommendation CTA", "follow return to icloud link", "follow support link", "follow yubico promo banner", "follower icloud footer link", "Free Long Wait", "Get your API key click", "go back in billing flow", "go to next page", "go to page", "go to prev page", "hover score tooltip page shield", "hover to read risk identified tooltip", "hover to read threshold tooltip", "http worker editor tab", "identify", "image upload complete", "Initialization error", "Initialization success", "initiate addon purchase of automatic platform optimization", "initiate plan change from automatic platform optimization card", "initiate wordpress plugin installation for automatic platform optimization", "interact with api shield sequence rule main table", "Interaction with Film Strip", "Interacton with Film Strip", "investigate threat search", "IP settings click", "launch icloud registrar onboarding", "launch onboarding guide", "launch sidebar nav survey", "launch teams dashboard", "launch zone overview", "list kv key-values", "list kv namespaces", "list pages projects", "list queues", "list r2 buckets", "list r2 objects", "Load Balancing click", "load web analytics overview", "Logpush Create Job - Open modal", "Logpush Create Job - Step Transition", "Logpush Create Job - Success", "Manage click", "manage pages members", "manage pages policies", "Map detail type changed", "Matches Entitlement Validation error", "migrate waf", "Mixed content notification test 2019-05-03 link click", "multi-sku purchase error", "multi-sku purchase success", "navigate back", "navigate footer nav", "navigate investigate sidebar nav", "navigate quick link", "navigate sidebar nav", "navigate to account", "navigate to api tokens", "navigate to appearance", "navigate to billing", "navigate to community forum", "navigate to community", "navigate to compliance docs", "navigate to contact support", "navigate to create first source", "navigate to documentation", "navigate to edit image", "navigate to enterprise customer portal", "navigate to filtered domains", "navigate to help center", "navigate to import detail", "navigate to images", "navigate to my activities", "navigate to logout", "navigate to previous onboarding guide task", "navigate to profile", "navigate to request feature", "navigate to request feature", "Navigate to speed test", "navigate to source detail", "navigate to variant detail", "navigate to version management through configuration sidemodal", "navigate to version management docs through configuration sidemodal", "navigate to WAF Migration Review configuration view", "navigate topbar", "navigate to tax docs", "Next onboarding guide section", "next page", "Notification dismissed", "Notification displayed", "Notification link click", "Notification load on page confirmation", "observe automatic platform optimization card", "Onboarding guide elapsed time", "open abort import modal", "open advanced waiting room sales link", "open alert modal page shield", "open argo subscription modal", "open blog post for automatic platform optimization", "open bot management lead generator link", "open bulk delete image modal", "open cancel downgrade modal", "open configuration switcher sidemodal", "open create notification page", "open delete image modal", "open delete notification modal", "open delete variant modal", "open domain switcher sidemodal", "open edit notification page", "open help documentation for automatic platform optimization", "open image preview", "open load balancing subscription modal", "Open Modal Enable Access", "open priority change modal", "open onboarding guide task manually", "open remove zone modal", "open rename source modal", "open script modal page shield", "open support dropdown", "open security center url categorization feedback", "open security center categorization tooltip", "open waiting room upsell modal", "open zone plan update modal", "Opened BrowserInsights tab", "opt-in to marketing emails", "Order click", "Order success", "Page Rules click", "pageview", "page load gate deflection TSF", "paginate kv key-values", "paginate kv namespaces", "paginate pages projects", "paginate queues", "paginate r2 buckets", "paginate r2 objects", "paginate services", "Pick validity period success", "Plan Purchase Confirmation", "Plan Purchase Failure", "Plan Purchase Success", "Plan Update Confirmation", "Plan Update Failure", "Plan Update Success", "preview live worker", "preview queue messages", "preview worker editor tab", "previous page", "Private keys in china toggle", "Product Purchase Cancel", "Product Purchase Failure", "Product Purchase Success", "Product Update Failure", "Product Update Success", "prompted to verify email", "promote version", "purchase domain transfer", "purchase images subscription", "Purge cache click", "purge everything from cache", "quick actions basic features modal close", "quick actions basic features modal open", "quick actions basic features activate selections", "Rate Limiting click", "Re-activate zone click", "Re-check nameservers click", "reach ticket end TSF (3.0)", "read kv key-value", "ready to update waf migration phase 2", "recheck zone for automatic platform optimization", "redirect chat", "register site", "Remove column", "Remove filter", "Remove insight", "remove item from checkout", "remove zone", "rename account", "rename service", "rename source", "Reprioritize certificate", "Request review click", "Request trial button click", "resend verification email", "resume onboarding", "retry coveo search", "return to developer platform from modal", "return to developer platform from onboarding", "review onboarding guide task from summary", "review products", "request migrator capacity", "rollback version", "roll r2 api token", "Rule event", "Rule preview that was denied because of an unsupported field or operator", "Rule preview that was denied because of lack of data", "Rule preview that was denied due to error", "rules configured", "save contact information", "save and deploy load balancer", "save load balancer", "save load balancer as draft", "save onboarding guide task", "save payment details", "save registration details", "search auto fetch", "search kv key-values", "search kv namespaces", "search pages projects", "search queues", "search r2 buckets", "search r2 objects", "search services", "search source", "search table", "Search", "See more click", "select account", "select alert type page shield", "select category TSF (3.0)", "select change nameservers", "select directive default value", "select directive value", "select domain", "select file", "Select hostname success", "select language", "select notification type", "select onboarding bundle", "select page rules quantity", "select product", "select r2 plan", "select record addition method", "select source", "select storage plan", "select task", "Select timeseries group by", "select transfer registrars", "Select type success", "select variant", "select version", "select queues plan", "select workers plan", "select workers template", "select zone plan", "select zone", "select summary in support ai chat", "Select", "Selected advanced GeoIP field in rule builder", "selected schema api shield portal", "send verification email", "send queue message", "Set Communication Preferences", "Set communication Preferences", "set page size", "set pages do bindings", "set pages environment variables", "set pages kv bindings", "set pages vectorize bindings", "set r2 bucket storage class", "set up custom domain", "set up subdomain", "Setting up", "show access key", "show notification", "show waf upgrade banner v2", "show waf upgrade banner", "showed api shield flyfishing page", "signed exchanges toggle", "site configured", "skip onboarding guide section", "sort auto fetch", "sort column page shield", "sort queues", "sort r2 buckets", "sort services", "sort table", "sort workers and pages", "Speedheader - change your nameservers click", "Speedtest - Headless Chrome fetch returned error", "Speedtest - tests are completed", "Speedtest - Tests are running", "Speedtest - WPT tests failed", "SPF conflict resolution failure", "SSL click", "SSL Mode Change", "start import flow", "start import manually", "start subscription change", "start WAF migration v2", "start wizard", "Status page link click", "Stream click", "Stream Signup Success", "Stream Video Page Play", "Stream Video Upload Failure", "Stream Video Upload Success", "Stream video caption uploaded", "Stream video caption deleted", "Stream video caption downloaded", "Stream video caption generating", "Stream video caption regenerating", "submit brand pattern", "submit grotto chat feedback", "submit DNS email security wizard failure", "submit DNS email security wizard", "submit DNS entry method", "submit domain name", "submit login form", "submit login help form submission", "submit new grotto chat request", "submit new support ai chat request", "submit order", "submit signup form", "Successful flow and user redirected", "Successful rule preview", "Suggestions query confirmation", "suggest category tsf (3.0)", "suggest category displayed tsf (3.0)", "Marketing banner dismissed", "Survey banner closed", "Marketing banner shown", "Survey banner shown", "Survey opened", "switch DNS entry method", "Switch from Editor and Discarded Changes", "Switch to expression editor", "Test", "test notification", "Ticket form step click", "Ticket submission form button click", "Ticket submission form submit click", "Time range changed", "Toast dismiss click", "Toast load on page confirmation", "toggle advanced options", "Toggle API discovery", "toggle automatic platform optimization feature", "toggle cache by device type", "toggle flexible variants", "toggle key", "toggle recommendation module", "toggle TSF (3.0)", "Toggle user level audit logs", "Toggled injection", "trace user jorney", "transfer DNS records", "tried to register unavailable domain", "tried to remove zone of a domain registered on cloudflare registrar", "Under Attack Mode change", "update custom error pages", "update job", "update jwt configuration", "update jwt rule", "update magic firewall rule", "update pages project", "update rule", "update site", "upgrade unique transformations config", "upgrade stream subscription", "upgrade resizing to new stream subscription", "Upload custom click", "Upload custom confirmation", "upload custom error pages", "upload DNS file", "upload image", "Upload keyless click", "Upload keyless confirmation", "Upload list item CSV", "update snippet", "upload r2 objects", "use multiselect api shield sv", "use overflow api shield sv", "use spacebar to pause", "use spacebar to play", "User has recommended optimisations", "User navigated by zone navigation", "Use template", "USSL Certificate Authority: Changed", "USSL Certificate Authority: Modal Launch", "validate spf content", "Validation method change", "Validation success", "verified email successfully", "verify email", "view accounts", "view checkout complete purchase", "View click", "view custom error pages", "view documentation", "view downgrade offer", "view downgrade survey", "view downgrade warning", "view onboarding guide recommendations", "view snippet", "view plan", "view system status", "Viewed Global API Key", "Viewed Origin CA Key", "visit workers developer docs", "visit workers showcase", "visit workers templates", "web analytics upgrade plan click", "WHOIS link click", "Workers:Enablement", "Zap:Opt in", "Zap:Opt out", "Zone setup change", "Bots Report Data", "Information Toast Shown", "Information Toast Closed", "quick edit http tab", "quick edit preview tab", "quick edit schedule tab", "quick edit wrangler tab", "visit product documentation", "visit blog post", "visit recent", "visit blog announcements", "click application name", "click change compute setting", "click change subdomain", "click discover card call to action", "click discover card view products", "click create application", "click connect to git", "click featured product call to action", "click paygo card cta", "click opt-in", "click opt-out", "click close opt out", "click setup AE", "click stripe beta select plan support link", "click stripe beta change plan support link", "click rule link", "click button to speed recommendation page", "click trace rule details", "click upload assets", "click worker detail tab", "click workers resource", "click workers manage account members", "click workers manage notifications and alerts", "view stripe beta opt out", "error notification shown", "fetch personalized content", "view page", "run speed test", "delete speed test", "create speed test schedule", "delete speed test schedule", "select speed test trend range", "select speed test trend metric", "view speed recommendation", "view lighthouse audit", "enable speed recommendation", "click speed feature link", "click speed optimization documentation link", "enable all speed optimization recommendations", "complete plan change from speed", "start plan change from speed", "view rum disabled screen", "enable rum from speed", "select rum map range", "select rum map metric", "has payment plan on file", "click DNS records link", "click disable DNSSEC link", "click migrate DNSSEC link", "click enable DNSSEC link", "click pending domains link", "change appearance", "click star zone", "click star zone filter", "click empty state link", "click view more", "visit system status item", "view system status item menu", "subscribe to system status item", "click cloudflare logo", "dismiss change notification", "dismiss change notification modal", "set marketing preference ent ss purchase", "view change notification", "view change notification modal", "expand side drawer", "collapse side drawer", "expand documentation side drawer", "collapse documentation side drawer", "dismiss message", "dismiss all messages", "click message inbox popover", "click message footer action", "clicked sidebar Discord link", "clicked sidebar Community Forum link", A.QV.clickedDownloadAnalytics, A.QV.clickedPrintAnalytics, "clicked Workers for Platforms CLI Guide link", "clicked Workers for Platforms Documentation link", "clicked R2 feedback link", "clicked R2 CLI guide", "clicked Constellation feedback link", $.N3.INITIAL_FETCH_SCORES, $.N3.FETCH_CONFIGURATION, $.N3.INITIAL_FETCH_TIME_SERIES, $.N3.INITIAL_FETCH_ATTRIBUTES, $.N3.UPDATE_SETTINGS, $.N3.DELETE_RULE, $.N3.UPDATE_RULE, $.N3.FETCH_RULES, $.N3.CONFIGURE_BOT_MANAGEMENT, $.N3.WAF_RULES_REDIRECT, z.F.TOGGLE_TCP_PROTECTION, z.F.CREATE_SYN_PROTECTION_RULE, z.F.UPDATE_SYN_PROTECTION_RULE, z.F.CREATE_TCP_FLOW_PROTECTION_RULE, z.F.UPDATE_TCP_FLOW_PROTECTION_RULE, z.F.CREATE_SYN_PROTECTION_FILTER, z.F.UPDATE_SYN_PROTECTION_FILTER, z.F.CREATE_TCP_FLOW_PROTECTION_FILTER, z.F.UPDATE_TCP_FLOW_PROTECTION_FILTER, te.F.MANAGE_PAGE_SHIELD_POLICY, te.F.CONFIGURE_PAGE_SHIELD, te.F.VIEW_DETECTED_CONNECTIONS, te.F.VIEW_DETECTED_SCRIPTS, te.F.VIEW_PAGE_SHIELD_POLICIES, te.F.VIEW_PAGE_SHIELD_SETTINGS, ue.y.CREATE_LIST, ue.y.DELETE_LIST, ue.y.ADD_LIST_ITEM, ue.y.DELETE_LIST_ITEM, me.KO.PURCHASE_WORKERS_PAID, me.KO.LIST_CONFIGS, me.KO.CREATE_HYPERDRIVE_CONFIG, me.KO.VIEW_CONFIG_DETAILS, me.KO.UPDATE_CACHING_SETTINGS, me.KO.DELETE_HYPERDRIVE_CONFIG, me.KO.CLICK_HYPERDRIVE_DOCUMENTATION, me.KO.CLICK_GET_STARTED_GUIDE, me.KO.CLICK_CONNECTIVITY_GUIDES, me.KO.CLICK_QUICK_LINK, k.N.CNAME, k.N.IP_ADDRESS, k.N.LB, k.N.UPDATE_CNAME, k.N.UPDATE_IP_ADDRESS, k.N.UPDATE_LB, k.N.DISABLE, Y.N.TIERED_CACHE, Y.N.CACHE_PURGE, Y.N.CACHE_ANALYTICS, ...(0, ee.x4)(), J.N.CREATE, J.N.EVENTS, J.N.ANALYTICS, J.N.UPDATE, J.N.GENERATE_PREVIEW, se.R.INITIATE_URL_SCAN, se.R.LOAD_SCAN_INFO, se.v.EXPAND_INSIGHT_ROW, se.v.CLICK_RESOLVE_BUTTON, se.v.FOLLOW_RESOLVE_URL, se.v.MANAGE_INSIGHT, se.v.CLICK_SCAN_NOW, se.v.CLICK_EXPORT_INSIGHTS, B.Fj[B.kq.ENDPOINT_MANAGEMENT].listOfEndpoints, B.Fj[B.kq.ENDPOINT_MANAGEMENT].detailedMetrics, B.Fj[B.kq.ENDPOINT_MANAGEMENT].createEndpoint, B.Fj[B.kq.ENDPOINT_MANAGEMENT].deleteEndpoint, B.Fj[B.kq.ENDPOINT_MANAGEMENT].deployRouting, B.Fj[B.kq.ENDPOINT_MANAGEMENT].deleteRouting, B.Fj[B.kq.API_DISCOVERY].viewDiscoveredEndpoints, B.Fj[B.kq.API_DISCOVERY].saveDiscoveredEndpoint, B.Fj[B.kq.API_DISCOVERY].ignoreOrUnignoreDiscoveredEndpoint, B.Fj[B.kq.SCHEMA_VALIDATION].viewSchemasList, B.Fj[B.kq.SCHEMA_VALIDATION].uploadSchema, B.Fj[B.kq.SCHEMA_VALIDATION].viewSchemaAdoption, B.Fj[B.kq.SCHEMA_VALIDATION].downloadSchema, B.Fj[B.kq.SCHEMA_VALIDATION].deleteSchema, B.Fj[B.kq.SCHEMA_VALIDATION].addLearnedSchemaByHostname, B.Fj[B.kq.SCHEMA_VALIDATION].addLearnedSchemaByEndpoint, B.Fj[B.kq.SEQUENCE_ANALYTICS].viewSequencesPage, B.Fj[B.kq.JWT_VALIDATION].viewJWTRules, B.Fj[B.kq.JWT_VALIDATION].addJWTRule, B.Fj[B.kq.JWT_VALIDATION].editJWTRule, B.Fj[B.kq.JWT_VALIDATION].deleteJWTRule, B.Fj[B.kq.JWT_VALIDATION].reprioritizeJWTRule, B.Fj[B.kq.JWT_VALIDATION].viewJWTConfigs, B.Fj[B.kq.JWT_VALIDATION].addJWTConfig, B.Fj[B.kq.JWT_VALIDATION].editJWTConfig, B.Fj[B.kq.JWT_VALIDATION].deleteJWTConfig, B.Fj[B.kq.SETTINGS].redirectToFirewallRulesTemplate, B.Fj[B.kq.SETTINGS].redirectToPages, B.Fj[B.kq.SETTINGS].listSessionIdentifiers, B.Fj[B.kq.SETTINGS].listRequestsContainingSessionIdentifiers, B.Fj[B.kq.SETTINGS].addOrRemoveSessionIdentifiers, B.Fj[B.kq.SEQUENCE_RULES].listSequenceRules, B.Fj[B.kq.SEQUENCE_RULES].deleteSequenceRule, B.Fj[B.kq.SEQUENCE_RULES].reorderSequenceRule, B.Fj[B.kq.SEQUENCE_RULES].createSequenceRule, B.Fj[B.kq.SEQUENCE_RULES].editSequenceRule, X.Z.CREATE_AND_DEPLOY, X.Z.ANALYTICS, G.y.SECONDARY_DNS_NOTIFICATION_CREATE, G.y.SECONDARY_DNS_NOTIFICATION_UPDATE, G.y.SECONDARY_DNS_NOTIFICATION_DELETE, P.U.ZONE_TRANSFER_SUCCESS, P.U.DNS_RECORD_CREATE, P.U.DNS_RECORD_UPDATE, P.U.DNS_RECORD_DELETE, Z.Y.PEER_DNS_CREATE, Z.Y.PEER_DNS_UPDATE, Z.Y.PEER_DNS_DELETE, Z.Y.ZONE_TRANSFER_ENABLE, Z.Y.ZONE_TRANSFER_DISABLE, Q.V.ARGO_ENABLEMENT, Q.V.ARGO_GEO_ANALYTICS_FETCH, Q.V.ARGO_GLOBAL_ANALYTICS_FETCH, re.X.VIEW_BUCKETS_LIST, re.X.CREATE_BUCKET, re.X.VALIDATE_BUCKET, re.X.DELETE_BUCKET, re.X.VIEW_CAPTURES_LIST, re.X.CREATE_SIMPLE_CAPTURE, re.X.CREATE_FULL_CAPTURE, re.X.VIEW_FULL_CAPTURE, re.X.DOWNLOAD_SIMPLE_CAPTURE, ce.bK.VIEW_RULES, ce.bK.CREATE_RULE, ce.bK.UPDATE_RULE, ce.bK.DELETE_RULE, ce.bK.VIEW_CONFIGURATION, ce.bK.CREATE_CONFIGURATION, ce.bK.UPDATE_CONFIGURATION, ce.bK.DELETE_CONFIGURATION, ne.r8.VIEW_ALERTS, ne.r8.VIEW_ALERTS_HISTORY, ne.r8.MAGIC_OVERVIEW_ANALYTICS, F.o4.CLICK_ADAPTIVE_SAMPLING, F.o4.CLICK_TO_LOG_EXPLORER_BANNER, F.o4.CLICK_TO_LOG_EXPLORER_DESCRIPTION, F.o4.CLICK_SWITCH_TO_RAW_LOGS, F.o4.CLICK_SWITCH_TO_SAMPLED_LOGS, "send AI feedback", M.U.REGISTER_DOMAIN_SEARCH_SUBMIT, M.U.REGISTER_DOMAIN_SEARCH_SELECT_DOMAIN, M.U.REGISTER_DOMAIN_CHECKOUT_SELECT_PAYMENT_OPTION, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_ATTEMPT, M.U.REGISTER_DOMAIN_CHECKOUT_PURCHASE_COMPLETED, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_COUNTRY_SELECT, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_VERIFY_ADDRESS, M.U.REGISTER_DOMAIN_CHECKOUT_BILLING_SELECT_PAYMENT_METHOD, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DOMAIN_HAS_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_EXPAND_CLAIMS, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_DISAGREE, M.U.REGISTER_DOMAIN_CHECKOUT_TMCH_AGREE, M.U.REGISTER_DOMAIN_CHECKOUT_ERROR, M.U.TRANSFER_DOMAIN_CHANGE_STEP, M.U.RENEW_DOMAIN_COMPLETED, M.U.RESTORE_DOMAIN_INIT, M.U.RESTORE_DOMAIN_CLOSE_RESTORE_MODAL, M.U.RESTORE_DOMAIN_OPEN_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_CLOSE_ADD_PAYMENT_METHOD_MODAL, M.U.RESTORE_DOMAIN_FAILURE, M.U.RESTORE_DOMAIN_COMPLETED, M.U.DOMAIN_DELETE_INIT, M.U.DOMAIN_DELETE_COMPLETED, M.U.DOMAIN_DELETE_FAILURE_NO_PERMISSIONS, M.U.DOMAIN_DELETE_FAILURE_INVALID_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_FAILURE_UNKNOWN_REASON, M.U.DOMAIN_DELETE_CONFIRM_DELETE, M.U.DOMAIN_DELETE_CLOSE_CONFIRM_MODAL, M.U.DOMAIN_DELETE_RESEND_CONFIRMATION_CODE, M.U.DOMAIN_DELETE_CLOSE_VERIFICATION_MODAL, M.U.DOMAIN_DELETE_WARNING_MODAL_CONTINUE, M.U.DOMAIN_DELETE_CLOSE_WARNING_MODAL),
				oe = t.eg.exactStrict(t.eg.object({
					".agency": t.eg.any.optional,
					".auction": t.eg.any.optional,
					".bet": t.eg.any.optional,
					".center": t.eg.any.optional,
					".church": t.eg.any.optional,
					".com": t.eg.any.optional,
					".community": t.eg.any.optional,
					".energy": t.eg.any.optional,
					".fitness": t.eg.any.optional,
					".guru": t.eg.any.optional,
					".io": t.eg.any.optional,
					".info": t.eg.any.optional,
					".immo": t.eg.any.optional,
					".lgbt": t.eg.any.optional,
					".life": t.eg.any.optional,
					".live": t.eg.any.optional,
					".media": t.eg.any.optional,
					".mobi": t.eg.any.optional,
					".net": t.eg.any.optional,
					".network": t.eg.any.optional,
					".ninja": t.eg.any.optional,
					".online": t.eg.any.optional,
					".org": t.eg.any.optional,
					".photography": t.eg.any.optional,
					".plus": t.eg.any.optional,
					".press": t.eg.any.optional,
					".pro": t.eg.any.optional,
					".services": t.eg.any.optional,
					".store": t.eg.any.optional,
					".tech": t.eg.any.optional,
					".wiki": t.eg.any.optional,
					".wtf": t.eg.any.optional,
					".xyz": t.eg.any.optional,
					_lpchecked: t.eg.any.optional,
					a: t.eg.any.optional,
					absolute: t.eg.any.optional,
					access: t.eg.any.optional,
					access_users_allowed: t.eg.any.optional,
					account: t.eg.any.optional,
					accountId: t.eg.any.optional,
					"accountResolver/SELECT_ACCOUNT": t.eg.any.optional,
					"accountResolver/NO_ACTION": t.eg.any.optional,
					accountResolverTotalCpuTime: t.eg.any.optional,
					accountResolverTotalTime: t.eg.any.optional,
					accountResolverTotalUserActionsTime: t.eg.any.optional,
					action: t.eg.any.optional,
					addedRecords: t.eg.any.optional,
					addon: t.eg.any.optional,
					address: t.eg.any.optional,
					argo_accelerated_gigabytes: t.eg.any.optional,
					"aria-current": t.eg.any.optional,
					"aria-controls": t.eg.any.optional,
					"aria-label": t.eg.any.optional,
					"aria-selected": t.eg.any.optional,
					authHeaders: t.eg.any.optional,
					autocomplete: t.eg.any.optional,
					autoRenew: t.eg.any.optional,
					autoSetup: t.eg.any.optional,
					b: t.eg.any.optional,
					buckets: t.eg.string.optional,
					banner: t.eg.any.optional,
					bot_management: t.eg.any.optional,
					brokenExpression: t.eg.any.optional,
					bundle: t.eg.any.optional,
					c: t.eg.any.optional,
					cacheKey: t.eg.any.optional,
					cache_by_device_type: t.eg.any.optional,
					cache_rules: t.eg.any.optional,
					campaignId: t.eg.any.optional,
					campaignID: t.eg.any.optional,
					cancelled: t.eg.any.optional,
					category: t.eg.any.optional,
					cd43: t.eg.any.optional,
					cd45: t.eg.any.optional,
					cd47: t.eg.any.optional,
					certificate_pack_id: t.eg.any.optional,
					certificate_pack_type: t.eg.any.optional,
					cf: t.eg.any.optional,
					cfPlan: t.eg.any.optional,
					chartName: t.eg.any.optional,
					charts: t.eg.any.optional,
					childrenCount: t.eg.any.optional,
					childrenSelected: t.eg.any.optional,
					class: t.eg.any.optional,
					code0: t.eg.any.optional,
					columnName: t.eg.string.optional,
					completedTasks: t.eg.any.optional,
					component: t.eg.any.optional,
					component_values: t.eg.any.optional,
					configuration_rules: t.eg.any.optional,
					contentfulId: t.eg.any.optional,
					country: t.eg.any.optional,
					currentCA: t.eg.any.optional,
					currentPerPage: t.eg.any.optional,
					currentPage: t.eg.any.optional,
					d: t.eg.any.optional,
					"data-children-count": t.eg.any.optional,
					"data-tracking-name": t.eg.any.optional,
					"data-tracking-id": t.eg.any.optional,
					"data-testid": t.eg.any.optional,
					dataset: t.eg.any.optional,
					dateCreated: t.eg.any.optional,
					dateModified: t.eg.any.optional,
					ddos: t.eg.any.optional,
					description: t.eg.string.optional,
					dedicated_certificates: t.eg.any.optional,
					dedicated_certificates_custom: t.eg.any.optional,
					deepLink: t.eg.any.optional,
					default: t.eg.any.optional,
					destinationPage: t.eg.string.optional,
					detailType: t.eg.any.optional,
					deviceViewport: t.eg.any.optional,
					direction: t.eg.any.optional,
					directive: t.eg.any.optional,
					domainName: t.eg.any.optional,
					download: t.eg.any.optional,
					duration: t.eg.any.optional,
					dynamic_redirects: t.eg.any.optional,
					e: t.eg.any.optional,
					email_count: t.eg.any.optional,
					end: t.eg.any.optional,
					endDate: t.eg.any.optional,
					enabled: t.eg.any.optional,
					entitled: t.eg.any.optional,
					environment: t.eg.string.optional,
					error: t.eg.any.optional,
					errorCode: t.eg.any.optional,
					errorMessage: t.eg.any.optional,
					errors: t.eg.any.optional,
					exclude_cdn_cgi: t.eg.any.optional,
					expand: t.eg.any.optional,
					experiment: t.eg.any.optional,
					expression: t.eg.any.optional,
					features: t.eg.array(t.eg.string).optional,
					failureReasons: t.eg.any.optional,
					featureChange: t.eg.any.optional,
					featureImproved: t.eg.any.optional,
					featureName: t.eg.any.optional,
					featureOriginal: t.eg.any.optional,
					field: t.eg.any.optional,
					fieldName: t.eg.any.optional,
					filterId: t.eg.any.optional,
					firewall_rules: t.eg.any.optional,
					flow: t.eg.any.optional,
					"font-size": t.eg.any.optional,
					form: t.eg.any.optional,
					formView: t.eg.any.optional,
					frequency: t.eg.any.optional,
					from: t.eg.any.optional,
					fromCategorySearch: t.eg.any.optional,
					fromStreamRatePlanId: t.eg.any.optional,
					toStreamRatePlanId: t.eg.any.optional,
					gatesDelayed: t.eg.any.optional,
					geo: t.eg.any.optional,
					guid: t.eg.any.optional,
					hasData: t.eg.any.optional,
					hasRecords: t.eg.any.optional,
					hasSidebarNav: t.eg.boolean.optional,
					"hasTest2019-06-03": t.eg.any.optional,
					hCaptchaDisplayed: t.eg.any.optional,
					header_modification: t.eg.any.optional,
					hostname_count: t.eg.any.optional,
					hostParam: t.eg.any.optional,
					href: t.eg.any.optional,
					id: t.eg.any.optional,
					index: t.eg.any.optional,
					indexLevel: t.eg.any.optional,
					initialRecommendation: t.eg.any.optional,
					ip_access_rules: t.eg.any.optional,
					items: t.eg.number.optional,
					isAuthenticated: t.eg.any.optional,
					isPaused: t.eg.any.optional,
					isCloudflare: t.eg.any.optional,
					isExpanding: t.eg.boolean.optional,
					isEntAccount: t.eg.boolean.optional,
					isEnterprise: t.eg.boolean.optional,
					isInactive: t.eg.boolean.optional,
					isOpen: t.eg.boolean.optional,
					isScript: t.eg.any.optional,
					isSPA: t.eg.any.optional,
					isStreaming: t.eg.any.optional,
					isStripeBilling: t.eg.boolean.optional,
					isParent: t.eg.any.optional,
					isViewAll: t.eg.any.optional,
					isEditingSubscription: t.eg.any.optional,
					is_replacing: t.eg.any.optional,
					isRaw: t.eg.any.optional,
					jurisdiction: t.eg.any.optional,
					key: t.eg.any.optional,
					label: t.eg.any.optional,
					lastTimestamp: t.eg.any.optional,
					last_scan_days_ago: t.eg.any.optional,
					level: t.eg.any.optional,
					limit: t.eg.any.optional,
					link: t.eg.any.optional,
					listType: t.eg.any.optional,
					load_balancing: t.eg.any.optional,
					load_balancing_base: t.eg.any.optional,
					load_balancing_dns_queries: t.eg.any.optional,
					load_balancing_geo_routing: t.eg.any.optional,
					load_balancing_monitor_interval: t.eg.any.optional,
					load_balancing_origins: t.eg.any.optional,
					load_balancing_probe_regions: t.eg.any.optional,
					legacyDeepLink: t.eg.any.optional,
					locale: t.eg.any.optional,
					location: t.eg.any.optional,
					locationHint: t.eg.any.optional,
					maliciousCode: t.eg.any.optional,
					maliciousDomain: t.eg.any.optional,
					maliciousURL: t.eg.any.optional,
					managed_rules: t.eg.any.optional,
					marketingPlan: t.eg.any.optional,
					matchesCount: t.eg.any.optional,
					matchingRequestPercentage: t.eg.any.optional,
					matchingRequests: t.eg.any.optional,
					message0: t.eg.any.optional,
					method: t.eg.any.optional,
					millis: t.eg.any.optional,
					"mirage-recommendation": t.eg.any.optional,
					mode: t.eg.any.optional,
					monitor: t.eg.string.optional,
					monitorType: t.eg.any.optional,
					mrktCheckboxDisplayed: t.eg.any.optional,
					name: t.eg.any.optional,
					newTotalCount: t.eg.any.optional,
					novalidate: t.eg.any.optional,
					numAccounts: t.eg.any.optional,
					numRecords: t.eg.any.optional,
					numRecordsToApply: t.eg.any.optional,
					numRecordsToPrompt: t.eg.any.optional,
					numRecordsToRemove: t.eg.any.optional,
					numRows: t.eg.any.optional,
					origin_rules: t.eg.any.optional,
					numFilters: t.eg.any.optional,
					numRawLogs: t.eg.any.optional,
					numSampledLogs: t.eg.any.optional,
					moreRawLogs: t.eg.any.optional,
					old_expires_on: t.eg.any.optional,
					old_mode: t.eg.any.optional,
					oldFrequency: t.eg.string.optional,
					oldPlan: t.eg.any.optional,
					oldPrice: t.eg.number.optional,
					oldRatePlan: t.eg.string.optional,
					oldStep: t.eg.any.optional,
					oldSubscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					oldValue: t.eg.any.optional,
					onboarding: t.eg.any.optional,
					operator: t.eg.any.optional,
					order: t.eg.string.optional,
					order_by: t.eg.any.optional,
					page: t.eg.any.optional,
					page_rules: t.eg.any.optional,
					pageName: t.eg.any.optional,
					pageNumber: t.eg.any.optional,
					params: t.eg.any.optional,
					paused: t.eg.any.optional,
					origin_url: t.eg.string.optional,
					payment_country: t.eg.string.optional,
					payment_gateway: t.eg.string.optional,
					percentages: t.eg.array(t.eg.number).optional,
					permission: t.eg.string.optional,
					personalisation: t.eg.boolean.optional,
					personalized: t.eg.boolean.optional,
					per_page: t.eg.any.optional,
					plan: t.eg.any.optional,
					plans: t.eg.any.optional,
					planVolume: t.eg.any.optional,
					position: t.eg.number.optional,
					prefs: t.eg.any.optional,
					previousPage: t.eg.any.optional,
					previousTotalCount: t.eg.any.optional,
					price: t.eg.any.optional,
					priority: t.eg.any.optional,
					product: t.eg.any.optional,
					prioritize_malicious: t.eg.any.optional,
					products: t.eg.any.optional,
					productName: t.eg.any.optional,
					productCategory: t.eg.any.optional,
					provider: t.eg.any.optional,
					question: t.eg.any.optional,
					quota: t.eg.any.optional,
					ratePlan: t.eg.any.optional,
					rayId: t.eg.any.optional,
					readTasks: t.eg.any.optional,
					reason: t.eg.any.optional,
					recommendation: t.eg.any.optional,
					recommendationType: t.eg.any.optional,
					recordAdditionMethod: t.eg.any.optional,
					recordTypes: t.eg.any.optional,
					region: t.eg.any.optional,
					resourceName: t.eg.string.optional,
					rulesCount: t.eg.any.optional,
					gclid: t.eg.any.optional,
					gclsrc: t.eg.any.optional,
					dclid: t.eg.any.optional,
					utm_source: t.eg.any.optional,
					utm_medium: t.eg.any.optional,
					utm_campaign: t.eg.any.optional,
					utm_term: t.eg.any.optional,
					utm_content: t.eg.any.optional,
					rangeMax: t.eg.number.optional,
					rangeMin: t.eg.number.optional,
					rate_limiting: t.eg.any.optional,
					ratePlanId: t.eg.any.optional,
					referring_domain: t.eg.any.optional,
					referrer: t.eg.any.optional,
					registrationPeriod: t.eg.any.optional,
					registrationStatus: t.eg.any.optional,
					rel: t.eg.any.optional,
					relativeTimeRange: t.eg.any.optional,
					resultRank: t.eg.number.optional,
					"rocket_loader-recommendation": t.eg.any.optional,
					role: t.eg.any.optional,
					ruleDescription: t.eg.any.optional,
					ruleId: t.eg.any.optional,
					scanFailed: t.eg.any.optional,
					scope: t.eg.any.optional,
					searchAction: t.eg.any.optional,
					searchDescription: t.eg.any.optional,
					searchParam: t.eg.any.optional,
					searchStatus: t.eg.any.optional,
					searchTerm: t.eg.any.optional,
					searchValue: t.eg.any.optional,
					section: t.eg.any.optional,
					seenOnParam: t.eg.any.optional,
					selected: t.eg.any.optional,
					series: t.eg.any.optional,
					service: t.eg.any.optional,
					setting: t.eg.any.optional,
					setup: t.eg.any.optional,
					showErrors: t.eg.any.optional,
					sortDirection: t.eg.string.optional,
					sortBy: t.eg.string.optional,
					source: t.eg.any.optional,
					startDate: t.eg.any.optional,
					state: t.eg.any.optional,
					status: t.eg.any.optional,
					step: t.eg.any.optional,
					storageClass: t.eg.any.optional,
					string: t.eg.any.optional,
					stream_storage_thousand_minutes: t.eg.any.optional,
					stream_viewed_thousand_minutes: t.eg.any.optional,
					subcategory: t.eg.any.optional,
					subscribedToMarketing: t.eg.any.optional,
					subscriptionValues: t.eg.record(t.eg.string, t.eg.any).optional,
					success: t.eg.any.optional,
					supportLevel: t.eg.any.optional,
					tab: t.eg.any.optional,
					tableName: t.eg.any.optional,
					tag: t.eg.any.optional,
					target: t.eg.any.optional,
					targetPage: t.eg.any.optional,
					targetCA: t.eg.any.optional,
					target_pack_type: t.eg.any.optional,
					task: t.eg.any.optional,
					text: t.eg.any.optional,
					timeRange: t.eg.any.optional,
					title: t.eg.any.optional,
					tld: t.eg.string.optional,
					to: t.eg.any.optional,
					touched: t.eg.any.optional,
					total: t.eg.number.optional,
					transform_rules: t.eg.any.optional,
					topic: t.eg.any.optional,
					totalCount: t.eg.any.optional,
					totalCpuTime: t.eg.any.optional,
					totalLevels: t.eg.any.optional,
					totalRequests: t.eg.any.optional,
					totalTime: t.eg.any.optional,
					totalUserActionsTime: t.eg.any.optional,
					type: t.eg.any.optional,
					upgrade: t.eg.boolean.optional,
					uploadFailed: t.eg.any.optional,
					url_rewrites: t.eg.any.optional,
					hosts: t.eg.string.optional,
					uiType: t.eg.string.optional,
					userId: t.eg.any.optional,
					userType: t.eg.any.optional,
					utm_referrer: t.eg.any.optional,
					validation_method: t.eg.any.optional,
					validity_days: t.eg.any.optional,
					value: t.eg.any.optional,
					visibility: t.eg.any.optional,
					via: t.eg.any.optional,
					waf: t.eg.any.optional,
					wizardName: t.eg.any.optional,
					wordpress: t.eg.any.optional,
					workers: t.eg.any.optional,
					worker_kv_deletes: t.eg.any.optional,
					worker_kv_lists: t.eg.any.optional,
					worker_kv_reads: t.eg.any.optional,
					worker_kv_storage: t.eg.any.optional,
					worker_kv_writes: t.eg.any.optional,
					worker_requests: t.eg.any.optional,
					wp_plugin: t.eg.any.optional,
					zone: t.eg.any.optional,
					zoneId: t.eg.any.optional,
					zoneName: t.eg.any.optional,
					"zoneResolver/NO_ACTION": t.eg.any.optional,
					"zoneResolver/SELECT_ZONE": t.eg.any.optional,
					zoneResolverTotalCpuTime: t.eg.any.optional,
					zoneResolverTotalTime: t.eg.any.optional,
					zoneResolverTotalUserActionsTime: t.eg.any.optional,
					zones: t.eg.any.optional,
					zoneStatus: t.eg.any.optional,
					zoneType: t.eg.any.optional,
					audit: t.eg.any.optional,
					score: t.eg.any.optional,
					potentialSavings: t.eg.any.optional,
					feature: t.eg.any.optional,
					days: t.eg.any.optional,
					minutes: t.eg.any.optional,
					customRange: t.eg.any.optional,
					metric: t.eg.any.optional,
					url: t.eg.any.optional,
					previousPlan: t.eg.any.optional,
					isStarring: t.eg.any.optional,
					isStarred: t.eg.any.optional,
					totalStarredZones: t.eg.number.optional,
					totalZones: t.eg.number.optional,
					widgetName: t.eg.any.optional,
					statusType: t.eg.any.optional,
					outcome: t.eg.any.optional,
					marketingOptInChecked: t.eg.boolean.optional,
					prompt: t.eg.any.optional,
					positive: t.eg.any.optional,
					endpoint: t.eg.any.optional,
					isArgoEnabled: t.eg.any.optional,
					insightClass: t.eg.string.optional,
					insightType: t.eg.string.optional,
					severity: t.eg.string.optional,
					domain: t.eg.any.optional,
					exact: t.eg.any.optional,
					previous_selection: t.eg.any.optional,
					new_selection: t.eg.any.optional,
					payment_method: t.eg.string.optional,
					payment_option: t.eg.string.optional,
					selection: t.eg.any.optional,
					numDomainsInCart: t.eg.any.optional,
					uniqueTopLevelDomains: t.eg.any.optional
				})),
				ve = (ge, le) => {
					const [he, D] = De(le);
					let H, Ee;
					return (0, t.nM)(W.decode(ge)) && (H = new w.Uh(ge)), D && D.length > 0 && (Ee = new w.oV(ge, D)), [he, H, Ee]
				},
				De = ge => {
					const le = oe.decode(ge);
					if ((0, t.nM)(le)) {
						const he = le.left.map(({
							context: D
						}) => D.map(({
							key: H
						}) => H)).reduce((D, H) => D.concat(H), []).filter(D => D in ge);
						return [Ie(he, ge), he]
					}
					return [ge, []]
				},
				Ie = (ge, le) => Object.entries(le).reduce((he, [D, H]) => (ge.includes(D) || (he[D] = H), he), {}),
				x = ge => (le, he, D) => {
					const [H, Ee, Me] = ve(he, D);
					if (Ee) throw Ee;
					return Me && console.error(Me), ge(le, he, H)
				};
			var fe = n("../react/utils/zaraz.ts");
			const Le = {
					identify: !0
				},
				xe = ge => (le, he, D) => (Le[he] || fe.tg === null || fe.tg === void 0 || fe.tg.track(he, D), ge(le, he, D));
			var je = n("../react/utils/cookiePreferences.ts");

			function Ue(ge) {
				for (var le = 1; le < arguments.length; le++) {
					var he = arguments[le] != null ? Object(arguments[le]) : {},
						D = Object.keys(he);
					typeof Object.getOwnPropertySymbols == "function" && D.push.apply(D, Object.getOwnPropertySymbols(he).filter(function(H) {
						return Object.getOwnPropertyDescriptor(he, H).enumerable
					})), D.forEach(function(H) {
						Ye(ge, H, he[H])
					})
				}
				return ge
			}

			function Ye(ge, le, he) {
				return le = Qe(le), le in ge ? Object.defineProperty(ge, le, {
					value: he,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : ge[le] = he, ge
			}

			function Qe(ge) {
				var le = ot(ge, "string");
				return typeof le == "symbol" ? le : String(le)
			}

			function ot(ge, le) {
				if (typeof ge != "object" || ge === null) return ge;
				var he = ge[Symbol.toPrimitive];
				if (he !== void 0) {
					var D = he.call(ge, le || "default");
					if (typeof D != "object") return D;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (le === "string" ? String : Number)(ge)
			}
			const Je = ge => {
					r().init(Ue({
						sourceKey: "ca633f741e204a5291e02fcb6c591020",
						debug: !1,
						url: "https://sparrow.cloudflare.com",
						enabled: Ke() && !(0, c.gm)() && Xe(),
						middlewares: [h, x, S, xe]
					}, ge))
				},
				tt = () => {
					r().identify(Ue({}, (0, e.getAttribution)(), {
						locale: (0, y.r)((0, d.bh)().getState()),
						isCloudflare: !!(0, i.Jd)()
					}))
				},
				Ke = () => !0,
				nt = () => {
					(0, je.kT)("sparrow_id")
				},
				Xe = () => (0, je.Xm)()
		},
		"../utils/initStyles.ts": function(V, v, n) {
			"use strict";
			var e = n("../../../../node_modules/@cloudflare/style-const/es/index.js"),
				r = n("../react/app/providers/storeContainer.js");
			const c = "cfBaseStyles",
				d = document.head || document.getElementsByTagName("head")[0],
				y = u => {
					const l = [];
					for (let E in u.colors) {
						const t = u.colors[E];
						if (Array.isArray(t) && E !== "categorical")
							for (let o = 0; o < t.length; ++o) l.push(`--cf-${E}-${o}:${t[o]};`)
					}
					return l.join(`
`)
				},
				i = () => {
					const u = (0, e.Yc)(),
						l = `
    * {
      box-sizing: border-box;
    }

    ::placeholder {
      color: ${e.Rl.colors.gray[5]}
    }

    html, body, button {
      font-size: 16px;
    }

    html {
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: none;
    }

    body {
      line-height: 1.5;
      color: ${e.Rl.colors.gray[1]};
      background-color: ${e.Rl.colors.background};
      font-family: ${e.Rl.fontFamily};
    }

    text {
      fill: ${e.Rl.colors.gray[1]};
    }

    body, html, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, small {
      line-height: 1.25;
    }

    h1 {
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      font-size: 24px;
    }

    h3 {
      font-size: 20px;
    }

    h4, h5, h6 {
      font-size: 16px;
    }

    h2, h3, h4, h5 h4, h5, h6 {
      font-weight: 600;
    }

     h3 + p, h4 + p, h5 + p, h6 + p {
       margin-top: 0.5em;
     }

    small {
      font-size: 12px;
    }

    button {
      font-family: ${e.Rl.fontFamily};
      border: none;
    }

    label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.35938em;
      min-height: 1.22em;
    }

    fieldset {
      border: none;
    }

    pre {
      border-radius: 3px;
      color: ${e.Rl.colors.gray[1]};
      display: block;
      font-size: 14px;
      margin: 2rem 0;
      overflow: auto;
      padding: 0.5rem;
      width: 100%;
    }

    code, pre {
      background-color: ${u?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]};
      border: 1px solid ${u?e.Rl.colors.gray[7]:e.Rl.colors.gray[8]};
      font-family: monaco, courier, monospace;
    }

    section {
      margin-bottom: 2.5rem;
      margin-top: 2.5rem;
    }

    thead {
      background-color: ${u?e.Rl.colors.gray[8]:e.Rl.colors.gray[9]}
    }

    th {
      font-weight: 600;
    }

    a {
      color: ${u?e.Rl.colors.blue[3]:e.Rl.colors.blue[4]};
      text-decoration: underline;
      text-underline-offset: 4px;
      transition: color 150ms ease;
    }

    a:hover {
      color: ${u?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      cursor: pointer;
    }

    a:active {
      color: ${u?e.Rl.colors.orange[3]:e.Rl.colors.blue[2]};
      outline: none;
    }

    a:focus {
      color: ${e.Rl.colors.blue[5]};
    }

    a svg, a:active svg, a:hover svg {
      fill: currentColor
    }

    ol, ul, dl {
      list-style-position: outside;
      margin-left: 3em;
    }

    ul {
      list-style-type: disc;
    }

    dd {
      margin: 0;
    }

    dt {
      font-weight: 600;
      font-size: ${e.Rl.fontSizes[3]}px
    }

    p+p, p+ul, p+ol, p+dl, ul+p, ul+h2, ul+h3, ul+h4, ul+h5, ul+h6 {
      margin-top: 1.5em;
    }

    hr {
      border: 0;
      border-top: 1px solid #d5d7d8;
      display: block;
      height: 0;
      margin: 2rem 0;
      width: 100%;
    }

    img, object {
      height: auto;
      max-width: 100%;
    }

    table {
      border-spacing: 0;
    }

    legend {
      padding-inline-start: 0;
    }

    fieldset {
      margin-inline-start: 0;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      background-color: ${e.Rl.colors.background};
      color:  ${e.Rl.colors.gray[8]}
    }

    :root {
      --cf-white: ${e.Rl.colors.white};
      --cf-black: ${e.Rl.colors.black};
      ${y(e.Rl)}
    }
    
    .mode-transition *,
    .mode-transition body,
    .mode-transition input,
    .mode-transition button,
    .mode-transition footer,
    .mode-transition header,
    .mode-transition div {
      transition-duration: ${e.Rl.modeTransitionTime}ms !important;
      transition-property: color, background, background-color, fill, opacity, border, border-color !important;
      transition-timing-function: ease-out !important;
    }

    .ReactVirtualized__List {
      outline: none
    }
    .grim-scroll-sortable-helper {
      pointer-events: auto !important;
      z-index: 2000 !important;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2) !important;
      background-color: white !important;
    }
    .grim-scroll-sortable-helper * {
      cursor: grabbing !important;
    }
  `;
					let E = document.getElementById(c);
					E ? E.innerText = "" : (E = document.createElement("style"), E.id = c, d.appendChild(E)), E.appendChild(document.createTextNode(l)), (0, r.bh)().dispatch({
						type: "cfForceUpdate"
					})
				};
			(0, e.fF)(i), v.Z = i
		},
		"../utils/sentry/lastSentEventId.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				e: function() {
					return r
				}
			});
			const r = (() => {
				let c = "";
				return {
					setEventId: i => (!i || typeof i != "string" || (c = i), c),
					getEventId: () => c
				}
			})()
		},
		"../utils/zaraz.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Ro: function() {
					return o
				},
				bM: function() {
					return l
				},
				tg: function() {
					return u
				},
				yn: function() {
					return t
				}
			});

			function e(s) {
				for (var g = 1; g < arguments.length; g++) {
					var a = arguments[g] != null ? Object(arguments[g]) : {},
						C = Object.keys(a);
					typeof Object.getOwnPropertySymbols == "function" && C.push.apply(C, Object.getOwnPropertySymbols(a).filter(function(p) {
						return Object.getOwnPropertyDescriptor(a, p).enumerable
					})), C.forEach(function(p) {
						r(s, p, a[p])
					})
				}
				return s
			}

			function r(s, g, a) {
				return g = c(g), g in s ? Object.defineProperty(s, g, {
					value: a,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : s[g] = a, s
			}

			function c(s) {
				var g = d(s, "string");
				return typeof g == "symbol" ? g : String(g)
			}

			function d(s, g) {
				if (typeof s != "object" || s === null) return s;
				var a = s[Symbol.toPrimitive];
				if (a !== void 0) {
					var C = a.call(s, g || "default");
					if (typeof C != "object") return C;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (g === "string" ? String : Number)(s)
			}
			const y = {
					track: (s, g) => null,
					set: (s, g) => console.log(`zaraz.set(${s}, ${g})`)
				},
				i = {
					track: (s, g) => {
						var a;
						(a = window.zaraz) === null || a === void 0 || a.track(s, e({}, g, {
							OnetrustActiveGroups: window.OnetrustActiveGroups
						}))
					},
					set: (s, g) => {
						var a;
						return (a = window.zaraz) === null || a === void 0 ? void 0 : a.set(s, g)
					}
				};
			let u;
			const l = () => {
					window.zaraz, u = i
				},
				E = ["email", "first_name", "last_name"],
				t = s => {
					E.forEach(g => {
						var a;
						(a = u) === null || a === void 0 || a.set(g, s[g])
					})
				},
				o = () => {
					t({})
				}
		},
		"../../../common/intl/intl-core/src/Translator.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Z: function() {
					return f
				}
			});
			var e = n("../../../../node_modules/node-polyglot/index.js"),
				r = n.n(e),
				c = n("../../../common/intl/intl-types/src/index.ts"),
				d = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js"),
				y = n("../../../../node_modules/lodash/mapValues.js"),
				i = n.n(y);

			function u(S) {
				for (var h = 1; h < arguments.length; h++) {
					var w = arguments[h] != null ? Object(arguments[h]) : {},
						$ = Object.keys(w);
					typeof Object.getOwnPropertySymbols == "function" && $.push.apply($, Object.getOwnPropertySymbols(w).filter(function(Y) {
						return Object.getOwnPropertyDescriptor(w, Y).enumerable
					})), $.forEach(function(Y) {
						l(S, Y, w[Y])
					})
				}
				return S
			}

			function l(S, h, w) {
				return h = E(h), h in S ? Object.defineProperty(S, h, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = w, S
			}

			function E(S) {
				var h = t(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function t(S, h) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var $ = w.call(S, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			const o = {
					prepend: "[!!",
					append: "!!]",
					delimiter: "%",
					startDelimiter: "",
					endDelimiter: "",
					extend: 0,
					override: void 0
				},
				s = {
					A: String.fromCharCode(192, 193, 194, 195, 196, 197, 256, 258, 260, 506, 512, 514),
					a: String.fromCharCode(224, 225, 226, 227, 228, 229, 257, 259, 261, 507, 513, 515),
					B: String.fromCharCode(223, 385, 579, 665),
					b: String.fromCharCode(384, 386, 387, 388, 389, 595),
					C: String.fromCharCode(262, 264, 266, 268),
					c: String.fromCharCode(263, 265, 267, 269),
					D: String.fromCharCode(270, 272, 393, 394),
					d: String.fromCharCode(271, 273),
					E: String.fromCharCode(274, 276, 278, 280, 282, 516, 518),
					e: String.fromCharCode(275, 277, 279, 281, 283, 517, 519),
					F: String.fromCharCode(401),
					f: String.fromCharCode(402),
					G: String.fromCharCode(284, 286, 288, 290),
					g: String.fromCharCode(285, 287, 289, 291),
					H: String.fromCharCode(292, 294),
					h: String.fromCharCode(293, 295),
					I: String.fromCharCode(296, 298, 300, 302, 304),
					i: String.fromCharCode(297, 299, 301, 303, 305),
					J: String.fromCharCode(309),
					j: String.fromCharCode(308),
					K: String.fromCharCode(310, 408),
					k: String.fromCharCode(311, 312, 409),
					L: String.fromCharCode(313, 315, 317, 319, 321),
					l: String.fromCharCode(314, 316, 318, 320, 322),
					N: String.fromCharCode(323, 325, 327, 330, 413),
					n: String.fromCharCode(324, 326, 328, 329, 331, 414),
					O: String.fromCharCode(332, 334, 336, 416),
					o: String.fromCharCode(333, 335, 337, 417),
					P: String.fromCharCode(420),
					p: String.fromCharCode(421, 447),
					Q: String.fromCharCode(490, 492),
					q: String.fromCharCode(491, 493, 587),
					R: String.fromCharCode(340, 342, 344, 422),
					r: String.fromCharCode(341, 343, 345),
					S: String.fromCharCode(346, 348, 350, 352),
					s: String.fromCharCode(347, 349, 351, 353),
					T: String.fromCharCode(354, 356, 358),
					t: String.fromCharCode(355, 357, 359),
					U: String.fromCharCode(360, 362, 364, 366, 368, 370),
					u: String.fromCharCode(361, 363, 365, 367, 369, 371),
					W: String.fromCharCode(372),
					w: String.fromCharCode(373),
					Y: String.fromCharCode(374, 376, 435, 562, 590),
					y: String.fromCharCode(375, 436, 563, 591),
					Z: String.fromCharCode(377, 379, 381, 437),
					z: String.fromCharCode(378, 380, 382, 438)
				};
			var a = {
					version: "1.1.0",
					option: u({}, o),
					reset() {
						this.option = u({}, o)
					},
					table: s,
					pad(S, h) {
						for (var w = Math.floor(S.length * h / 2), $ = w, Y = S; w-- > 0;) Y = " " + Y;
						for (; $-- > 0;) Y = Y + " ";
						return Y
					},
					str(S) {
						for (var h = this.option, w = h.startDelimiter || h.delimiter, $ = h.endDelimiter || h.delimiter, Y = new RegExp(w + "\\s*[\\w\\.\\s*]+\\s*" + $, "g"), re, te = [], ee = 0, J = 0, k = "", z, se; re = Y.exec(S);) te.push(re);
						for (var B = te[J++] || {
								index: -1
							}; ee < S.length;) {
							if (B.index === ee) {
								k += B[0], ee += B[0].length, B = te[J++] || {
									index: -1
								};
								continue
							}
							if (z = h.override !== void 0 ? h.override : S[ee], se = s[z], se) {
								var ue = S.length % se.length;
								z = se[ue]
							}
							k += z, ee++
						}
						return h.prepend + this.pad(k, h.extend) + h.append
					}
				},
				C = n("../../../common/intl/intl-core/src/errors.ts");

			function p(S, h, w) {
				return h = _(h), h in S ? Object.defineProperty(S, h, {
					value: w,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : S[h] = w, S
			}

			function _(S) {
				var h = j(S, "string");
				return typeof h == "symbol" ? h : String(h)
			}

			function j(S, h) {
				if (typeof S != "object" || S === null) return S;
				var w = S[Symbol.toPrimitive];
				if (w !== void 0) {
					var $ = w.call(S, h || "default");
					if (typeof $ != "object") return $;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (h === "string" ? String : Number)(S)
			}
			a.option.delimiter = "%", a.option.startDelimiter = "{", a.option.endDelimiter = "}";
			class L {
				constructor(h) {
					p(this, "map", void 0), p(this, "currentLocale", c.Q.en_US), p(this, "options", void 0), p(this, "psudoLocalizePhrases", w => Object.entries(w).reduce(($, [Y, re]) => Object.assign($, {
						[Y]: a.str(re)
					}), {})), p(this, "getInstance", w => w ? this.map[w] : this.map[this.currentLocale]), p(this, "getInstanceMatchingPhrase", w => {
						const $ = this.getInstance();
						return $.has(w) ? $ : this.getInstance(c.Q.en_US)
					}), p(this, "extend", (w, $) => {
						const Y = this.getInstance($);
						this.options.pseudoLoc && (w = this.psudoLocalizePhrases(w)), Y.extend(w)
					}), p(this, "t", (w, $) => {
						const Y = this.getInstanceMatchingPhrase(w);
						return $ ? Y.t(w, $) : Y.t(w)
					}), p(this, "tm", (w, $) => (0, d.Z)(this.t(w, $))), p(this, "clear", () => {
						this.getInstance().clear()
					}), p(this, "replace", w => {
						this.options.pseudoLoc && (w = this.psudoLocalizePhrases(w)), this.getInstance().replace(w)
					}), p(this, "locale", w => (w && (this.currentLocale = w, this.map[w] || this.createInstance(w)), this.currentLocale)), p(this, "has", w => this.getInstanceMatchingPhrase(w).has(w)), p(this, "translateSeconds", w => {
						if (Number(w) !== 0) {
							if (w % 86400 == 0) return this.t("time.num_days", {
								smart_count: w / 86400
							});
							if (w % 3600 == 0) return this.t("time.num_hours", {
								smart_count: w / 3600
							});
							if (w % 60 == 0) return this.t("time.num_minutes", {
								smart_count: w / 60
							})
						}
						return this.t("time.num_seconds", {
							smart_count: w
						})
					}), p(this, "translateObject", w => i()(w, this.t)), this.map = {}, this.options = h || {}, this.options.allowMissing = !0, this.options.onMissingKey = (w, $, Y) => (console.error(new C.OZ(w)), $._ ? $._ : w), this.locale(h && h.locale || c.Q.en_US), h && h.phrases && (h.phrases = void 0), h && h.locale && (h.locale = void 0)
				}
				createInstance(h) {
					this.options.pseudoLoc && this.options.phrases && (this.options.phrases = this.psudoLocalizePhrases(this.options.phrases)), this.map[h] = new(r())(Object.assign(this.options, {
						locale: h
					}))
				}
			}
			var f = L
		},
		"../../../common/intl/intl-core/src/errors.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				OZ: function() {
					return y
				},
				YB: function() {
					return d
				}
			});

			function e(u, l, E) {
				return l = r(l), l in u ? Object.defineProperty(u, l, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : u[l] = E, u
			}

			function r(u) {
				var l = c(u, "string");
				return typeof l == "symbol" ? l : String(l)
			}

			function c(u, l) {
				if (typeof u != "object" || u === null) return u;
				var E = u[Symbol.toPrimitive];
				if (E !== void 0) {
					var t = E.call(u, l || "default");
					if (typeof t != "object") return t;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (l === "string" ? String : Number)(u)
			}
			class d extends Error {
				constructor(l, E) {
					super(E);
					e(this, "translationKey", void 0), this.translationKey = l, this.name = "TranslatorError"
				}
			}
			class y extends d {
				constructor(l) {
					super(l, `Translation key not found: ${l}`);
					this.name = "TranslatorKeyNotFoundError"
				}
			}
			var i = null
		},
		"../../../common/intl/intl-react/src/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				oc: function() {
					return y
				},
				lm: function() {
					return h
				},
				bd: function() {
					return s
				},
				RD: function() {
					return me
				},
				cC: function() {
					return P
				},
				QT: function() {
					return F
				},
				lP: function() {
					return ce
				}
			});
			var e = n("webpack/sharing/consume/default/react/react"),
				r = n.n(e),
				c = n("../../../common/intl/intl-core/src/Translator.ts");
			const d = e.createContext(new c.Z),
				y = d.Consumer,
				i = d.Provider;

			function u() {
				return u = Object.assign ? Object.assign.bind() : function(M) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (M[W] = R[W])
					}
					return M
				}, u.apply(this, arguments)
			}

			function l(M, A) {
				if (M == null) return {};
				var R = E(M, A),
					W, oe;
				if (Object.getOwnPropertySymbols) {
					var ve = Object.getOwnPropertySymbols(M);
					for (oe = 0; oe < ve.length; oe++) W = ve[oe], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, W) || (R[W] = M[W]))
				}
				return R
			}

			function E(M, A) {
				if (M == null) return {};
				var R = {},
					W = Object.keys(M),
					oe, ve;
				for (ve = 0; ve < W.length; ve++) oe = W[ve], !(A.indexOf(oe) >= 0) && (R[oe] = M[oe]);
				return R
			}
			class t extends e.Component {
				constructor(A) {
					super(A);
					const {
						locale: R,
						phrases: W,
						translator: oe
					} = A;
					R && oe.locale(R), W && oe.extend(W)
				}
				componentDidUpdate(A) {
					A.phrases !== this.props.phrases && this.props.phrases && this.props.translator.locale(this.props.locale)
				}
				render() {
					const {
						children: A
					} = this.props;
					return A
				}
			}
			var s = M => {
				let {
					translator: A
				} = M, R = l(M, ["translator"]);
				const W = () => e.createElement(y, null, oe => e.createElement(t, u({
					translator: oe
				}, R)));
				return A ? (A.locale(R.locale), e.createElement(i, {
					value: A
				}, W())) : W()
			};

			function g() {
				return g = Object.assign ? Object.assign.bind() : function(M) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (M[W] = R[W])
					}
					return M
				}, g.apply(this, arguments)
			}

			function a(M, A) {
				if (M == null) return {};
				var R = C(M, A),
					W, oe;
				if (Object.getOwnPropertySymbols) {
					var ve = Object.getOwnPropertySymbols(M);
					for (oe = 0; oe < ve.length; oe++) W = ve[oe], !(A.indexOf(W) >= 0) && (!Object.prototype.propertyIsEnumerable.call(M, W) || (R[W] = M[W]))
				}
				return R
			}

			function C(M, A) {
				if (M == null) return {};
				var R = {},
					W = Object.keys(M),
					oe, ve;
				for (ve = 0; ve < W.length; ve++) oe = W[ve], !(A.indexOf(oe) >= 0) && (R[oe] = M[oe]);
				return R
			}

			function p(M) {
				for (var A = 1; A < arguments.length; A++) {
					var R = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(R).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(R, oe).enumerable
					})), W.forEach(function(oe) {
						_(M, oe, R[oe])
					})
				}
				return M
			}

			function _(M, A, R) {
				return A = j(A), A in M ? Object.defineProperty(M, A, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[A] = R, M
			}

			function j(M) {
				var A = L(M, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function L(M, A) {
				if (typeof M != "object" || M === null) return M;
				var R = M[Symbol.toPrimitive];
				if (R !== void 0) {
					var W = R.call(M, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(M)
			}
			class f extends e.Component {
				constructor(...A) {
					super(...A);
					_(this, "state", {
						phrasesByLocale: {}
					}), _(this, "loadLocale", async R => {
						const {
							loadPhrases: W
						} = this.props, oe = await W(R);
						this.setState(ve => ({
							phrasesByLocale: p({}, ve.phrasesByLocale, {
								[R]: oe
							})
						}))
					})
				}
				componentDidMount() {
					this.loadLocale(this.props.locale)
				}
				componentDidUpdate(A) {
					const {
						phrasesByLocale: R
					} = this.state;
					this.props.locale !== A.locale && !R[this.props.locale] && this.loadLocale(this.props.locale)
				}
				render() {
					const {
						children: A,
						locale: R
					} = this.props, {
						phrasesByLocale: W
					} = this.state;
					return W[R] ? e.createElement(s, {
						locale: R,
						phrases: W[R]
					}, A) : null
				}
			}
			_(f, "defaultProps", {});
			var h = M => {
					let {
						locale: A
					} = M, R = a(M, ["locale"]);
					return e.createElement(y, null, W => e.createElement(f, g({
						locale: A || W.locale()
					}, R)))
				},
				w = n("../../../../node_modules/lodash/escape.js"),
				$ = n.n(w),
				Y = n("../../../../node_modules/@cloudflare/util-markdown/es/index.js");

			function re(M) {
				for (var A = 1; A < arguments.length; A++) {
					var R = arguments[A] != null ? Object(arguments[A]) : {},
						W = Object.keys(R);
					typeof Object.getOwnPropertySymbols == "function" && W.push.apply(W, Object.getOwnPropertySymbols(R).filter(function(oe) {
						return Object.getOwnPropertyDescriptor(R, oe).enumerable
					})), W.forEach(function(oe) {
						te(M, oe, R[oe])
					})
				}
				return M
			}

			function te(M, A, R) {
				return A = ee(A), A in M ? Object.defineProperty(M, A, {
					value: R,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : M[A] = R, M
			}

			function ee(M) {
				var A = J(M, "string");
				return typeof A == "symbol" ? A : String(A)
			}

			function J(M, A) {
				if (typeof M != "object" || M === null) return M;
				var R = M[Symbol.toPrimitive];
				if (R !== void 0) {
					var W = R.call(M, A || "default");
					if (typeof W != "object") return W;
					throw new TypeError("@@toPrimitive must return a primitive value.")
				}
				return (A === "string" ? String : Number)(M)
			}

			function k() {
				return k = Object.assign ? Object.assign.bind() : function(M) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (M[W] = R[W])
					}
					return M
				}, k.apply(this, arguments)
			}
			const z = /<(\d+)>(.*)<\/\1>|<(\d+)\/>/,
				se = /(?:\r\n|\r|\n)/g;

			function B(M, A, R) {
				return e.createElement("span", {
					key: M,
					"data-testid": R,
					dangerouslySetInnerHTML: {
						__html: A
					}
				})
			}

			function ue(M, A = [], R = [], W) {
				let oe = 0;
				const ve = M.replace(se, "").split(z);
				if (ve.length === 1) return [B(oe, M, W)];
				const De = [],
					Ie = ve.shift();
				if (Ie) {
					const x = B(oe, Ie, W);
					De.push(x), typeof x != "string" && oe++
				}
				for (const [x, fe, Le] of X(ve)) {
					A[x] || window.console && console.warn(`Missing Component for translation key: ${M}, index: ${x}. Fragment will be used.`);
					const xe = A[x] || e.Fragment,
						je = R[x] || {},
						Ue = B(0, fe);
					if (De.push(e.createElement(xe, k({
							key: oe
						}, je), Ue)), oe++, Le) {
						const Ye = B(oe, Le);
						De.push(Ye), typeof Ye != "string" && oe++
					}
				}
				return De
			}

			function X(M) {
				if (!M.length) return [];
				const [A, R, W, oe] = M.slice(0, 4);
				return [
					[parseInt(A || W), R || "", oe]
				].concat(X(M.slice(4, M.length)))
			}

			function G({
				id: M = "",
				smartCount: A,
				_: R,
				values: W,
				applyMarkdown: oe,
				Components: ve,
				componentProps: De,
				testId: Ie
			}) {
				return e.createElement(y, null, x => {
					W && Object.keys(W).forEach(je => W[je] = $()(W[je])), De && De.forEach(je => {
						Object.keys(je).forEach(Ue => {
							typeof je[Ue] == "string" && (je[Ue] = $()(je[Ue]))
						})
					});
					const fe = re({
							smart_count: A,
							_: R
						}, W),
						Le = oe ? (0, Y.Z)(x.t(M.toString(), fe), {
							__dangerouslyDontSanitizeMarkdown: !0
						}) : x.t(M.toString(), fe),
						xe = ue(Le, ve, De, Ie);
					return xe.length > 1 ? e.createElement(e.Fragment, null, xe) : xe[0]
				})
			}
			var P = G;

			function Z() {
				return Z = Object.assign ? Object.assign.bind() : function(M) {
					for (var A = 1; A < arguments.length; A++) {
						var R = arguments[A];
						for (var W in R) Object.prototype.hasOwnProperty.call(R, W) && (M[W] = R[W])
					}
					return M
				}, Z.apply(this, arguments)
			}

			function Q(M) {
				return R => r().createElement(y, null, W => r().createElement(M, Z({}, R, {
					translator: W
				})))
			}
			var ce = Q;

			function F() {
				if (e.useContext === void 0) throw new Error("The useI18n hook is being used with a version of React that doesn't support hooks!");
				return (0, e.useContext)(d)
			}
			var ne = n("../../../common/intl/intl-types/src/index.ts"),
				me = r().createContext(ne.Q.en_US)
		},
		"../../../common/util/types/src/api/domain.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Aw: function() {
					return w
				},
				Ib: function() {
					return S
				},
				Ks: function() {
					return $
				},
				MS: function() {
					return h
				},
				PN: function() {
					return C
				},
				Pp: function() {
					return d
				},
				Q3: function() {
					return g
				},
				TS: function() {
					return a
				},
				W7: function() {
					return j
				},
				dN: function() {
					return Y
				},
				eF: function() {
					return f
				},
				qp: function() {
					return t
				},
				wR: function() {
					return E
				}
			});
			var e = n("../../../../node_modules/@cloudflare/util-en-garde/es/index.js");
			const r = e.eg.union([e.eg.literal("registrationPending"), e.eg.literal("registrationPendingAuthorization"), e.eg.literal("registrationPendingZoneCreate"), e.eg.literal("registrationPendingRegister"), e.eg.literal("registrationPendingZoneActivate"), e.eg.literal("registrationPendingSettlement"), e.eg.literal("registrationFailed"), e.eg.literal("registrationFailedAuthorization"), e.eg.literal("registrationFailedQuote"), e.eg.literal("registrationFailedRegister"), e.eg.literal("registrationFailedZoneCreate"), e.eg.literal("registrationFailedZoneActivate"), e.eg.literal("registrationFailedSettlement"), e.eg.literal("registrationFailedDNSFatal"), e.eg.literal("registrationFailedDNSError"), e.eg.literal("registrationFailedDNSLandingCNameFatal"), e.eg.literal("registrationFailedDNSLandingCNameError"), e.eg.literal("restorationPending"), e.eg.literal("restorationPendingZoneCreate"), e.eg.literal("restorationPendingZoneActivate"), e.eg.literal("restorationFailedZoneCreate"), e.eg.literal("restorationFailedZoneActivate"), e.eg.literal("restorationSuccess"), e.eg.literal("restorationZoneCreateSuccess"), e.eg.literal("restorationZoneActivateSuccess"), e.eg.literal("restorationSuccessWithoutReport"), e.eg.literal("transferFOAPending"), e.eg.literal("transferPending"), e.eg.literal("transferRejected"), e.eg.literal("transferCancelled"), e.eg.literal("transferOutPending"), e.eg.literal("registrationActive"), e.eg.literal("expiredParked"), e.eg.literal("deletionInitiated"), e.eg.literal("deletionIrredeemable"), e.eg.literal("domainTerminated"), e.eg.literal("domainFrozen")]),
				c = e.eg.object({
					eligible: e.eg.boolean,
					enabled: e.eg.boolean.optional
				}),
				d = e.eg.object({
					address: e.eg.string,
					address2: e.eg.string,
					city: e.eg.string,
					country: e.eg.string,
					email: e.eg.string,
					email_verified: e.eg.boolean.optional,
					fax: e.eg.string,
					first_name: e.eg.string,
					id: e.eg.string.optional,
					label: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.string,
					material_changes: e.eg.array(e.eg.string).optional,
					organization: e.eg.string,
					phone: e.eg.string,
					state: e.eg.string,
					zip: e.eg.string
				}),
				y = e.eg.object({
					exists: e.eg.boolean,
					not_premium: e.eg.boolean,
					not_secure: e.eg.boolean,
					not_started: e.eg.boolean,
					not_waiting: e.eg.boolean,
					supported_tld: e.eg.boolean
				}),
				i = e.eg.object({
					registrant: d.optional,
					technical: d.optional,
					administrator: d.optional,
					billing: d.optional
				}),
				u = e.eg.object({
					auto_renew: e.eg.boolean,
					privacy: e.eg.boolean,
					contacts: i.optional,
					years: e.eg.number
				}),
				l = e.eg.object({
					icann_fee: e.eg.number,
					redemption_fee: e.eg.number,
					registration_fee: e.eg.number,
					renewal_fee: e.eg.number,
					transfer_fee: e.eg.number
				});
			let E = function(re) {
				return re.ONBOARDING_INITIATED = "Onboarding Initiated", re.ONBOARDED = "Onboarded", re.PENDING_REGISTRY_LOCK = "Pending Registry Lock", re.PENDING_REGISTRY_UNLOCK = "Pending Registry Unlock", re.REGISTRY_UNLOCKED = "Registry Unlocked", re.LOCKED = "Locked", re.FAILED_TO_LOCK = "Failed To Lock", re.PENDING_UNLOCK_APPROVAL = "Pending Unlock Approval", re.UNLOCKED = "Unlocked", re.OFFBOARDED = "Offboarded", re
			}({});
			const t = e.eg.object({
					administrator_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					auth_code: e.eg.string.optional,
					auto_renew: e.eg.boolean.optional,
					available: e.eg.boolean,
					billing_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					can_register: e.eg.boolean.optional,
					cloudflare_dns: e.eg.boolean.optional,
					cloudflare_registration: e.eg.boolean.optional,
					contacts: e.eg.any.optional,
					contacts_updated_at: e.eg.string.optional,
					cor_locked: e.eg.boolean.optional,
					cor_locked_until: e.eg.union([e.eg.string, e.eg.null]).optional,
					cor_responses_pending: e.eg.number.optional,
					created_at: e.eg.string.optional,
					created_registrar: e.eg.string.optional,
					current_registrar: e.eg.string.optional,
					domain_protection_services: e.eg.object({
						status: e.eg.enum(E).optional
					}).optional,
					dns: e.eg.array(e.eg.any).optional,
					ds_records: e.eg.array(e.eg.any).optional,
					email_verified: e.eg.boolean.optional,
					expires_at: e.eg.string.optional,
					fees: l.optional,
					landing: e.eg.union([c, e.eg.boolean]).optional,
					last_known_status: e.eg.union([e.eg.string, e.eg.null]).optional,
					locked: e.eg.boolean.optional,
					name: e.eg.string,
					name_servers: e.eg.array(e.eg.string).optional,
					material_changes: e.eg.array(e.eg.string).optional,
					partner_response: e.eg.union([e.eg.string, e.eg.null]).optional,
					payment_expires_at: e.eg.string.optional,
					pending_transfer: e.eg.boolean.optional,
					permissions: e.eg.array(e.eg.string).optional,
					previous_registrar: e.eg.union([e.eg.string, e.eg.null]).optional,
					privacy: e.eg.boolean.optional,
					registered_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					registrant_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					registry_object_id: e.eg.union([e.eg.string, e.eg.null]).optional,
					registry_statuses: e.eg.string.optional,
					supported_tld: e.eg.boolean.optional,
					tags: e.eg.array(e.eg.string).optional,
					technical_contact_id: e.eg.union([e.eg.number, e.eg.null]).optional,
					transfer_conditions: y.optional,
					updated_at: e.eg.union([e.eg.string, e.eg.null]).optional,
					updated_registrar: e.eg.string.optional,
					using_created_registrar_nameservers: e.eg.boolean.optional,
					using_current_registrar_nameservers: e.eg.boolean.optional,
					using_previous_registrar_nameservers: e.eg.boolean.optional,
					using_updated_registrar_nameservers: e.eg.boolean.optional,
					whois: e.eg.unknown.optional
				}),
				o = e.eg.object({
					available: e.eg.boolean
				}),
				s = e.eg.object({
					result: e.eg.array(t),
					result_info: e.eg.object({
						count: e.eg.number,
						page: e.eg.number,
						per_page: e.eg.number,
						total_count: e.eg.number
					}),
					errors: e.eg.array(e.eg.string),
					messages: e.eg.array(e.eg.string),
					success: e.eg.boolean
				}),
				g = e.eg.object({
					check_result: e.eg.union([e.eg.null, e.eg.object({
						name: e.eg.string,
						supported_tld: e.eg.boolean,
						premium: e.eg.boolean,
						available: e.eg.boolean,
						can_register: e.eg.boolean
					})]).optional,
					domains: e.eg.array(e.eg.object({
						name: e.eg.string,
						availability: e.eg.string,
						price: e.eg.number,
						icann_fee: e.eg.number,
						pricing: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						}),
						pricing_local: e.eg.object({
							currency: e.eg.string,
							registration_fee: e.eg.number,
							renewal_fee: e.eg.number
						})
					}))
				}),
				a = e.eg.object({
					name: e.eg.string,
					can_register: e.eg.union([e.eg.boolean, e.eg.null]),
					supported_tld: e.eg.union([e.eg.boolean, e.eg.null]),
					premium: e.eg.union([e.eg.boolean, e.eg.null]),
					available: e.eg.union([e.eg.boolean, e.eg.null])
				});
			let C = function(re) {
				return re.PENDING = "pending", re.VERIFIED = "verified", re.REJECTED = "rejected", re.PENDING_DELETE = "pending_delete", re.DELETED = "deleted", re
			}({});
			const p = e.eg.object({
					email: e.eg.string,
					status: e.eg.enum(C),
					first_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					last_name: e.eg.union([e.eg.null, e.eg.string]).optional,
					phone_number: e.eg.union([e.eg.null, e.eg.string]).optional
				}),
				_ = e.eg.object({
					designated_approvers: e.eg.array(p)
				});
			let j = function(re) {
				return re.PENDING = "pending", re.PENDING_UPDATE = "pending_update", re.ENABLED = "enabled", re.DISABLED = "disabled", re
			}({});
			const L = e.eg.object({
					auto_relock_after: e.eg.number,
					number_of_designated_approvers: e.eg.number,
					status: e.eg.enum(j)
				}),
				f = e.eg.intersection([L, _]),
				S = e.eg.object({
					status: e.eg.number,
					message: e.eg.string
				});
			let h = function(re) {
				return re.UNLOCK_APPROVAL = "UnlockApprovalRequest", re.CONFIGURATION_UPDATE = "ConfigurationUpdateRequest", re.APPROVER_EMAIL_VERIFICATION = "DesignatedApproverVerificationRequest", re.APPROVER_REMOVAL = "DesignatedApproverRemovalRequest", re
			}({});
			const w = e.eg.object({
					tlds: e.eg.array(e.eg.string)
				}),
				$ = e.eg.object({
					message: e.eg.string
				}),
				Y = e.eg.object({
					result: e.eg.object({
						entry: e.eg.object({
							address2: e.eg.string,
							address: e.eg.string,
							city: e.eg.string,
							country: e.eg.string,
							default: e.eg.boolean,
							email: e.eg.string,
							email_verified: e.eg.boolean,
							fax: e.eg.string,
							first_name: e.eg.string,
							id: e.eg.string,
							last_name: e.eg.string,
							organization: e.eg.string,
							phone: e.eg.string,
							state: e.eg.string,
							zip: e.eg.string
						})
					})
				})
		},
		"../../../common/util/types/src/utils/index.ts": function(V, v, n) {
			"use strict";
			n.d(v, {
				Yd: function() {
					return e
				},
				vE: function() {
					return r
				}
			});

			function e(c) {
				return Object.keys(c)
			}
			const r = (c, d) => {
				if (d !== void 0) throw new Error("Unexpected object: " + c);
				return d
			}
		},
		"../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$": function(V, v, n) {
			var e = {
				"./favicon-cookie.ico": "../react/app/assets/favicon-cookie.ico",
				"./favicon-dev.ico": "../react/app/assets/favicon-dev.ico",
				"./favicon-staging.ico": "../react/app/assets/favicon-staging.ico",
				"./favicon-zeit.ico": "../react/app/assets/favicon-zeit.ico"
			};

			function r(d) {
				var y = c(d);
				return n(y)
			}

			function c(d) {
				if (!n.o(e, d)) {
					var y = new Error("Cannot find module '" + d + "'");
					throw y.code = "MODULE_NOT_FOUND", y
				}
				return e[d]
			}
			r.keys = function() {
				return Object.keys(e)
			}, r.resolve = c, V.exports = r, r.id = "../react/app/assets sync recursive ^\\.\\/favicon\\-.*\\.ico$"
		},
		"../react/app/assets/favicon-cookie.ico": function(V, v, n) {
			"use strict";
			V.exports = n.p + "3f95af1452696b3d93d3.ico"
		},
		"../react/app/assets/favicon-dev.ico": function(V, v, n) {
			"use strict";
			V.exports = n.p + "1022a975e95038d58c62.ico"
		},
		"../react/app/assets/favicon-staging.ico": function(V, v, n) {
			"use strict";
			V.exports = n.p + "67b31fd5804672d4ab2d.ico"
		},
		"../react/app/assets/favicon-zeit.ico": function(V, v, n) {
			"use strict";
			V.exports = n.p + "d9aa8f47b1687e407e0f.ico"
		}
	}
]);