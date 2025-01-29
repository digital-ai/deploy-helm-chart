
USER root

RUN microdnf clean all &&  \
    microdnf upgrade -y \
        --refresh \
        --best \
        --nodocs \
        --noplugins \
        --setopt=install_weak_deps=0 && \
    microdnf clean all

USER ${USER_UID}

LABEL name="Digital.ai Deploy Operator" \
      vendor="Digital.ai" \
      maintainer="Digital.ai" \
      version="${VERSION}" \
      release="1" \
      summary="Digital.ai Deploy Operator based on helm chart" \
      description="Digital.ai Deploy Operator based on helm chart from https://github.com/digital-ai/deploy-helm-chart"

COPY licenses /licenses
