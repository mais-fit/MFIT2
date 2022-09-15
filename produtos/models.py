# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Clientes(models.Model):
    nome_completo = models.CharField(max_length=500)
    cpf = models.CharField(unique=True, max_length=11)
    nascimento = models.DateField()
    genero = models.CharField(max_length=1)
    celular = models.CharField(max_length=11)
    cep = models.CharField(max_length=8)
    logradouro = models.CharField(max_length=500)
    numero = models.CharField(max_length=5)
    complemento = models.CharField(max_length=100, blank=True, null=True)
    bairro = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    senha = models.CharField(max_length=500)
    ativo = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'clientes'


class FormasPagamentos(models.Model):
    qtd = models.IntegerField()
    meio_pagamento = models.OneToOneField('MeiosPagamentos', models.DO_NOTHING, primary_key=True)
    pedido = models.ForeignKey('Pedidos', models.DO_NOTHING)

    class Meta:
        db_table = 'formas_pagamentos'
        unique_together = (('meio_pagamento', 'pedido'),)


class ItensKits(models.Model):
    qtd_marmita = models.IntegerField()
    marmita = models.OneToOneField('Marmitas', models.DO_NOTHING, primary_key=True)
    item_pedido = models.ForeignKey('ItensPedidos', models.DO_NOTHING)

    class Meta:
        db_table = 'itens_kits'
        unique_together = (('marmita', 'item_pedido'),)


class ItensPedidos(models.Model):
    preco = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    pedido = models.ForeignKey('Pedidos', models.DO_NOTHING)
    kit = models.ForeignKey('Kits', models.DO_NOTHING)

    class Meta:
        db_table = 'itens_pedidos'


class Kits(models.Model):
    descricao = models.CharField(max_length=500)
    qtd_max_marmitas = models.IntegerField()
    valor = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)
    link = models.CharField(max_length=500)
    ativo = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'kits'


class Marmitas(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.CharField(max_length=500)
    link = models.CharField(max_length=500, blank=True, null=True)
    ativo = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'marmitas'


class MeiosPagamentos(models.Model):
    descricao = models.CharField(max_length=25)
    link = models.CharField(max_length=100, blank=True, null=True)
    ativo = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'meios_pagamentos'


class Pedidos(models.Model):
    status = models.CharField(max_length=12)
    data_emissao = models.DateField()
    cliente = models.ForeignKey(Clientes, models.DO_NOTHING)

    class Meta:
        db_table = 'pedidos'
