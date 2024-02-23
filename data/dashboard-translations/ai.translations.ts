{
	access_cloudflares_api_directly_in_your_applications: "Call Workers AI from any deployment using the REST API.",
	access_requested: "Access requested",
	api_tokens: "API Tokens",
	api_token_instructions: {
		step_one: "Select **Create Token**.",
		step_two: "Optionally, change the token name.",
		step_three: "Finish by selecting **Continue to Summary** > **Create Token**."
	},
	api_spec: "API Spec",
	api_spec_description: "Review the Workers AI API spec to build your application using the REST API",
	beta_banner: "Workers AI is currently in Open Beta and limits & access are subject to change",
	browse_model_catalog: "Browse Model Catalog",
	build_your_first_ai_application: "Build your first AI application",
	binding_workers_ai_to_a_worker: "Binding Workers AI to a Worker",
	binding_workers_ai_to_a_worker_description: "Learn how to access the Workers AI catalogue from a Worker by creating a binding",
	charts: {
		units: {
			cost: "Cost",
			neurons: "Neurons"
		},
		chart_title: {
			cost: "All Models",
			neuros: "All Models"
		},
		period: (0, t.d)`Last <0>${"days"}</0> days: <1>${"iniDate"}</1> - Today`
	},
	sidebar: {
		cost_summary: {
			title: "Cost Summary",
			total_costs: "Total Costs",
			this_month: "This Month",
			see_all: "See All >",
			see_less: "< See Less"
		},
		quick_links: {
			title: "Quick Links",
			links: {
				docs: "Docs",
				plans: "Plans"
			}
		},
		usage: {
			title: {
				free: "Daily Usage Limits",
				paid: "Daily Usage"
			},
			limits: {
				max: "You have reached daily usage limit. Upgrade to the <0>Workers paid plan</0>.",
				all_most_limit: "Upgrade to the <0>Workers paid plan</0> to increase your daily usage limit."
			}
		},
		invoice_note: {
			note: "These numbers are estimations and may not reflect final invoices."
		},
		neuros: "Neurons",
		today: "Today"
	},
	pagination: {
		models: {
			single: "Model",
			plural: "Models"
		}
	},
	models_details: {
		status: {
			new: "New",
			experimental: "Experimental",
			active: "Active",
			active_tooltip: "Request received in the last 30 days"
		}
	},
	models_list: {
		common: {
			no_models: "No models",
			clear: "Clear",
			all_provideres: "All Providers",
			all_authors: "All Authors",
			all_types: "All Types"
		}
	},
	create_ai_worker: "Create an AI Model Worker",
	create_ai_worker_description: "Choose an AI application template.",
	workers_ai_documentation: "Workers AI documentation",
	explore_catalog: "Explore catalog",
	explore_workers_templates: "Explore Workers Templates",
	get_api_token: "Get API Token",
	get_api_token_description: "To use Workers AI API, create a custom token with the correct *Read* permissions:",
	join_waitlist: "Join Waitlist",
	make_your_first_inference_call: "Make your first inference call",
	make_your_first_inference_call_description: "Substitute your Workers AI API token into the example below to make your first Worker AI API call.",
	menu: {
		analytics: "Analytics",
		models: "Models"
	},
	model_catalog: "Model Catalog",
	using_workers_ai_rest_api: "Using Workers AI REST API",
	using_workers_ai_rest_api_description: (0, t.d)`Call Workers AI from anywhere using our API. <0>Workers AI REST API documentation</0>`,
	product_title: "Workers AI",
	provided_by: (0, t.d)`Provided by <0>${"provider"}</0>`,
	request_access: "Request access",
	reserve_a_full_access_seat: "Reserve spot on waitlist",
	reserve_a_full_access_seat_description: "Join the waitlist for access to production scale Workers AI ",
	something_went_wrong: "Something went wrong.",
	tagline: "Run predictive and generative AI models with the performance and reliability of Workers",
	template_types: {
		speech_to_text_app: {
			title: "Speech to text app",
			description: "Parse human speech and convert voice recordings into text."
		},
		image_classification: {
			title: "Image Classification",
			description: "Identify and label objects found in images."
		},
		text_classification: {
			title: "Text Classification",
			description: "Categorize unstructured text into groups based on criteria of your choice."
		},
		translation_app: {
			title: "Translation App",
			description: "Translate text from one language to another"
		},
		vector_embedding_app: {
			title: "Vector Embedding App",
			description: "Convert text into mathematical vectors so that you can perform text analysis and transformations."
		},
		text_to_image: {
			title: "Text to Image",
			description: "Generate image based on text prompt."
		}
	},
	terms: "Terms",
	limited_access: "Due to overwhelming demand, we've had to limit access to Workers AI.",
	reserve_your_spot: "Reserve your spot on our waitlist.",
	welcome_to_workers_ai: "Welcome to Workers AI",
	welcome_tagline: "Workers AI offers a catalog of AI inference models that you can access from a Worker or via the REST API",
	workers_ai_api_key: "Workers AI API Key",
	workers_ai_docs: "Workers AI docs",
	workers_ai_examples: "Workers AI Examples",
	workers_ai_examples_description: "Get inspired by projects build by the Cloudflare developer community ",
	workers_ai_workers_templates: "Workers AI Workers Templates",
	workers_ai_workers_templates_description: "Select from a set of model or task specific templates to deploy a Workers AI Worker",
	use_rest_api: "Use REST API",
	using_edge_ai_api: "Using Workers AI API ",
	using_templates: "Build and deploy a Llama 2 Worker",
	using_templates_description: "Get started with everything you need to run a Llama 2 model from a Worker.",
	modelTasks: {
		"Feature Extraction": "Feature Extraction",
		"Text-to-Image": "Text-to-Image",
		"Image-to-Text": "Image-to-Text",
		"Text-to-Video": "Text-to-Video",
		"Visual Question Answering": "Visual Question Answering",
		"Document Question Answering": "Document Question Answering",
		"Graph Machine Learning": "Graph Machine Learning",
		"Depth Estimation": "Depth Estimation",
		"Image Classification": "Image Classification",
		"Object Detection": "Object Detection",
		"Image Segmentation": "Image Segmentation",
		"Image-to-Image": "Image-to-Image",
		"Unconditional Image Generation": "Unconditional Image Generation",
		"Video Classification": "Video Classification",
		"Zero-Shot Image Classification": "Zero-Shot Image Classification",
		"Text Classification": "Text Classification",
		"Token Classification": "Token Classification",
		"Table Question Answering": "Table Question Answering",
		"Question Answering": "Question Answering",
		"Zero-Shot Classification": "Zero-Shot Classification",
		Translation: "Translation",
		Summarization: "Summarization",
		Conversational: "Conversational",
		"Text Generation": "Text Generation",
		"Text2Text Generation": "Text2Text Generation",
		"Fill-Mask": "Fill-Mask",
		"Sentence Similarity": "Sentence Similarity",
		"Text-to-Speech": "Text-to-Speech",
		"Automatic Speech Recognition": "Automatic Speech Recognition",
		"Audio-to-Audio": "Audio-to-Audio",
		"Audio Classification": "Audio Classification",
		"Voice Activity Detection": "Voice Activity Detection",
		"Tabular Classification": "Tabular Classification",
		"Tabular Regression": "Tabular Regression",
		"Reinforcement Learning": "Reinforcement Learning",
		Robotics: "Robotics",
		"Text Embeddings": "Text Embeddings"
	}
}