const navigation = {
	root: [{
		title: "navigation.root.accounts",
		url: "/",
		iconType: "user-multi"
	}, {
		title: "navigation.root.websites",
		url: "/websites",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners",
		iconType: "user-multi",
		hasPermission: function(O) {
			return (0, n.z1)(I.Mr)(O) === !0
		}
	}],
	partners: [],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: function(O) {
			return !!(0, n.z1)("oauth-access-management")(O)
		}
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: function(O) {
			return !(0, C.n3)() && !(0, n.z1)("oauth-access-management")(O)
		}
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: function(O) {
			return !(0, n.z1)("oauth-access-management")(O)
		}
	}],
	account: [{
		title: "navigation.root.websites",
		url: "/",
		iconType: "internet-browser"
	}, {
		title: function(O) {
			return (0, n.z1)("registrar-account-home-copy-experiment")(O) === "registrar" ? "navigation.account.registrar" : "navigation.account.registrar.buy_domains"
		},
		url: "",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: function(O) {
				return F(O)
			}
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: function(O) {
				return F(O)
			}
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: function(O) {
				return J(O)
			}
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.account.network_analytics",
			url: function(O) {
				return (0, t.getAccountFlipperFlag)(O, "account_analytics", "dos_analytics_v2") ? "/network-analytics/all-traffic" : "/network-analytics"
			},
			hasPermission: function(O) {
				return s(O) && !!(0, t.getAccountFlipperFlag)(O, "account_analytics", "dos_analytics")
			}
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			labels: ["new"],
			hasPermission: function(O) {
				return s(O) && (0, A.S6)(O) && !!(0, n.z1)("account-logpush")(O)
			}
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: function(O) {
				return s(O) && !!(0, t.getAccountFlipperFlag)(O, "account_analytics", "carbon_dashboard")
			}
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			labels: ["beta"],
			hasPermission: function(O) {
				return s(O) && !!(0, t.getAccountFlipperFlag)(O, "account_analytics", "magic_network_monitoring")
			}
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: function(O) {
			return s(O) && (0, M.xU)(O)
		},
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: function(O) {
				return s(O) && (0, M.sL)(O)
			}
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			labels: ["beta"],
			hasPermission: function(O) {
				return s(O) && (0, M.sL)(O) && !!(0, n.z1)("account-level-security-analytics")(O)
			}
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: function(O) {
				return s(O) && (0, M.sL)(O)
			}
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: function(O) {
				return s(O) && (0, M.TT)(O)
			}
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			hasPermission: function(O) {
				return s(O) && (0, M.jD)(O)
			}
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			hasPermission: function(O) {
				return s(O) && (0, M.BU)(O)
			}
		}, {
			title: "navigation.account.security_center.cfone",
			url: "/security-center/cloudforce-one",
			hasPermission: function(O) {
				return s(O) && (0, M.sK)(O)
			}
		}]
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		hasPermission: function(O) {
			return !!ee(O)
		}
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		labels: ["beta"],
		hasPermission: function(O) {
			return s(O) && !!(0, n.z1)("managed-challenge-ui")(O)
		}
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: function(O) {
			return s(O) && !!(0, t.getAccountFlipperFlag)(O, "magic_transit", "mt_home")
		}
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: function(O) {
			return !!re(O)
		}
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: function(O) {
			var Ee = !!H(O) && !!R(O);
			return !!ie(O) || Ee
		}
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		labels: ["new"],
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: function(O) {
				return s(O) && !!(0, t.getAccountFlipperFlag)(O, "addressing", "ip_prefixes")
			}
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: function(O) {
				return s(O) && !!(0, n.z1)("proxy-ips-ui")(O)
			}
		}],
		hasPermission: function(O) {
			return s(O) && !!(0, t.getAccountFlipperFlag)(O, "addressing", "ip_prefixes")
		}
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: function() {
			var O = (0, a.e1)(),
				Ee = "https://one.dash.cloudflare.com";
			return O ? "".concat(Ee, "/").concat(O, "/") : Ee
		},
		iconType: "cloudflare-zero-trust",
		labels: ["external-link"],
		hasPermission: function(O) {
			return s(O)
		}
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		labels: ["new"],
		hasPermission: function(O) {
			return s(O) && !!(0, t.getAccountFlipperFlag)(O, "magic_wan", "mw_home")
		}
	}, {
		hasPermission: function(O) {
			return s(O)
		},
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1"
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(O) {
			return s(O)
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/workers/overview"
		}, {
			title: "navigation.account.workers.custom_domains",
			url: "/workers/custom-domains",
			hasPermission: function(O) {
				return !!(0, t.getAccountFlipperFlag)(O, "workers", "origin_workers") && !!(0, t.getAccountFlipperFlag)(O, "workers", "triggers_ui")
			}
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: function(O) {
				return !!(0, n.z1)("queues-ui")(O)
			}
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1",
			labels: ["alpha"],
			hasPermission: function(O) {
				return !!(0, t.getAccountFlipperFlag)(O, "workers", "cfsql_bindings")
			}
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: function(O) {
				var Ee = (0, o.getSubscriptions)(O);
				return !(0, T.ky)(Ee, [v.uD.UnboundEnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: function(O) {
			return !!(0, n.z1)("workers-for-platforms")(O) && s(O) && ((0, i.hasEnterpriseAccountEntitlement)(O) || !!(0, t.getAccountFlipperFlag)(O, "workers", "workers_for_saas"))
		}
	}, {
		title: "navigation.account.pages",
		url: "/pages",
		iconType: "pages-logo",
		hasPermission: function(O) {
			return s(O)
		}
	}, {
		title: "navigation.account.r2",
		url: "/r2",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: function(O) {
			return s(O)
		},
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: function(O) {
				return pe(O)
			}
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			labels: ["beta"],
			hasPermission: function(O) {
				return pe(O)
			}
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: function(O) {
			return s(O)
		},
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: function(O) {
				return k(O)
			}
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: function(O) {
				return k(O)
			}
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: function(O) {
				return k(O)
			}
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: function(O) {
			return s(O) && !!(0, t.getAccountFlipperFlag)(O, "cloudflare_images", "early_release_access")
		},
		pages: [{
			title: "navigation.account.images",
			url: "/images/images",
			hasPermission: function(O) {
				return j(O)
			}
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: function(O) {
				return j(O)
			}
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: function(O) {
				return j(O)
			}
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: function(O) {
				return j(O)
			},
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			hasPermission: function(O) {
				return j(O) && (0, g.b8)(O)
			},
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "user-multi",
		hasPermission: function(O) {
			return s(O) && (!!(0, t.getAccountFlipperFlag)(O, "calls", "enabled") || !!(0, t.getAccountFlipperFlag)(O, "Calls", "enabled"))
		}
	}, {
		title: "navigation.account.group_title.account_management",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: function(O) {
				return (0, u.b)(O) ? s(O) : (0, t.getPermission)(O)("auditlogs").read
			}
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: function(O) {
				return s(O)
			}
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: function(O) {
			return s(O)
		}
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		labels: ["beta"],
		hasPermission: function(O) {
			return s(O)
		}
	}, {
		title: "navigation.account.http_applications",
		url: "/http-applications",
		iconType: "applications",
		labels: ["beta"],
		hasPermission: function(O) {
			return s(O) && (0, y.dU)(O)
		}
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		canBeVersioned: !1
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return B(O, "analytics", "analytics")
		},
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			canBeVersioned: !1,
			hasPermission: function(O) {
				var Ee = (0, x.getZone)(O);
				return Ee ? !!(!(0, i.zoneIsDNSOnly)(O) && !!(0, x.getZoneFlipperFlag)(O, "origin_reachability_dash", "dash_view") && (0, x.isPlanAtLeast)(Ee, "enterprise") && !!(0, r.getZoneGraphQLSettingEnabled)(O, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			canBeVersioned: !1,
			hasPermission: function(O) {
				var Ee = (0, x.getZone)(O);
				return Ee ? !!(!(0, i.zoneIsDNSOnly)(O) && !!(0, x.getZoneFlipperFlag)(O, "edge_reachability_dash", "dash_view") && (0, x.isPlanAtLeast)(Ee, "enterprise") && !!(0, r.getZoneGraphQLSettingEnabled)(O, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			canBeVersioned: !1,
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return Object.values((0, A.H_)(O)).some(Boolean)
			}
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O) && !!(0, x.getZoneFlipperFlag)(O, "logs", "instant_log") && !!(0, i.getZoneEntitlement)(O, "logpush.max_instant_logs_jobs_allowed")
			}
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		canBeVersioned: !0,
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		hasPermission: function(O) {
			return !!(0, n.z1)("versioning-enablement")(O) && B(O, "zone_versioning", "versioning")
		}
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		canBeVersioned: !1,
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: function(O) {
			return B(O, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !!(0, n.z1)("dns-tab-sections")(O)
			}
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !!(0, n.z1)("dns-tab-sections")(O)
			}
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		canBeVersioned: !1,
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "dns_records", "dns-record")
		},
		pages: [{
			title: "navigation.zone.email.routing",
			canBeVersioned: !1,
			url: "/email/routing"
		}, {
			title: "navigation.zone.email.security",
			canBeVersioned: !1,
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		canBeVersioned: !1,
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: function(O) {
			var Ee = (0, x.getZone)(O);
			if ((0, i.zoneIsDNSOnly)(O) || !U(O, "zone_settings", "spectrum.app") || !Ee) return !1;
			var Be = !!((0, L.userHasEntZones)(O) || (0, x.userHasDelegatedEntZones)(O)),
				We = !!(0, x.getZoneFlipperFlag)(O, "spectrum", "enabled"),
				de = !!(0, x.isFree)(Ee);
			return We || Be || !de
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return (0, i.hasAccountEntitlement)(O, "staging_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !!(0, n.z1)("client-certificates")(O) || !!(0, x.getZoneFlipperFlag)(O, "ssl", "client_certificates")
			}
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			canBeVersioned: !1,
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			canBeVersioned: !1,
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.analytics",
			canBeVersioned: !0,
			url: "/security/analytics",
			labels: ["beta"],
			hasPermission: function(O) {
				return (0, b.B_)(O)
			}
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.page_shield",
			canBeVersioned: !1,
			url: "/security/page-shield"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return (0, i.hasZoneEntitlement)(O, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed")
			}
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			canBeVersioned: !1,
			labels: ["new"],
			hasPermission: function(O) {
				var Ee = (0, x.getZone)(O);
				return Ee ? !!(0, x.getZoneFlipperFlag)(O, "firewall", "api_shield_tab") && (0, x.isPlanAtLeast)(Ee, "business") : !1
			}
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			canBeVersioned: !0
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		canBeVersioned: !1,
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && (U(O, "access", "access.app") || U(O, "access", "access.zone.app"))
		}
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/speed",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return (0, n.z1)("speed-test-result")(O) !== !0
			}
		}, {
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			canBeVersioned: !0,
			labels: ["beta"],
			hasPermission: function(O) {
				return (0, n.z1)("speed-test-result")(O) === !0
			}
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.speed.browser_insights",
			canBeVersioned: !1,
			url: "/speed/browser-insights"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.common.overview",
			canBeVersioned: !0,
			url: "/caching"
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			canBeVersioned: !0,
			labels: ["beta"],
			hasPermission: function(O) {
				return B(O, "waf", "firewall.rule") || B(O, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.zone.caching.cache_reserve",
			canBeVersioned: !1,
			url: "/caching/cache-reserve",
			labels: ["beta"],
			hasPermission: function(O) {
				return !!X(O)
			}
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && U(O, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.configuration_rules",
			labels: ["beta"],
			url: "/rules/configuration-rules",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return B(O, "waf", "firewall.rule") || B(O, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			canBeVersioned: !0
		}, {
			title: "navigation.zone.rules.redirect_rules",
			labels: ["beta"],
			url: "/rules/redirect-rules",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return B(O, "zone_settings", "page-rule")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			canBeVersioned: !0,
			hasPermission: function(O) {
				return B(O, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return B(O, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return B(O, "lb", "load-balancer") || B(O, "waitingroom", "waiting-room")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			canBeVersioned: !0,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.traffic.argo_tunnel",
			url: "/traffic/argo-tunnel",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O) && !!(0, r.getZoneGraphQLSettingEnabled)(O, "healthCheckEventsAdaptiveGroups")
			}
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			canBeVersioned: !1,
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O) && ((0, i.hasZoneEntitlement)(O, "waiting_rooms.allowed") || !!(0, x.getZoneFlipperFlag)(O, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		canBeVersioned: !1,
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "app", "com.cloudflare.api.app.manage", "edit")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		canBeVersioned: !0,
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		canBeVersioned: !1,
		labels: function(O) {
			var Ee = [],
				Be = (0, x.getZone)(O);
			return Be && !(0, x.isPlanAtLeast)(Be, "pro") && Ee.push("beta"), Ee
		},
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zaraz", "zaraz")
		},
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			canBeVersioned: !1,
			url: "/zaraz/tools-config"
		}, {
			title: "navigation.zone.zaraz.history",
			canBeVersioned: !1,
			url: "/zaraz/history",
			hasPermission: function(O) {
				return O.zaraz.zarazWorkflow.isRequesting ? !1 : O.zaraz.zarazWorkflow.data === "preview"
			}
		}, {
			title: "navigation.zone.zaraz.monitoring",
			canBeVersioned: !1,
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.consent",
			canBeVersioned: !1,
			url: "/zaraz/consent",
			labels: function(O) {
				var Ee = [],
					Be = (0, x.getZone)(O);
				return Be && (0, x.isPlanAtLeast)(Be, "pro") && Ee.push("beta"), Ee
			}
		}, {
			title: "navigation.zone.zaraz.settings",
			canBeVersioned: !1,
			url: "/zaraz/settings"
		}]
	}, {
		title: "navigation.zone.web3",
		url: "/web3",
		canBeVersioned: !1,
		iconType: "web3",
		labels: ["new"],
		hasPermission: function(O) {
			var Ee = (0, t.getMembership)(O),
				Be = (Ee == null ? void 0 : Ee.roles) || [];
			return Be.includes("Trust and Safety") ? !1 : !(0, i.zoneIsDNSOnly)(O)
		}
	}],
	application: [{
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "ssl", "ssl.cert")
		},
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security/waf",
		iconType: "shield",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "waf", "firewall.rule")
		},
		pages: [{
			title: "navigation.zone.security.waf",
			url: "/security/waf"
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots"
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos"
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings"
		}]
	}, {
		title: "navigation.zone.speed",
		url: "/speed/optimization",
		iconType: "bolt",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization"
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching/tiered-cache",
		iconType: "drive",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		},
		pages: [{
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			hasPermission: function(O) {
				return s(O)
			}
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration"
		}]
	}, {
		title: "navigation.account.workers",
		url: "/workers",
		iconType: "edgeworker",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "worker", "worker.route")
		}
	}, {
		title: "navigation.zone.rules",
		url: "/rules",
		iconType: "filter",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "page-rule")
		},
		pages: [{
			title: "navigation.zone.rules.page_rules",
			url: "/rules"
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			hasPermission: function(O) {
				return B(O, "waf", "page-rule", "update")
			}
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			labels: ["beta"],
			hasPermission: function(O) {
				return B(O, "waf", "page-rule", "read")
			}
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			hasPermission: function(O) {
				return B(O, "waf", "page-rule", "read")
			}
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		}
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		hasPermission: function(O) {
			return B(O, "lb", "load-balancer")
		},
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			hasPermission: function(O) {
				return !(0, i.zoneIsDNSOnly)(O)
			}
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "custom-page")
		}
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		hasPermission: function(O) {
			return !(0, i.zoneIsDNSOnly)(O) && B(O, "zone_settings", "setting")
		}
	}]
}