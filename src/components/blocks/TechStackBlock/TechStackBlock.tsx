import React, { useState } from 'react';
import './TechStackBlock.css';

// Компонент для отображения иконок технологий
const TechIcon: React.FC<{ name: string }> = ({ name }) => {
  // Специальные случаи с несколькими иконками
  if (name === 'prometheus') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg" 
          alt="Prometheus" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/E6522C/FFFFFF?text=P';
          }}
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Grafana_logo.svg/640px-Grafana_logo.svg.png" 
          alt="Grafana" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/F46800/FFFFFF?text=G';
          }}
        />
      </div>
    );
  }

  if (name === 'elasticsearch') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://raw.githubusercontent.com/mathzdev/elastic-logstash-csv-importer-sample-elk/main/elk-stack-logo.png" 
          alt="ELK Stack" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=ELK';
          }}
        />
        <img 
          src="https://redos.red-soft.ru/upload/iblock/693/34kq1ukytjhkkfrtxl226zgtqk402gfi/opensearch.png" 
          alt="OpenSearch" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=OS';
          }}
        />
      </div>
    );
  }

  if (name === 'langchain') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://camo.githubusercontent.com/c2474ea02223bcda94d70b5111a220ff3259c145acded59471572c35398eaea8/68747470733a2f2f72656769737472792e6e706d6d6972726f722e636f6d2f406c6f62656875622f69636f6e732d7374617469632d706e672f6c61746573742f66696c65732f6461726b2f6c616e67636861696e2d636f6c6f722e706e67" 
          alt="LangChain" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=LC';
          }}
        />
        <img 
          src="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/ventures/lillamaindex-wordmark-480x480.svg?id=7865ad0b-0dcb-404c-ae11-ab357dd8354f" 
          alt="LlamaIndex" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=LI';
          }}
        />
      </div>
    );
  }

  if (name === 'mlflow') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://s3.amazonaws.com/media-p.slid.es/uploads/547146/images/6563608/mlflow.png" 
          alt="MLflow" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=M';
          }}
        />
        <img 
          src="https://repository-images.githubusercontent.com/83878269/a5c64400-8fdd-11ea-9851-ec57bc168db5" 
          alt="DVC" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=D';
          }}
        />
      </div>
    );
  }

  if (name === 'vector') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Milvus-logo-color-small.png" 
          alt="Milvus" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=M';
          }}
        />
        <img 
          src="https://d7umqicpi7263.cloudfront.net/img/product/88519d4f-d043-409f-9a63-f32bc0899f3a.com/4282af7809304883a29ccca58b27b013" 
          alt="Weaviate" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=W';
          }}
        />
      </div>
    );
  }

  if (name === 'airflow') {
    return (
      <div className="multi-icon-container wide">
        <img 
          src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/d82/597/20b/d8259720baa7bab4797d8a92f052d4a0.png" 
          alt="Airflow" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=A';
          }}
        />
        <img 
          src="https://raw.githubusercontent.com/dagster-io/dagster/master/.github/dagster-logo-light.svg" 
          alt="Dagster" 
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/30x30/4A5568/FFFFFF?text=D';
          }}
        />
      </div>
    );
  }

  const iconUrls: { [key: string]: string } = {
    react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    next: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
    angular: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
    vue: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    python: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    nodejs: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    php: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    java: 'https://www.oracle.com/a/ocom/img/cb71-java-logo.png',
    go: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg',
    flutter: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png',
    kotlin: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png',
    swift: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg',
    docker: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
    kubernetes: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg',
    terraform: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Terraform_Logo.svg',
    nginx: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg',
    cicd: 'https://www.jenkins.io/images/logos/jenkins/jenkins.png',
    prometheus: 'https://prometheus.io/assets/favicons/android-chrome-192x192.png',
    elasticsearch: 'https://www.elastic.co/assets/blt0b0c0985b6b0b5a3/elastic-logo.svg',
    langchain: 'https://raw.githubusercontent.com/hwchase17/langchain/master/docs/static/img/favicon.png',
    mlflow: 'https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png',
    huggingface: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png',
    vector: 'https://raw.githubusercontent.com/facebookresearch/faiss/main/docs/source/_static/img/faiss_logo.png',
    airflow: 'https://airflow.apache.org/images/airflow_logo.png',
    spark: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg',
    grafana: 'https://grafana.com/static/img/fav32.png',
    opensearch: 'https://opensearch.org/assets/brand/PNG/Logo/opensearch_logo_default.png',
    llamaindex: 'https://raw.githubusercontent.com/jerryjliu/llama_index/main/docs/logo.png',
    dvc: 'https://dvc.org/static/img/dvc_logo.png',
    milvus: 'https://milvus.io/assets/milvus-logo.svg',
    weaviate: 'https://weaviate.io/assets/images/weaviate-logo.png',
    dagster: 'https://dagster.io/images/dagster-logo.png',
    vk: 'https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg'
  };

  const iconUrl = iconUrls[name] || 'https://via.placeholder.com/40x40/4A5568/FFFFFF?text=?';
  
  return (
    <img 
      src={iconUrl} 
      alt={`${name} logo`}
      style={{ width: 40, height: 40, objectFit: 'contain' }}
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = 'https://via.placeholder.com/40x40/4A5568/FFFFFF?text=?';
      }}
    />
  );
};

