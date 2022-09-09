from django.db import models


class Kit(models.Model):
    titulo = models.CharField(max_length=100, unique=True)
    descricao = models.CharField(max_length=500)
    qtd_max_marmitas = models.IntegerField(null=False)
    valor = models.DecimalField(max_digits=5, decimal_places=2, null=False)
    link = models.CharField(max_length=500)
    ativo = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.titulo

    class Meta:
        ordering = ["qtd_max_marmitas"]

class Marmita(models.Model):
    titulo = models.CharField(max_length=100, unique=True)
    descricao = models.CharField(max_length=500)
    link = models.CharField(max_length=500)
    ativo = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.titulo

    class Meta:
        ordering = ["titulo"]


class ItemPedido(models.Model):
    quantidade = models.IntegerField()
    kit = models.ForeignKey(Kit, on_delete=models.PROTECT, related_name="itemPedido")
    marmitas = models.ManyToManyField(Marmita)

    def __str__(self):
        return self.kit.titulo
    class Meta:
        ordering = ["kit"]
