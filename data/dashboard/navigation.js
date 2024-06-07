const navigation = {
	root: [{
		title: "navigation.root.organizations",
		url: "/organizations",
		labels: ["new"],
		iconType: "cloud-multi",
		hasPermission: T => !!(0, e.z1)("control-plane-large-orgs")(T)
	}, {
		title: "navigation.root.accounts",
		url: "/",
		iconType: "cloud-internet"
	}, {
		title: "navigation.root.websites",
		url: "/zones",
		iconType: "internet-browser"
	}, {
		title: "navigation.root.profile",
		url: "/profile",
		iconType: "user-outline"
	}, {
		title: "navigation.root.partners",
		url: "/partners/tenant",
		iconType: "carbon",
		hasPermission: T => (0, e.z1)(_.Mr)(T) && (0, J.z7)(T) && !!(0, J.z$)(T).length
	}],
	partners: [{
		title: "navigation.partners.tenant",
		url: "/partners/tenant",
		iconType: "cloudflare-magic-wan"
	}, {
		title: "navigation.partners.accounts",
		url: "/partners/account",
		iconType: "user-multi"
	}],
	profile: [{
		title: "navigation.profile.preferences",
		url: "/",
		iconType: "edit"
	}, {
		title: "navigation.profile.access_management",
		url: "/access-management",
		iconType: "lock",
		hasPermission: T => !!(0, e.z1)("oauth-access-management")(T)
	}, {
		title: "navigation.profile.authentication",
		url: "/authentication",
		iconType: "key",
		hasPermission: T => !(0, i.n3)() && !(0, e.z1)("oauth-access-management")(T)
	}, {
		title: "navigation.profile.api_tokens",
		url: "/api-tokens",
		iconType: "script"
	}, {
		title: "navigation.profile.sessions",
		url: "/sessions",
		iconType: "time",
		hasPermission: T => !(0, e.z1)("oauth-access-management")(T)
	}],
	account: [{
		title: "navigation.account.home",
		url: "/",
		iconType: "home",
		labels: ["beta"],
		hasPermission: T => !!(0, e.z1)("dash-account-home-v2")(T)
	}, {
		title: "navigation.root.websites",
		url: T => (0, e.z1)("dash-account-home-v2")(T) ? "/websites" : "/",
		iconType: "internet-browser"
	}, {
		title: "navigation.account.discover",
		url: "/discover",
		iconType: "discover"
	}, {
		title: "navigation.account.registrar",
		url: "/domains",
		iconType: "registrar-logo",
		pages: [{
			title: "navigation.account.registrar.manage_domains",
			url: "/domains"
		}, {
			title: "navigation.account.registrar.transfer_domains",
			url: "/domains/transfer",
			hasPermission: T => (0, a.YV)(T)
		}, {
			title: "navigation.account.registrar.register_domains",
			url: "/domains/register",
			hasPermission: T => (0, a.YV)(T)
		}, {
			title: "navigation.account.registrar.domain_protection",
			url: "/domains/protection",
			labels: ["beta"],
			hasPermission: T => (0, a.gw)(T)
		}]
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		pages: [{
			title: "navigation.account.account_analytics",
			url: "/analytics",
			labels: ["beta"],
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.account.network_analytics",
			url: "/network-analytics/all-traffic",
			hasPermission: T => (0, a.iY)(T) && (0, O.Ob)(T)
		}, {
			title: "navigation.account.web_analytics",
			url: "/web-analytics",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.account.logs",
			url: "/logs",
			hasPermission: T => (0, a.iY)(T) && (0, d.S6)(T) && !!(0, e.z1)("account-logpush")(T)
		}, {
			title: "navigation.account.carbon",
			url: "/carbon",
			hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "account_analytics", "carbon_dashboard")
		}, {
			title: "navigation.account.magic.network_monitoring",
			url: "/network-monitoring",
			hasPermission: T => (0, a.iY)(T) && (!!(0, o.Le)(T, "account_analytics", "magic_network_monitoring") || !!(0, u.$f)(T, "rulesets.magic_transit_allowed"))
		}]
	}, {
		title: "navigation.account.security_center",
		url: "/security-center",
		iconType: "product-security-center",
		hasPermission: T => (0, a.iY)(T) && (0, s.xU)(T),
		pages: [{
			title: "navigation.account.security_center.security_insights",
			url: "/security-center",
			hasPermission: T => (0, a.iY)(T) && (0, s.sL)(T)
		}, {
			title: "navigation.account.security_center.security_analytics",
			url: "/security-center/analytics",
			hasPermission: T => (0, a.iY)(T) && (0, s.B_)(T)
		}, {
			title: "navigation.account.security_center.security_events",
			url: "/security-center/events",
			labels: ["beta"],
			hasPermission: T => (0, a.iY)(T) && (0, s.B_)(T)
		}, {
			title: "navigation.account.security_center.infrastructure",
			url: "/security-center/inventory",
			hasPermission: T => (0, a.iY)(T) && (0, s.sL)(T)
		}, {
			title: "navigation.account.security_center.investigate",
			url: "/security-center/investigate",
			hasPermission: T => (0, a.iY)(T) && (0, s.TT)(T)
		}, {
			title: "navigation.account.security_center.reports",
			url: "/security-center/reports",
			labels: ["beta"],
			hasPermission: T => (0, a.iY)(T) && (0, s.jD)(T)
		}, {
			title: "navigation.account.security_center.brand_protection",
			url: "/security-center/brand-protection",
			labels: ["beta"],
			hasPermission: T => (0, a.iY)(T) && (0, s.BU)(T)
		}, {
			title: "navigation.account.security_center.cfone_priorities",
			url: "/cloudforce-one/priorities",
			hasPermission: T => (0, a.iY)(T) && (0, s.fs)(T)
		}, {
			title: "navigation.account.security_center.cfone_reports",
			url: "/cloudforce-one/reports",
			hasPermission: T => (0, a.iY)(T) && (0, s.Bc)(T)
		}, {
			title: "navigation.account.security_center.cfone_requests",
			url: "/cloudforce-one/requests",
			hasPermission: T => (0, a.iY)(T) && (0, s.gA)(T)
		}]
	}, {
		title: "navigation.account.request_tracer",
		url: "/trace",
		iconType: "trace",
		testId: "trace-link",
		labels: ["beta"],
		hasPermission: W.T
	}, {
		title: "navigation.account.group_title.application_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.waf",
		url: "/application-security/waf",
		iconType: "cloudflare-security-application",
		tabs: S.DW
	}, {
		title: "navigation.account.dns_firewall",
		url: "/dns-firewall",
		iconType: "reliability-dns",
		testId: "sidenav-dns_firewall-link",
		hasPermission: T => (0, u.Ci)(T)
	}, {
		title: "navigation.account.turnstile",
		url: "/turnstile",
		iconType: "turnstile",
		testId: "sidenav-turnstile-link",
		hasPermission: T => (0, a.iY)(T) && !!(0, e.z1)("managed-challenge-ui")(T)
	}, {
		title: "navigation.account.group_title.network_services",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.interconnects",
		url: "/interconnects",
		iconType: "cloudflare-magic-wan",
		hasPermission: T => !!((0, a.iY)(T) && (0, e.z1)("magic-interconnects")(T) && (!!(0, o.Le)(T, "magic_wan", "mw_home") || !!(0, o.Le)(T, "magic_transit", "mt_home")))
	}, {
		title: "navigation.account.magic_transit",
		url: "/magic-transit",
		iconType: "magic-transit-logo",
		hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "magic_transit", "mt_home"),
		pages: [{
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-transit/configuration",
			tabs: L.Lx.concat(L.SF, L.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-transit/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-transit/packet-captures/captures"
		}]
	}, {
		title: "navigation.account.magic_firewall",
		url: "/network-security/magic_firewall",
		iconType: "magic-firewall",
		hasPermission: T => !!(0, a.zJ)(T),
		tabs: S.$$
	}, {
		title: "navigation.account.l3l4.ddos",
		url: "/network-security/ddos",
		iconType: "cloudflare-security-network",
		hasPermission: T => {
			const ge = !!(0, a.Wq)(T) && !!(0, a.fO)(T);
			return !!(0, a.Tk)(T) || ge
		},
		tabs: S.Dn,
		pages: [{
			title: "navigation.account.l3l4.ddos.ddos_managed_rules",
			url: "/network-security/ddos",
			hasPermission: T => {
				const ge = !!(0, a.Wq)(T) && !!(0, a.fO)(T);
				return (0, ne.EL)(T) && ge
			}
		}, {
			title: "navigation.account.l3l4.ddos.ddos_protection",
			url: "/network-security/ddos-protection/settings",
			hasPermission: T => (0, ne.EL)(T) && (0, a.Tk)(T)
		}]
	}, {
		title: "navigation.account.ip_addresses",
		url: "/ip-addresses/ip-prefixes",
		iconType: "network",
		pages: [{
			title: "navigation.account.ip_addresses.ip_prefixes",
			url: "/ip-addresses/ip-prefixes",
			hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "addressing", "ip_prefixes")
		}, {
			title: "navigation.account.ip_addresses.proxy-ips",
			url: "/ip-addresses/proxy-ips",
			hasPermission: T => (0, a.iY)(T) && !!(0, e.z1)("proxy-ips-ui")(T)
		}],
		hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "addressing", "ip_prefixes")
	}, {
		title: "navigation.account.group_title.cloudflare_one",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.zero_trust",
		url: () => {
			const T = (0, r.e1)(),
				ge = "https://one.dash.cloudflare.com";
			return T ? `${ge}/${T}/` : ge
		},
		iconType: "cloudflare-zero-trust",
		labels: T => (0, e.z1)("zt-sidebar")(T) ? [] : ["external-link"],
		hasPermission: T => (0, a.iY)(T)
	}, {
		title: "navigation.account.magic_wan",
		url: "/magic-wan",
		iconType: "cloudflare-magic-wan",
		hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "magic_wan", "mw_home") || !!(0, o.Le)(T, "magic_wan", "mc_home"),
		pages: [{
			title: "navigation.account.magic_connectors.overview",
			url: "/magic-wan/overview",
			hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.sites",
			url: "/magic-wan/sites",
			hasPermission: T => (0, a.iY)(T) && !!(0, o.Le)(T, "magic_wan", "mc_home")
		}, {
			title: "navigation.account.magic_connectors.cloud_connectors",
			url: "/magic-wan/cloud",
			labels: ["beta"],
			hasPermission: T => !!(0, u.$f)(T, "magic_cloud.enabled")
		}, {
			title: "navigation.account.magic_connectors.configuration",
			url: "/magic-wan/configuration",
			tabs: L.SF.concat(L.Jg)
		}, {
			title: "navigation.account.magic.tunnel_healthcheck",
			url: "/magic-wan/tunnel-healthchecks"
		}, {
			title: "account.magic.packet_captures.menu",
			url: "/magic-wan/packet-captures/captures"
		}]
	}, {
		hasPermission: T => (0, a.iY)(T),
		iconType: "email-forwarding",
		title: "navigation.account.area_one",
		url: "/area1",
		pages: [{
			title: "navigation.common.overview",
			url: "/area1"
		}, {
			title: "navigation.account.area_one.retro_scan",
			url: "/area1/retro-scan",
			hasPermission: T => (0, e.z1)("area-1-retro-scan")(T) === !0
		}, {
			title: "navigation.account.area_one.dashboard",
			url: "https://horizon.area1security.com/api/cf-auth/login",
			labels: ["external-link"]
		}]
	}, {
		title: "navigation.account.group_title.developer_platform",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.workers_and_pages",
		url: "/workers-and-pages",
		additionalMatchUrls: ["/workers", "/pages"],
		iconType: "workers-pages",
		hasPermission: T => (0, a.iY)(T),
		testId: "sidenav-workers-pages-link",
		pages: [{
			title: "navigation.common.overview",
			url: "/workers-and-pages"
		}, {
			title: "navigation.account.workers.kv",
			url: "/workers/kv/namespaces"
		}, {
			title: "navigation.account.workers.durable_objects",
			url: "/workers/durable-objects",
			hasPermission: T => !!(0, e.z1)("durable-objects-ui")(T)
		}, {
			title: "navigation.account.workers.queues",
			url: "/workers/queues",
			labels: ["beta"],
			hasPermission: T => !!(0, e.z1)("queues-ui")(T),
			testId: "sidenav-queues-link"
		}, {
			title: "navigation.account.workers.d1",
			url: "/workers/d1"
		}, {
			title: "navigation.account.workers.constellation",
			url: "/workers/constellation",
			labels: ["beta"],
			hasPermission: T => !!(0, e.z1)("constellation-ui")(T) && !(0, o.RO)(T)
		}, {
			title: "navigation.account.workers.hyperdrive",
			url: "/workers/hyperdrive",
			hasPermission: T => !!(0, e.z1)("hyperdrive-ui")(T)
		}, {
			title: "navigation.account.workers.browser_rendering",
			url: "/workers/browser-rendering",
			hasPermission: T => !!(0, e.z1)("browser-rendering-ui")(T) && (!!(0, o.Le)(T, "workers", "browser_bindings") || !!(0, u.$f)(T, "workers.enabled"))
		}, {
			title: "navigation.account.workers.plans",
			url: "/workers/plans",
			hasPermission: T => {
				const ge = (0, m.tJ)(T);
				return !(0, c.ky)(ge, [E.uD.EnterpriseTrial])
			}
		}]
	}, {
		title: "navigation.account.workers_for_platforms",
		url: "/workers-for-platforms",
		iconType: "workers-for-platforms",
		testId: "workers-for-platforms",
		hasPermission: T => (0, a.iY)(T) && (0, K.k)(T)
	}, {
		title: "navigation.account.workers.ai",
		url: "/ai/workers-ai",
		iconType: "workers-constellation",
		hasPermission: T => !!(0, o.RO)(T) || !!(0, o.B)(T),
		testId: "sidenav-ai-link",
		pages: [{
			title: "navigation.account.workers.ai.workers-ai",
			url: "/ai/workers-ai",
			testId: "sidenav-ai-workers-link",
			hasPermission: T => (0, o.RO)(T)
		}, {
			title: "navigation.account.workers.ai.vectorize",
			url: "/ai/vectorize",
			labels: ["beta"],
			testId: "sidenav-ai-vectorize-link",
			hasPermission: T => (0, o.RO)(T) && !!(0, u.BF)(T, "vector_db.enabled")
		}, {
			title: "navigation.account.workers.ai.ai-gateway",
			url: "/ai/ai-gateway",
			testId: "sidenav-ai-gateway-link",
			hasPermission: T => !!(0, o.B)(T)
		}]
	}, {
		title: "navigation.account.r2",
		url: "/r2/overview",
		iconType: "r2",
		testId: "sidenav-r2-link",
		hasPermission: T => (0, a.iY)(T),
		pages: [{
			title: "navigation.account.r2.overview",
			url: "/r2/overview",
			hasPermission: T => (0, a.o_)(T)
		}, {
			title: "navigation.account.r2_slurper",
			url: "/r2/slurper",
			testId: "sidenav-r2Migrator-link",
			hasPermission: T => (0, a.o_)(T)
		}]
	}, {
		title: "navigation.account.stream",
		url: "/stream",
		iconType: "stream",
		hasPermission: T => (0, a.iY)(T),
		pages: [{
			title: "navigation.account.stream.videos",
			url: "/stream/videos",
			hasPermission: T => (0, a.hv)(T)
		}, {
			title: "navigation.account.stream.live_inputs",
			url: "/stream/inputs",
			hasPermission: T => (0, a.hv)(T)
		}, {
			title: "navigation.common.analytics",
			url: "/stream/analytics",
			labels: ["new"],
			hasPermission: T => (0, a.hv)(T)
		}]
	}, {
		title: "navigation.account.images",
		url: "/images",
		iconType: "image",
		testId: "sidenav-images-link",
		hasPermission: T => (0, a.iY)(T),
		pages: [{
			title: "navigation.account.images.overview",
			url: "/images/images",
			hasPermission: T => (0, a.IU)(T)
		}, {
			title: "navigation.account.images.variants",
			url: "/images/variants",
			hasPermission: T => (0, a.IU)(T)
		}, {
			title: "navigation.account.images.keys",
			url: "/images/keys",
			hasPermission: T => (0, a.IU)(T)
		}, {
			title: "navigation.account.images.sourcing_kit",
			url: "/images/sourcing-kit",
			testId: "sidenav-sourcingkit-link",
			hasPermission: T => (0, a.IU)(T),
			labels: ["beta"]
		}, {
			title: "navigation.account.images.delivery_zones",
			url: "/images/delivery-zones",
			testId: "sidenav-delivery-zones-link",
			labels: ["new"]
		}]
	}, {
		title: "navigation.account.calls",
		url: "/calls",
		labels: ["beta"],
		iconType: "calls",
		hasPermission: T => (0, a.iY)(T)
	}, {
		title: "navigation.account.group_title.account_management",
		url: "/",
		labels: ["separator"],
		iconType: "internet-browser"
	}, {
		title: "navigation.account.manage_account",
		url: "/members",
		iconType: "gear",
		testId: "manage-account-link",
		pages: [{
			title: "navigation.account.members",
			url: "/members",
			testId: "account-homepage-members",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.account.api_tokens",
			url: "/api-tokens",
			testId: "account-homepage-api-tokens",
			hasPermission: T => (0, a.iY)(T) && !!(0, e.z1)("account-owned-api-tokens")(T)
		}, {
			title: "navigation.account.audit_log",
			url: "/audit-log",
			testId: "account-homepage-audit-logs",
			hasPermission: T => (0, C.b)(T) ? (0, a.iY)(T) : (0, o.Yj)(T)("auditlogs").read
		}, {
			title: "navigation.account.billing",
			url: "/billing",
			testId: "account-homepage-billing",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.account.configurations",
			url: "/configurations",
			testId: "account-homepage-configurations",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.account.mcn",
			url: "/mcn",
			labels: ["beta"],
			hasPermission: T => !!((0, a.iY)(T) && !!(0, u.$f)(T, "magic_cloud.enabled")),
			testId: "sidenav-mcn-pages-link"
		}]
	}, {
		title: "navigation.account.notifications",
		url: "/notifications",
		iconType: "notifications",
		hasPermission: T => (0, a.iY)(T)
	}, {
		title: "navigation.account.account_inbox",
		url: "/account-inbox",
		iconType: "inbox",
		hasPermission: T => (0, a.iY)(T) && !!(0, e.z1)("dx-message-inbox")(T),
		testId: "sidenav-account-inbox-link"
	}, {
		title: "account.bulk_redirects.title",
		url: "/bulk-redirects",
		iconType: "filter",
		hasPermission: T => (0, a.iY)(T)
	}],
	zone: [{
		title: "navigation.common.overview",
		url: "/",
		iconType: "clipboard",
		testId: "zone-navigation-link-overview",
		navigationType: "global-settings"
	}, {
		title: "navigation.common.analytics_and_logs",
		url: "/analytics",
		iconType: "chart",
		testId: "zone-navigation-link-analytics",
		navigationType: "version",
		hasPermission: T => (0, a.$n)(T, "analytics", "analytics"),
		pages: [{
			title: "navigation.zone.analytics.traffic",
			url: "/analytics/traffic",
			navigationType: "version",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.analytics.security",
			url: "/analytics/security",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.analytics.performance",
			url: "/analytics/performance",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.analytics.origin_reachability",
			url: "/analytics/originReachability",
			navigationType: "global-settings",
			hasPermission: T => {
				const ge = (0, v.nA)(T);
				return ge ? !!(!(0, u.yD)(T) && !!(0, v.ZB)(T, "origin_reachability_dash", "dash_view") && (0, v.tU)(ge, "enterprise") && !!(0, p.Ek)(T, "httpRequestsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.edge_reachability",
			url: "/analytics/edgeReachability",
			navigationType: "global-settings",
			hasPermission: T => {
				const ge = (0, v.nA)(T);
				return ge ? !!(!(0, u.yD)(T) && !!(0, v.ZB)(T, "edge_reachability_dash", "dash_view") && (0, v.tU)(ge, "enterprise") && !!(0, p.Ek)(T, "nelReportsAdaptiveGroups")) : !1
			}
		}, {
			title: "navigation.zone.analytics.dns",
			navigationType: "global-settings",
			url: "/analytics/dns"
		}, {
			title: "navigation.zone.analytics.workers",
			url: "/analytics/workers",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.analytics.logs",
			url: "/analytics/logs",
			navigationType: "both",
			hasPermission: T => (0, d.Xu)(T)
		}, {
			title: "navigation.zone.analytics.instant_logs",
			url: "/analytics/instant-logs",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T) && !!(0, v.ZB)(T, "logs", "instant_log") && !!(0, u.rV)(T, "logpush.max_instant_logs_jobs_allowed")
		}, {
			title: "navigation.zone.analytics.log_explorer",
			url: "/analytics/log-explorer",
			labels: ["beta"],
			navigationType: "global-settings",
			hasPermission: T => !!(0, q.V)(T)
		}]
	}, {
		title: "navigation.zone.zone_versioning",
		url: "/versioning",
		navigationType: "global-settings",
		iconType: "git-branch",
		testId: "zone-navigation-link-zone-versioning",
		tabs: N.bB,
		hasPermission: T => !(0, u.yD)(T) && (0, D.m7)(T)
	}, {
		title: "navigation.zone.dns",
		url: "/dns",
		navigationType: "global-settings",
		iconType: "reliability-dns",
		testId: "zone-navigation-link-dns",
		hasPermission: T => (0, a.$n)(T, "dns_records", "dns-record"),
		pages: [{
			title: "navigation.zone.dns.records",
			url: "/dns/records",
			testId: "zone-navigation-link-dns-records",
			navigationType: "global-settings"
		}, {
			title: "navigation.common.analytics",
			url: "/dns/analytics",
			labels: ["new"],
			testId: "zone-navigation-link-dns-overview",
			navigationType: "global-settings",
			hasPermission: T => !!(0, e.z1)("foundation-dns-enabled")(T) && ((0, u.$f)(T, "foundation_dns.advanced_nameservers_allowed") || (0, u.du)(T, "foundation_dns.advanced_nameservers_allowed"))
		}, {
			title: "navigation.zone.dns.settings",
			url: "/dns/settings",
			testId: "zone-navigation-link-dns-settings",
			navigationType: "global-settings"
		}]
	}, {
		title: "navigation.zone.email",
		url: "/email",
		navigationType: "global-settings",
		iconType: "email-forwarding",
		testId: "zone-navigation-link-email",
		pages: [{
			title: "navigation.zone.email.routing",
			navigationType: "global-settings",
			url: "/email/routing",
			tabs: x.hg,
			hasPermission: T => (0, a.iY)(T) && !(0, u.yD)(T) && (0, a.$n)(T, "dns_records", "dns-record")
		}, {
			title: "navigation.zone.email.dmarc-reports",
			navigationType: "global-settings",
			url: "/email/dmarc-management",
			labels: ["beta"],
			hasPermission: T => (0, g.ig)(T) ? !1 : (0, a.$n)(T, "dns_records", "dns-record") && !!(0, v.ZB)(T, "email", "dmarc_visible")
		}, {
			title: "navigation.zone.email.security",
			navigationType: "global-settings",
			url: "/email/security"
		}]
	}, {
		title: "navigation.zone.spectrum",
		url: "/spectrum",
		navigationType: "global-settings",
		iconType: "spectrum",
		testId: "zone-navigation-link-spectrum",
		hasPermission: T => {
			const ge = (0, v.nA)(T);
			if ((0, u.yD)(T) || !(0, a.wB)(T, "zone_settings", "spectrum.app") || !ge) return !1;
			const Ee = !!((0, y.l8)(T) || (0, v.DQ)(T)),
				de = !!(0, v.ZB)(T, "spectrum", "enabled"),
				w = !!(0, v.Ns)(ge);
			return de || Ee || !w
		}
	}, {
		title: "navigation.zone.ssl-tls",
		url: "/ssl-tls",
		iconType: "lock",
		testId: "zone-navigation-link-ssl-tls",
		navigationType: "both",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "ssl", "ssl.cert"),
		pages: [{
			title: "navigation.common.overview",
			url: "/ssl-tls",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.edge_certs",
			url: "/ssl-tls/edge-certificates",
			navigationType: "both"
		}, {
			title: "navigation.zone.ssl-tls.staging_certs",
			url: "/ssl-tls/staging-certificates",
			navigationType: "global-settings",
			hasPermission: T => (0, u.$f)(T, "staging_certificates")
		}, {
			title: "navigation.zone.ssl-tls.client_certs",
			url: "/ssl-tls/client-certificates",
			navigationType: "global-settings",
			hasPermission: T => !!(0, e.z1)("client-certificates")(T) || !!(0, v.ZB)(T, "ssl", "client_certificates")
		}, {
			title: "navigation.zone.ssl-tls.origin_server",
			navigationType: "global-settings",
			url: "/ssl-tls/origin"
		}, {
			title: "navigation.zone.ssl-tls.custom_hostnames",
			navigationType: "global-settings",
			url: "/ssl-tls/custom-hostnames"
		}]
	}, {
		title: "navigation.zone.security",
		url: "/security",
		iconType: "shield",
		testId: "zone-navigation-link-security",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "waf", "firewall.rule") || (0, a.$n)(T, "page_shield", "script-monitor"),
		pages: [{
			title: "navigation.zone.security.analytics",
			navigationType: "version",
			url: "/security/analytics",
			hasPermission: T => (0, l.B_)(T) && (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.events",
			url: "/security/events",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.waf",
			url: "/security/waf",
			navigationType: "version",
			tabs: b.gn,
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.page_shield",
			navigationType: "global-settings",
			url: "/security/page-shield",
			tabs: b.mt,
			hasPermission: T => (0, a.$n)(T, "page_shield", "script-monitor")
		}, {
			title: "navigation.zone.security.bots",
			url: "/security/bots",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.data",
			url: "/security/data",
			navigationType: "global-settings",
			hasPermission: T => (0, u.du)(T, "rulesets.fw_global_rulesets_execute_firewall_managed_cramr_allowed") && (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.api_shield",
			url: "/security/api-shield",
			labels: ["new"],
			navigationType: "version",
			hasPermission: T => {
				const ge = (0, v.nA)(T);
				return ge ? !!(0, v.ZB)(T, "firewall", "api_shield_tab") && (0, v.tU)(ge, "business") && (0, a.$n)(T, "waf", "firewall.rule") : !1
			},
			tabs: b.Dw
		}, {
			title: "navigation.zone.security.ddos",
			url: "/security/ddos",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule")
		}, {
			title: "navigation.zone.security.settings",
			url: "/security/settings",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule")
		}]
	}, {
		title: "navigation.zone.access",
		url: "/access",
		navigationType: "global-settings",
		iconType: "cloudflare-access",
		testId: "zone-navigation-link-access",
		hasPermission: T => !(0, u.yD)(T) && ((0, a.wB)(T, "access", "access.app") || (0, a.wB)(T, "access", "access.zone.app"))
	}, {
		title: "navigation.zone.speed",
		url: "/speed",
		iconType: "bolt",
		testId: "zone-navigation-link-speed",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "setting"),
		pages: [{
			title: "navigation.zone.speed.test",
			url: "/speed/test",
			navigationType: "version",
			labels: ["beta"]
		}, {
			title: "navigation.zone.speed.optimization",
			url: "/speed/optimization",
			navigationType: "version",
			tabs: B.x
		}]
	}, {
		title: "navigation.zone.caching",
		url: "/caching",
		iconType: "drive",
		testId: "zone-navigation-link-caching",
		navigationType: "global-settings",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "setting"),
		pages: [{
			title: "navigation.common.overview",
			navigationType: "global-settings",
			url: "/caching",
			tabs: G
		}, {
			title: "navigation.zone.caching.configuration",
			url: "/caching/configuration",
			navigationType: "both"
		}, {
			title: "navigation.zone.caching.cache_rules",
			url: "/caching/cache-rules",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule") || (0, a.$n)(T, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.caching.tiered_cache",
			url: "/caching/tiered-cache",
			navigationType: "version",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.zone.caching.cache_reserve",
			navigationType: "global-settings",
			url: "/caching/cache-reserve"
		}]
	}, {
		title: "navigation.zone.workers",
		url: "/workers",
		iconType: "edgeworker",
		testId: "zone-navigation-link-workers",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.wB)(T, "worker", "worker.route")
	}, {
		title: "navigation.zone.rules",
		url: "/rules/configuration-rules",
		iconType: "filter",
		testId: "zone-navigation-link-page-rules",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "page-rule"),
		pages: [{
			title: "navigation.zone.rules.configuration_rules",
			url: "/rules/configuration-rules",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "firewall.rule") || (0, a.$n)(T, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.snippets",
			url: "/rules/snippets",
			labels: ["alpha"],
			navigationType: "version",
			hasPermission: T => (!!(0, R.GM)(T) || !!(0, e.z1)("snippets-enabled")(T)) && (0, a.$n)(T, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.transform_rules",
			url: "/rules/transform-rules",
			navigationType: "version",
			tabs: I.m
		}, {
			title: "navigation.zone.rules.redirect_rules",
			url: "/rules/redirect-rules",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "zone_settings", "page-rule")
		}, {
			title: "navigation.zone.rules.origin_rules",
			url: "/rules/origin-rules",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "page-rule", "read")
		}, {
			title: "navigation.zone.rules.compression_rules",
			url: "/rules/compression-rules",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "page-rule", "read") && !!(0, u.rV)(T, "rulesets.response_compression_max_rules") && !!(0, e.z1)("compression-rules")(T)
		}, {
			title: "navigation.zone.rules.page_rules",
			url: "/rules",
			labels: ["deprecated"],
			navigationType: "version"
		}, {
			title: "navigation.zone.rules.settings",
			url: "/rules/settings",
			navigationType: "version",
			hasPermission: T => (0, a.$n)(T, "waf", "page-rule", "read")
		}]
	}, {
		title: "navigation.zone.network",
		url: "/network",
		iconType: "network",
		testId: "zone-navigation-link-network",
		navigationType: "both",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "setting")
	}, {
		title: "navigation.zone.traffic",
		url: "/traffic",
		iconType: "reliability-load-balancer",
		testId: "zone-navigation-link-traffic",
		navigationType: "version",
		hasPermission: T => (0, a.$n)(T, "lb", "load-balancer") || (0, a.$n)(T, "waitingroom", "waiting-room"),
		pages: [{
			title: "navigation.zone.traffic.argo",
			url: "/traffic",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.traffic.load_balancing",
			url: "/traffic/load-balancing",
			navigationType: "global-settings",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.zone.traffic.load_balancing_analytics",
			url: "/traffic/load-balancing-analytics",
			navigationType: "global-settings",
			hasPermission: T => (0, a.iY)(T)
		}, {
			title: "navigation.zone.traffic.health_checks",
			url: "/traffic/health-checks",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T)
		}, {
			title: "navigation.zone.traffic.health_check_analytics",
			url: "/traffic/health-check-analytics",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T) && !!(0, p.Ek)(T, "healthCheckEventsAdaptiveGroups")
		}, {
			title: "navigation.zone.traffic.waiting_rooms",
			url: "/traffic/waiting-rooms",
			navigationType: "global-settings",
			hasPermission: T => !(0, u.yD)(T) && ((0, u.du)(T, "waiting_rooms.allowed") || !!(0, v.ZB)(T, "waitingroomaccessfeatureflipper", "waiting_rooms_ga"))
		}]
	}, {
		title: "navigation.zone.custom_pages",
		url: "/custom-pages",
		iconType: "wrench",
		testId: "zone-navigation-link-custom-pages",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "custom-page")
	}, {
		title: "navigation.zone.apps",
		url: "/apps",
		navigationType: "global-settings",
		iconType: "platform-apps",
		testId: "zone-navigation-link-apps",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "app", "com.cloudflare.api.app.manage", "edit")
	}, {
		title: "navigation.zone.scrape_shield",
		url: "/content-protection",
		iconType: "file",
		testId: "zone-navigation-link-content-protection",
		navigationType: "version",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zone_settings", "setting")
	}, {
		title: "navigation.zone.zaraz",
		url: "/zaraz",
		navigationType: "global-settings",
		labels: T => [],
		iconType: "zaraz",
		testId: "zone-navigation-link-zaraz",
		hasPermission: T => !(0, u.yD)(T) && (0, a.$n)(T, "zaraz", "zaraz"),
		pages: [{
			title: "navigation.zone.zaraz.tools.configuration",
			navigationType: "global-settings",
			url: "/zaraz/tools-config",
			tabs: f.az
		}, {
			title: "navigation.zone.zaraz.consent",
			navigationType: "global-settings",
			url: "/zaraz/consent"
		}, {
			title: "navigation.zone.zaraz.history",
			navigationType: "global-settings",
			url: "/zaraz/history"
		}, {
			title: "navigation.zone.zaraz.monitoring",
			navigationType: "global-settings",
			url: "/zaraz/monitoring"
		}, {
			title: "navigation.zone.zaraz.settings",
			navigationType: "global-settings",
			url: "/zaraz/settings"
		}, {
			title: "navigation.zone.zaraz.plans",
			navigationType: "global-settings",
			url: "/zaraz/plans",
			hasPermission: T => !!(0, re.GM)(T) && !!(0, e.z1)("zaraz-plans-page-access")(T)
		}]
	}, {
		title: "navigation.zone.web3.title",
		url: "/web3",
		navigationType: "global-settings",
		iconType: "web3",
		hasPermission: T => {
			const ge = (0, o.uF)(T);
			return ((ge == null ? void 0 : ge.roles) || []).includes("Trust and Safety") ? !1 : !(0, u.yD)(T)
		}
	}],
	zeroTrust: [{
		url: () => (0, O.Uj)("home"),
		title: "navigation.account.zero_trust",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("analytics/access"),
		title: "navigation.account.zero_trust.analytics",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("gateway/locations"),
		title: "navigation.account.zero_trust.gateway",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("access/apps"),
		title: "navigation.account.zero_trust.access",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("team/devices"),
		title: "navigation.account.zero_trust.my_team",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("logs/admin"),
		title: "navigation.account.zero_trust.logs",
		iconType: "cloudflare-zero-trust"
	}, {
		url: () => (0, O.Uj)("settings"),
		title: "navigation.account.zero_trust.settings",
		iconType: "cloudflare-zero-trust"
	}],
	support: U.G
}