const TechStackBlock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleExpand = () => {
    setIsExpanded(true);
  };
  
  const handleCollapse = () => {
    setIsExpanded(false);
  };
  
  const techCategories = [
    {
      name: 'FRONTEND',
      technologies: [
        { name: 'REACT', icon: 'react' },
        { name: 'NEXT', icon: 'next' },
        { name: 'VK MINI APPS', icon: 'vk' },
        { name: 'ANGULAR', icon: 'angular' },
        { name: 'VUE.JS', icon: 'vue' }
      ]
    },
    {
      name: 'BACKEND',
      technologies: [
        { name: 'PYTHON', icon: 'python' },
        { name: 'NODE.JS', icon: 'nodejs' },
        { name: 'PHP', icon: 'php' },
        { name: 'JAVA', icon: 'java' },
        { name: 'GO', icon: 'go' }
      ]
    },
    {
      name: 'MOBILE',
      technologies: [
        { name: 'REACT NATIVE', icon: 'react' },
        { name: 'VK MINI APPS', icon: 'vk' },
        { name: 'FLUTTER', icon: 'flutter' },
        { name: 'KOTLIN', icon: 'kotlin' },
        { name: 'SWIFT', icon: 'swift' }
      ]
    },
    {
      name: 'DEVOPS',
      technologies: [
        { name: 'DOCKER', icon: 'docker', row: 1 },
        { name: 'KUBERNETES', icon: 'kubernetes', row: 1 },
        { name: 'ANSIBLE / TERRAFORM', icon: 'terraform', row: 1 },
        { name: 'NGINX / TRAEFIK', icon: 'nginx', row: 1 },
        { name: 'CI/CD', icon: 'cicd', row: 1 },
        { name: 'PROMETHEUS + GRAFANA', icon: 'prometheus', row: 2, col: 1 },
        { name: 'ELK / OPENSEARCH STACK', icon: 'elasticsearch', row: 2, col: 4 }
      ]
    },
    {
      name: 'ML',
      technologies: [
        { name: 'PYTHON', icon: 'python', row: 1 },
        { name: 'LANGCHAIN / LLAMAINDEX', icon: 'langchain', row: 1 },
        { name: 'MLFLOW / DVC', icon: 'mlflow', row: 1 },
        { name: 'HUGGINGFACE TRANSFORMERS', icon: 'huggingface', row: 1 },
        { name: 'FAISS / MILVUS / WEAVIATE', icon: 'vector', row: 2, col: 1 },
        { name: 'AIRFLOW / DAGSTER', icon: 'airflow', row: 2, col: 3 },
        { name: 'APACHE SPARK / RAY', icon: 'spark', row: 2, col: 4 }
      ]
    }
  ];

  const visibleCategories = isExpanded ? techCategories : techCategories.slice(0, 2);
  const hiddenCategoriesCount = techCategories.length - 2;

  return (
    <div className="tech-stack-container">
      <div className="tech-stack-content">
        <h2 className="tech-stack-title">ТЕХНОЛОГИЧЕСКИЙ СТЕК</h2>
        
        <div className="tech-categories">
          {techCategories.map((category, categoryIndex) => {
            const isHidden = !isExpanded && categoryIndex >= 2;
            return (
              <div key={categoryIndex} className={`tech-category ${isHidden ? 'tech-category-hidden' : ''}`}>
                <h3 className="category-label">{category.name}</h3>
                <div className="technologies-grid">
                  {category.technologies.map((tech, techIndex) => {
                    const techName = tech.name;
                    const techIcon = tech.icon;
                    const row = 'row' in tech ? tech.row : 1;
                    const col = 'col' in tech ? tech.col : techIndex + 1;
                    
                    return (
                      <div
                        key={techIndex}
                        className={`tech-item tech-row-${row} tech-col-${col}`}
                      >
                        <div className="tech-icon">
                          <TechIcon name={techIcon} />
                        </div>
                        <span className="tech-name">{techName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          
          {/* Кнопка разворачивания */}
          {!isExpanded && hiddenCategoriesCount > 0 && (
            <div className="expand-section">
              <button 
                className="expand-button"
                onClick={handleExpand}
              >
                <span className="expand-text">
                  ПОКАЗАТЬ ЕЩЕ {hiddenCategoriesCount} КАТЕГОРИЙ
                </span>
                <div className="expand-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </div>
              </button>
            </div>
          )}
          
          {/* Кнопка сворачивания */}
          {isExpanded && (
            <div className="collapse-section">
              <button 
                className="collapse-button"
                onClick={handleCollapse}
              >
                <span className="collapse-text">
                  СВЕРНУТЬ
                </span>
                <div className="collapse-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6"/>
                  </svg>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Волнистые линии на фоне */}
      <svg className="wavy-lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wavyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
        
        <path 
          d="M 0 100 Q 200 50 400 100 T 800 80 T 1200 120" 
          stroke="url(#wavyGradient)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.6"
        />
        
        <path 
          d="M 0 300 Q 300 250 600 300 T 1200 280" 
          stroke="url(#wavyGradient)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.4"
        />
        
        <path 
          d="M 0 500 Q 150 450 300 500 T 600 480 T 900 520 T 1200 500" 
          stroke="url(#wavyGradient)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.3"
        />
        
        <path 
          d="M 0 700 Q 250 650 500 700 T 1000 680 T 1200 720" 
          stroke="url(#wavyGradient)" 
          strokeWidth="1" 
          fill="none"
          opacity="0.5"
        />
      </svg>
    </div>
  );
};

export default TechStackBlock;
